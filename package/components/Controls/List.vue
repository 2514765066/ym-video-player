<template>
  <Tip title="选集">
    <section @click="handleClick">
      <img src="@/assets/list.svg" width="24" />
    </section>
  </Tip>
</template>

<script setup lang="ts">
import eventEmitter from "@/hooks/eventEmitter";
import Tip from "@/lib/Tip.vue";

const handleClick = () => {
  eventEmitter.emit("list:show");
};
</script>

<style scoped lang="scss"></style>
