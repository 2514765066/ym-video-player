import { videoRef } from "./useEl";

//倍速
export const playrate = ref(Number(localStorage.getItem("playrate")) || 1);

//调整倍速
export const updatePlayrate = (rate: string) => {
  playrate.value = Number(rate);
};

//监视倍速
watchEffect(() => {
  if (!videoRef.value) {
    return;
  }

  videoRef.value.playbackRate = playrate.value;
  localStorage.setItem("playrate", String(playrate.value));
});
