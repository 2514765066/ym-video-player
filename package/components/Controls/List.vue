<template>
  <ToolTip content="选集">
    <section @click="handleClick">
      <img src="@/assets/list.svg" width="24" />
    </section>
  </ToolTip>
</template>

<script setup lang="ts">
import eventEmitter from "@/hooks/eventEmitter";
import ToolTip from "@/lib/ToolTip.vue";

const handleClick = () => {
  eventEmitter.emit("list:show");
};
</script>

<style scoped lang="scss"></style>
