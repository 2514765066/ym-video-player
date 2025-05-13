import { toggle } from "@/stores/usePlay";
import { playrate } from "@/stores/usePlayrate";
import { back, forward } from "@/stores/useTime";
import Hls from "hls.js";
import { play } from "@/stores/usePlay";
import { videoRef } from "@/stores/useEl";
import type { Data } from "@/type";
import type { ModelRef } from "vue";

export const useInit = (data: ModelRef<Data>) => {
  //hls实例
  const hls = new Hls({
    startFragPrefetch: true,
    maxBufferLength: 5 * 60,
    maxBufferSize: 1024 * 1024 * 200,
  });

  //加载完成播放
  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    hls.currentLevel = hls.levels.length - 1;
    play();
  });

  let holdTimeout: number;

  //是否按下右方向键
  const isHolding = ref(false);

  //键盘抬起事件
  const handleKeyUp = (e: KeyboardEvent) => {
    switch (e.key) {
      case " ":
        toggle();
        return;

      case "ArrowRight":
        clearTimeout(holdTimeout);

        if (isHolding.value) {
          isHolding.value = false;
          playrate.value = 1;
          return;
        }

        forward();
        return;

      case "ArrowLeft":
        back();
        return;
    }
  };

  //键盘按下事件
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowRight":
        if (isHolding.value) {
          return;
        }

        holdTimeout = setTimeout(() => {
          isHolding.value = true;
          playrate.value = 3;
        }, 300);
        return;
    }
  };

  //切换播放链接
  watchEffect(() => {
    hls.loadSource(data.value.url[data.value.history]);
  });

  onMounted(() => {
    hls.attachMedia(videoRef.value!);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  });

  onUnmounted(() => {
    hls.destroy();
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  });
};
