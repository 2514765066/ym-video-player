import { videoRef } from "./useEl";

//视频时长
export const videoDuration = ref(0);

//当前播放时长
export const videoCurrentTime = ref(0);

//缓冲区大小
export const videoBufferedTime = ref(0);

//前进
export const forward = (seconde: number = 5) => {
  go(videoCurrentTime.value + seconde);
};

//后退
export const back = (seconde: number = 5) => {
  go(videoCurrentTime.value - seconde);
};

//到达某一时间
export const go = (seconde: number) => {
  if (!videoRef.value) {
    return;
  }

  videoRef.value.currentTime = seconde;
  videoCurrentTime.value = seconde;
};
