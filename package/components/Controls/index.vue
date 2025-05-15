<template>
  <section class="ym-player-controls" v-show="controlVisible">
    <Play />

    <Next />

    <List />

    <Time />

    <PlayRate />

    <Volume />

    <Pip />

    <Fullscreen />
  </section>
</template>

<script setup lang="ts">
import Volume from "./Volume.vue";
import Play from "./Play.vue";
import Next from "./Next.vue";
import List from "./List.vue";
import Time from "./Time.vue";
import PlayRate from "./PlayRate.vue";
import Pip from "./Pip.vue";
import Fullscreen from "./Fullscreen.vue";
import { controlVisible } from "@/stores/useBottom";
</script>

<style scoped lang="scss">
.ym-player-controls {
  height: 44px;

  display: flex;
  align-items: center;

  &:deep(> section) {
    $size: 36px;
    width: 36px;
    height: 36px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
}
</style>
