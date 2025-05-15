<template>
  <ProgressTip
    :content="content"
    :offset="offset"
    v-model="progressTipVisible"
  />

  <section
    class="ym-player-progress"
    @mousemove="handleMouseMove"
    @mouseenter="progressTipVisible = true"
    @mouseleave="progressTipVisible = false"
    @click="go(seconde)"
  >
    <!-- 整个轨道 -->
    <div ref="progressRef" :style="{ opacity: controlVisible ? 1 : 0 }"></div>

    <!-- 缓冲进度 -->
    <div></div>

    <!-- 播放进度 -->
    <div></div>

    <!-- 滑块 -->
    <aside></aside>
  </section>
</template>

<script setup lang="ts">
import ProgressTip from "@/lib/ProgressTip.vue";
import { controlVisible } from "@/stores/useBottom";
import { formatTime } from "@/utils/formatTime";
import {
  videoDuration,
  videoBufferedTime,
  go,
  videoCurrentTime,
} from "@/stores/useTime";

//进度条元素实例
const progressRef = ref<HTMLDivElement>();

//进度条提示显示
const progressTipVisible = ref(false);

//当前鼠标悬浮的秒数
const seconde = ref(0);

//显示内容
const content = computed(() => {
  return formatTime(seconde.value);
});

//偏移量
const offset = ref([0, 0]);

//播放进度
const progressWidth = computed(
  () => (videoCurrentTime.value / videoDuration.value) * 100 + "%"
);

//缓冲进度
const bufferedWidth = computed(
  () => (videoBufferedTime.value / videoDuration.value) * 100 + "%"
);

//处理鼠标移动
const handleMouseMove = (e: MouseEvent) => {
  if (!progressRef.value) {
    return;
  }

  const rect = progressRef.value.getBoundingClientRect();
  offset.value = [e.clientX, rect.top];

  seconde.value =
    ((e.clientX - rect.left) / progressRef.value.clientWidth) *
    videoDuration.value;
};
</script>

<style scoped lang="scss">
.ym-player-progress {
  height: 6px;

  display: flex;
  align-items: center;

  position: relative;

  cursor: pointer;

  > div {
    height: 3px;
    border-radius: 3px;
    position: absolute;
  }

  > div:first-child {
    width: 100%;
    background-color: rgba(#fff, 0.2);
  }

  > div:nth-child(2) {
    width: v-bind("bufferedWidth");
    background-color: #5c5c5c;
  }

  > div:nth-child(3) {
    width: v-bind("progressWidth");
    background-color: var(--main-color);
  }

  > aside {
    $size: 10px;
    width: $size;
    height: $size;

    position: absolute;
    left: calc(v-bind("progressWidth") - $size / 2);

    opacity: 0;
    border-radius: calc($size / 2);
    background-color: var(--main-color);
    transition: 0.1s;
  }

  &:hover {
    > aside {
      opacity: 1;
    }
  }
}
</style>
