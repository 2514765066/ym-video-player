<template>
  <ToolTip :content="content">
    <section @click="toggle">
      <img src="@/assets/fullscreen-off.svg" width="22" v-show="isFullscreen" />
      <img src="@/assets/fullscreen-on.svg" width="22" v-show="!isFullscreen" />
    </section>
  </ToolTip>
</template>

<script setup lang="ts">
import { isFullscreen } from "@/stores/useFullscreen";
import ToolTip from "@/components/ToolTip.vue";
import { toggle } from "@/stores/useFullscreen";

const content = computed(() => (isFullscreen ? "退出全屏" : "全屏"));
</script>

<style scoped lang="scss"></style>
