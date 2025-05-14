<template>
  <video
    ref="videoRef"
    @click="toggle"
    @timeupdate="handleTimeUpdate"
    @progress="handleBufferedTime"
    @loadedmetadata="handleLoad"
    @ended="next"
  ></video>
</template>

<script setup lang="ts">
import { videoRef } from "@/stores/useEl";
import { toggle } from "@/stores/usePlay";
import {
  videoDuration,
  videoCurrentTime,
  videoBufferedTime,
} from "@/stores/useTime";
import { key } from "@/type";

const data = inject(key)!;

//下一集
const next = () => {
  if (!(data.value.history < data.value.url.length - 1)) {
    return;
  }

  data.value.history++;
  data.value.currentTime = 0;
};

//获取播放事件
const handleTimeUpdate = () => {
  if (!videoRef.value) {
    return;
  }

  videoCurrentTime.value = videoRef.value.currentTime;
};

//更新缓冲区的事件
const handleBufferedTime = () => {
  if (!videoRef.value) {
    return;
  }

  const buffered = videoRef.value.buffered.end(
    videoRef.value.buffered.length - 1
  );

  videoBufferedTime.value = buffered;
};

//处理加载完成
const handleLoad = () => {
  if (!videoRef.value) {
    return;
  }

  videoDuration.value = videoRef.value.duration;
  videoCurrentTime.value = data.value.currentTime;
  videoRef.value.currentTime = data.value.currentTime;
};
</script>

<style scoped lang="scss">
video {
  width: 100%;
  height: 100%;

  background-color: #000;
}
</style>
