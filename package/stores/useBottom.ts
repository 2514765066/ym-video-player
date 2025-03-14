import { isFullscreen } from "./useFullscreen";

//控制显示
export const controlVisible = ref(true);

//bottom隐藏的计时器
let timer: number;

//显示bottom
const show = () => {
  if (controlVisible.value) {
    return;
  }

  controlVisible.value = true;
};

//在player中移动触发
export const handleMouseMove = () => {
  clearTimeout(timer);

  show();

  timer = setTimeout(() => {
    if (!isFullscreen.value) {
      return;
    }

    controlVisible.value = false;
  }, 2000);
};
