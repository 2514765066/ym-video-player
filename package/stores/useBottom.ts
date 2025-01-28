import { isFullscreen } from "./useFullscreen";

//只读
export const bottomVisible = ref(true);

//bottom隐藏的计时器
let timer: number;

//显示bottom
const show = () => {
  if (bottomVisible.value) {
    return;
  }

  bottomVisible.value = true;
};

//在player中移动触发
export const handleMouseMove = () => {
  clearTimeout(timer);

  show();

  timer = setTimeout(() => {
    if (!isFullscreen.value) {
      return;
    }

    bottomVisible.value = false;
  }, 2000);
};
