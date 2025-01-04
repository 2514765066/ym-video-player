import { playerRef } from "./useEl";

//是否全屏
const _isFullscreen = ref(false);
export const isFullscreen = readonly(_isFullscreen);

//全屏
export const full = async () => {
  if (!playerRef.value) {
    return;
  }

  _isFullscreen.value = true;

  await playerRef.value.requestFullscreen();
};

//退出全屏
export const exit = async () => {
  if (!document.fullscreenElement) {
    return;
  }

  _isFullscreen.value = false;

  await document.exitFullscreen();
};

//切换
export const toggle = () => {
  isFullscreen.value ? exit() : full();
};
