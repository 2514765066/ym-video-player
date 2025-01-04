import { toggle } from "@/stores/usePlay";

export const useEvent = () => {
  //键盘抬起事件
  const handleKeyUp = (e: KeyboardEvent) => {
    switch (e.key) {
      case " ":
        toggle();
        return;
    }
  };

  onMounted(() => {
    window.addEventListener("keyup", handleKeyUp);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyUp);
  });
};
