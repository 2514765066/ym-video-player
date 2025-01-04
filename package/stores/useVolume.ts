import { videoRef } from "./useEl";

//声音
const _volume = ref(100);

//只读
export const volume = readonly(_volume);

//改变声音
export const updateVolume = (num: number) => {
  if (num > 0 && volume.value == 100) {
    return;
  }

  if (num < 0 && volume.value == 0) {
    return;
  }

  _volume.value += num;
};

//监视声音
watchEffect(() => {
  if (!videoRef.value) {
    return;
  }

  videoRef.value.volume = volume.value / 100;
});
