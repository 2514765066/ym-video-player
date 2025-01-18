<template>
  <video
    ref="videoRef"
    @click="toggle"
    @loadedmetadata="handleLoadedmetadata"
    @timeupdate="handleTimeUpdate"
    @playing="handleBufferedTime"
    @stalled="handleStalled"
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

//处理加载事件
const handleLoadedmetadata = () => {
  if (!videoRef.value) {
    return;
  }

  videoDuration.value = videoRef.value.duration;
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

  const buffered = videoRef.value.buffered;

  let bufferedTime = 0;

  for (let i = 0; i < buffered.length; i++) {
    bufferedTime = buffered.end(i);
  }

  videoBufferedTime.value = bufferedTime;
};

//处理卡顿
const handleStalled = () => {};
</script>

<style scoped lang="scss">
video {
  width: 100%;
  height: 100%;

  background-color: #000;
}
</style>
