<template>
  <ToolTip content="下一集">
    <section @click="next" v-show="visible">
      <img src="@/assets/next.svg" width="22" />
    </section>
  </ToolTip>
</template>

<script setup lang="ts">
import ToolTip from "@/lib/ToolTip.vue";
import { key } from "@/type";

const data = inject(key)!;

const visible = computed(() => data.value.history < data.value.url.length - 1);

const next = () => {
  data.value.history++;
};
</script>

<style scoped lang="scss"></style>
