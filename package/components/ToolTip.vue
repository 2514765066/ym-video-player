<template>
  <ElTooltip
    effect="light"
    placement="top"
    :hide-after="0"
    :append-to="playerRef"
    v-bind="$attrs"
  >
    <slot></slot>
  </ElTooltip>
</template>

<script setup lang="ts">
import { ElTooltip } from "element-plus";
import { playerRef } from "@/stores/useEl";
</script>

<style scoped lang="scss"></style>
