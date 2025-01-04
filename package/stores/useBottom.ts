import { isFullscreen } from "./useFullscreen";

//bottom是否显示
const _bottomVisible = ref(true);

//只读
export const bottomVisible = readonly(_bottomVisible);

//bottom隐藏的计时器
let timer: number;

//显示bottom
const show = () => {
  if (bottomVisible.value) {
    return;
  }

  _bottomVisible.value = true;
};

//在player中移动触发
export const handleMouseMove = () => {
  clearTimeout(timer);

  show();

  timer = setTimeout(() => {
    if (!isFullscreen.value) {
      return;
    }

    _bottomVisible.value = false;
  }, 2000);
};
