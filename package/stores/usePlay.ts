import { videoRef } from "./useEl";

//只读
export const isPlay = ref(false);

//播放
export const play = () => {
  isPlay.value = true;
};

//暂停
export const pause = () => {
  isPlay.value = false;
};

//切换
export const toggle = () => {
  isPlay.value = !isPlay.value;
};

watchEffect(() => {
  if (!videoRef.value) {
    return;
  }

  isPlay.value ? videoRef.value.play() : videoRef.value.pause();
});
