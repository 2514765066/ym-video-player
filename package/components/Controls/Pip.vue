<template>
  <ToolTip content="画中画">
    <section @click="handlePip">
      <img src="@/assets/pip.svg" width="22" />
    </section>
  </ToolTip>
</template>

<script setup lang="ts">
import ToolTip from "@/components/ToolTip.vue";
import { videoRef } from "@/stores/useEl";
import { exit } from "@/stores/useFullscreen";

//进入画中画
const handlePip = async () => {
  if (!videoRef.value) {
    return;
  }

  await exit();
  videoRef.value.requestPictureInPicture();
};
</script>

<style scoped lang="scss"></style>
