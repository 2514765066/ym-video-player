import { isFullscreen } from "./useFullscreen";

//控制显示
export const controlVisible = ref(true);

//是否悬浮再控制组件中
export const isHover = ref(false);

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

  if (isHover.value) {
    return;
  }

  timer = setTimeout(() => {
    if (!isFullscreen.value) {
      return;
    }

    controlVisible.value = false;
  }, 2000);
};
