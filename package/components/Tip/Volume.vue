<template>
  <Transition enter-active-class="backInDown" leave-active-class="backOutUp">
    <section class="ym-volume-tip" v-if="showable">
      <img src="@/assets/speaker-0.svg" width="18" v-show="volume == 0" />

      <img
        src="@/assets/speaker-1.svg"
        width="18"
        v-show="volume > 0 && volume <= 50"
      />

      <img src="@/assets/speaker-2.svg" width="18" v-show="volume > 50" />

      <section class="v-n-c p-r w-100">
        <div class="wh-100"></div>
        <aside class="h-100 p-a" :style="{ width: `${volume}%` }"></aside>
      </section>

      <p class="fs-13 f-s-0 v-c-c">{{ volume }}</p>
    </section>
  </Transition>
</template>

<script setup lang="ts">
import { volume, updateVolume } from "@/stores/useVolume";

let timer: number;

//是否显示音量
const showable = ref(false);

//键盘按下事件s
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key != "ArrowUp" && e.key != "ArrowDown") {
    return;
  }
  showable.value = true;
  clearTimeout(timer);

  if (e.key == "ArrowUp") {
    updateVolume(2);
  } else {
    updateVolume(-2);
  }

  timer = setTimeout(() => {
    showable.value = false;
  }, 2000);
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped lang="scss">
.ym-volume-tip {
  width: 200px;

  padding: 0.8rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  position: absolute;
  bottom: 15px;
  left: 50%;
  z-index: 1;

  border-radius: 0.5rem;
  transform: translateX(-50%);
  background-color: #272727;
  border: 1px solid #191919;

  > section {
    width: 100%;
    height: 4px;

    display: flex;
    align-items: center;

    position: relative;

    > div {
      width: 100%;
      height: 100%;

      appearance: none;
      border-radius: 2px;
      background-color: #9f9f9f;

      &::-webkit-slider-thumb {
        appearance: none;
      }
    }

    > aside {
      height: 100%;

      position: absolute;

      border-radius: 2px;
      background-color: var(--main-color);
      transition: 0.1s;
    }
  }

  > p {
    width: 23px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    font-size: 13px;
    color: #fff;
  }
}

@keyframes backInUp {
  0% {
    transform: translateY(100px) translateX(-50%);
  }

  80% {
    transform: translateY(0px) translateX(-50%);
  }

  100% {
    transform: translateY(0px) translateX(-50%);
  }
}

.backInDown {
  animation: backInUp 400ms;
}

.backOutUp {
  animation: backInUp 400ms reverse;
}
</style>
