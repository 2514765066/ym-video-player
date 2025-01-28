import { videoRef } from "./useEl";

//只读
export const isPlay = ref(false);

//播放
export const play = () => {
  if (!videoRef.value) {
    return;
  }

  isPlay.value = true;

  videoRef.value.play();
};

//暂停
export const pause = () => {
  if (!videoRef.value) {
    return;
  }

  isPlay.value = false;

  videoRef.value.pause();
};

//切换
export const toggle = () => {
  isPlay.value ? pause() : play();
};
