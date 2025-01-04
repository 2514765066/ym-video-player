<template>
  <ToolTip content="选集">
    <section @click="handleClick">
      <img src="@/assets/list.svg" width="24" />
    </section>
  </ToolTip>
</template>

<script setup lang="ts">
import ToolTip from "@/components/ToolTip.vue";
import { listVisible } from "@/stores/useList";

const handleClick = () => {
  listVisible.value = !listVisible.value;
};
</script>

<style scoped lang="scss"></style>
