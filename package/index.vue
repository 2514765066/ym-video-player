<template>
  <section
    class="ym-player"
    ref="playerRef"
    @mousemove="handleMouseMove"
    :class="{ 'ym-player-hidden-cursor': !bottomVisible }"
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
import Hls from "hls.js";
import { formatUnit } from "@/utils/formatUnit";
import { play } from "@/stores/usePlay";
import { videoRef, playerRef } from "@/stores/useEl";
import { handleMouseMove, bottomVisible } from "@/stores/useBottom";
import { list, selectedIndex, selectedSrc } from "@/stores/useList";
import { useEvent } from "@/hooks/useEvent";

useEvent();

const props = withDefaults(
  defineProps<{
    list: string[];
    width?: number | string;
    height?: number | string;
  }>(),
  {
    width: 1000,
    height: 800,
  }
);

//当前播放索引
const history = defineModel({
  default: 0,
});

list.value = props.list;
selectedIndex.value = history.value;

//hls实例
const hls = new Hls();

//加载完成播放
hls.on(Hls.Events.MANIFEST_PARSED, () => {
  hls.currentLevel = hls.levels.length - 1;
  play();
});

//监视currentSrc
watchEffect(() => {
  history.value = selectedIndex.value;
  hls.loadSource(selectedSrc.value);
});

//挂载
onMounted(() => {
  hls.attachMedia(videoRef.value!);
});

//卸载
onUnmounted(() => {
  hls.destroy();
});

defineExpose({
  videoRef,
});
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
