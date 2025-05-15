<template>
  <Tip>
    <section @click="handleToggle">
      <img src="@/assets/speaker-0.svg" width="22" v-if="volume == 0" />
      <img src="@/assets/speaker-2.svg" width="22" v-else-if="volume > 50" />
      <img src="@/assets/speaker-1.svg" width="22" v-else-if="volume > 0" />
    </section>

    <template #content>
      <section class="content">
        <span>{{ volume }}</span>

        <Slider v-model="volume" :width="150" />
      </section>
    </template>
  </Tip>
</template>

<script setup lang="ts">
import Slider from "../Slider.vue";
import Tip from "@/lib/Tip.vue";
import { volume } from "@/stores/useVolume";

let preVolume = 0;

const handleToggle = () => {
  if (preVolume == 0) {
    preVolume = volume.value;
    volume.value = 0;
    return;
  }

  volume.value = preVolume;
  preVolume = 0;
};
</script>

<style scoped lang="scss">
.content {
  width: 180px;

  padding: 4px 0;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;

  > span {
    text-align: end;
  }
}
</style>
