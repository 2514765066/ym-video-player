<template>
  <section
    class="ym-player-bottom"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <img
      src="@/assets/pause-logo.svg"
      :style="{ opacity: isPlay ? 0 : 0.85 }"
    />

    <Progress />
    <Controls />
  </section>
</template>

<script setup lang="ts">
import Progress from "@/components/Progress/index.vue";
import Controls from "@/components/Controls/index.vue";
import { isPlay } from "@/stores/usePlay";
import { isHover } from "@/stores/useBottom";
</script>

<style scoped lang="scss">
.ym-player-bottom {
  width: 100%;

  padding: 0 10px;

  display: flex;
  flex-direction: column;

  position: absolute;
  left: 0;
  bottom: 0;

  background-image: linear-gradient(#0000, #0006, #000);

  > img {
    width: 60px;

    margin: 0 1rem 1rem auto;

    filter: drop-shadow(0 1px 1px #000);
  }
}
</style>
