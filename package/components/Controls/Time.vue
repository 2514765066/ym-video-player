<template>
  <span>{{ currentTime }} / {{ duration }}</span>
</template>

<script setup lang="ts">
import { formatTime } from "@/utils/formatTime";
import { videoCurrentTime, videoDuration } from "@/stores/useTime";

//格式化后的视频播放时长
const currentTime = computed(() => formatTime(videoCurrentTime.value));

//格式化后的视频时长
const duration = computed(() => formatTime(videoDuration.value));
</script>

<style scoped lang="scss">
span {
  margin-left: 10px;
  margin-right: auto;

  font-size: 12px;
  font-weight: bold;
  color: #a9a9a9;

  &:hover {
    color: #ccc;
  }
}
</style>
