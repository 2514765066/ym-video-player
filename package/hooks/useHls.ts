import Hls from "hls.js";
import { play } from "@/stores/usePlay";
import { videoRef } from "@/stores/useEl";

export const useHls = () => {
  //hls实例
  const hls = new Hls({
    startFragPrefetch: true,
  });

  //加载完成播放
  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    hls.currentLevel = hls.levels.length - 1;
    play();
  });

  //挂载
  onMounted(() => {
    hls.attachMedia(videoRef.value!);
  });

  //卸载
  onUnmounted(() => {
    hls.destroy();
  });

  return {
    hls,
  };
};
