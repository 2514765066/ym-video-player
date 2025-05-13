<template>
  <section
    class="ym-player"
    ref="playerRef"
    @mousemove="handleMouseMove"
    :class="{ 'ym-player-hidden-cursor': !controlVisible }"
  >
    <Video />

    <Bottom />

    <List />

    <Volume />
  </section>
</template>

<script setup lang="ts">
import Volume from "@/components/Tip/Volume.vue";
import Video from "./components/Video/index.vue";
import Bottom from "./components/Bottom/index.vue";
import List from "./components/List/index.vue";
import { formatUnit } from "@/utils/formatUnit";
import { playerRef } from "@/stores/useEl";
import { handleMouseMove, controlVisible } from "@/stores/useBottom";
import { useInit } from "@/hooks/useInit";
import { videoCurrentTime } from "@/stores/useTime";
import type { Data } from "./type";
import { key } from "./type";

const data = defineModel<Data>({
  default: {
    history: 0,
    currentTime: 0,
    url: [],
  },
});

useInit(data);

withDefaults(
  defineProps<{
    width?: number | string;
    height?: number | string;
  }>(),
  {
    width: 1000,
    height: 800,
  }
);

//保存播放时间
watch(data, (_, oldValue) => {
  oldValue.currentTime = videoCurrentTime.value;
});

//保存播放时间
const save = () => {
  data.value.currentTime = videoCurrentTime.value;
};

//关闭页面保存
onMounted(() => {
  window.addEventListener("beforeunload", save);
});

//保存播放时间
onUnmounted(() => {
  window.removeEventListener("beforeunload", save);
  save();
});

provide(key, data);
</script>

<style lang="scss">
.ym-player-hidden-cursor {
  cursor: none !important;
}

.ym-player {
  --main-color: red;

  width: v-bind("formatUnit(width)");
  height: v-bind("formatUnit(height)");

  display: flex;

  position: relative;
  overflow: hidden;

  .mr {
    margin-right: auto;
  }

  .fs-14 {
    font-size: 14px;
  }

  .fs-12 {
    font-size: 12px;
  }

  .ml-2 {
    margin-left: 10px;
  }

  .mr-2 {
    margin-right: 10px;
  }

  * {
    margin: unset;
    box-sizing: border-box;
    user-select: none;
  }
}
</style>
