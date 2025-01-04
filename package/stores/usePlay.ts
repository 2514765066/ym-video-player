import { videoRef } from "./useEl";

//是否播放
const _isPlay = ref(false);

//只读
export const isPlay = readonly(_isPlay);

//播放
export const play = () => {
  if (!videoRef.value) {
    return;
  }

  _isPlay.value = true;

  videoRef.value.play();
};

//暂停
export const pause = () => {
  if (!videoRef.value) {
    return;
  }

  _isPlay.value = false;

  videoRef.value.pause();
};

//切换
export const toggle = () => {
  isPlay.value ? pause() : play();
};
