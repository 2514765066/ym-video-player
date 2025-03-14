<template>
  <ElTooltip
    effect="light"
    placement="top"
    :hide-after="100"
    :append-to="playerRef"
    v-bind="$attrs"
  >
    <slot></slot>

    <template #content>
      <slot name="content"></slot>
    </template>
  </ElTooltip>
</template>

<script setup lang="ts">
import { ElTooltip } from "element-plus";
import { playerRef } from "@/stores/useEl";
</script>

<style scoped lang="scss"></style>
