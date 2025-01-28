import { toggle } from "@/stores/usePlay";
import { playrate } from "@/stores/usePlayrate";
import { back, forward } from "@/stores/useTime";

export const useEvent = () => {
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

  onMounted(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  });
};
