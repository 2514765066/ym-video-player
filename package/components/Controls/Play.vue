<template>
  <ToolTip :content="content">
    <section @click="toggle">
      <img src="@/assets/pause.svg" width="22" v-show="isPlay" />
      <img src="@/assets/play.svg" width="22" v-show="!isPlay" />
    </section>
  </ToolTip>
</template>

<script setup lang="ts">
import ToolTip from "@/lib/ToolTip.vue";
import { isPlay, toggle } from "@/stores/usePlay";

const content = computed(() => (isPlay.value ? "暂停" : "播放"));
</script>

<style scoped lang="scss"></style>
