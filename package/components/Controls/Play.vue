<template>
  <Tip :title="content">
    <section @click="toggle">
      <img src="@/assets/pause.svg" width="22" v-show="isPlay" />
      <img src="@/assets/play.svg" width="22" v-show="!isPlay" />
    </section>
  </Tip>
</template>

<script setup lang="ts">
import Tip from "@/lib/Tip.vue";
import { isPlay, toggle } from "@/stores/usePlay";

const content = computed(() => (isPlay.value ? "暂停" : "播放"));
</script>

<style scoped lang="scss"></style>
