<template>
  <ToolTip content="下一集">
    <section @click="next" v-show="hasNext">
      <img src="@/assets/next.svg" width="22" />
    </section>
  </ToolTip>
</template>

<script setup lang="ts">
import ToolTip from "@/components/ToolTip.vue";
import { next, hasNext } from "@/stores/useList";
</script>

<style scoped lang="scss"></style>
