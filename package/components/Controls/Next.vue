<template>
  <Tip title="下一集">
    <section @click="next" v-show="visible">
      <img src="@/assets/next.svg" width="22" />
    </section>
  </Tip>
</template>

<script setup lang="ts">
import Tip from "@/lib/Tip.vue";
import { key } from "@/type";

const data = inject(key)!;

const visible = computed(() => data.value.history < data.value.url.length - 1);

const next = () => {
  data.value.history++;
  data.value.currentTime = 0;
};
</script>

<style scoped lang="scss"></style>
