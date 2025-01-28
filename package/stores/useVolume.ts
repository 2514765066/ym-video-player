import { videoRef } from "./useEl";

//声音
export const volume = ref(100);

//改变声音
export const updateVolume = (num: number) => {
  if (num > 0 && volume.value == 100) {
    return;
  }

  if (num < 0 && volume.value == 0) {
    return;
  }

  volume.value += num;
};

//监视声音
watchEffect(() => {
  if (!videoRef.value) {
    return;
  }

  videoRef.value.volume = volume.value / 100;
});
