<template>
  <ElTooltip
    :content="title"
    placement="top"
    :hide-after="0"
    :append-to="playerRef"
    :show-arrow="false"
    :offset="0"
    v-bind="$attrs"
    popper-class="ym-tooltip-tip"
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

defineProps<{
  title?: string;
}>();
</script>

<style lang="scss">
.ym-tooltip-tip {
  --el-bg-color-overlay: #2f2f2f !important;
  --el-border-color-light: transparent !important;
  color: #fff !important;
  padding: 2px 8px !important;

  box-shadow: 0 0 4px 2px rgba(#000, 0.1);
}
</style>
