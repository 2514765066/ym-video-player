<template>
  <Transition
    enter-active-class="ym-mask-enter"
    leave-active-class="ym-mask-leave"
  >
    <section class="ym-player-list" v-show="listVisible" @click.self="close">
      <Transition
        enter-active-class="ym-content-enter"
        leave-active-class="ym-content-leave"
      >
        <main v-show="listVisible">
          <header>
            <p>选集</p>

            <img src="@/assets/close.svg" width="14px" @click="close" />
          </header>

          <ElScrollbar view-class="ym-player-list-content">
            <li
              v-for="(_, index) of list"
              :key="index"
              :class="{ active: index == selectedIndex }"
              @click="handleClick(index)"
            >
              {{ index + 1 }}
            </li>
          </ElScrollbar>
        </main>
      </Transition>
    </section>
  </Transition>
</template>

<script setup lang="ts">
import { ElScrollbar } from "element-plus";
import { list, selectedIndex, listVisible, close } from "@/stores/useList";

//处理点击集数
const handleClick = (index: number) => {
  selectedIndex.value = index;
};
</script>

<style lang="scss">
.ym-player-list {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: end;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(#000, 0.5);

  > main {
    width: 260px;
    height: 100%;

    padding: 1rem;

    display: flex;
    flex-direction: column;

    background-color: #141414;
    box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, 0.72), 0px 12px 32px #000000,
      0px 8px 16px -8px #000000;

    > header {
      margin-bottom: 1rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      > p {
        color: #ccc;
      }

      > img {
        cursor: pointer;
      }
    }
  }
}

.ym-player-list-content {
  padding: unset;

  display: flex;
  gap: 5px;
  flex-wrap: wrap;

  list-style: none;

  > li {
    $size: 50px;
    width: $size;
    height: $size;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    color: #ccc;
    background-color: #111;
    border: 1px solid #363b3f;
    transition: 0.1s;

    &:hover {
      background-color: #222;
    }
  }

  .active {
    border-color: var(--main-color);
    color: var(--main-color);
  }
}

.ym-mask-enter {
  animation: opacity 100ms;
}

.ym-mask-leave {
  animation: opacity 100ms reverse;
}

.ym-content-enter {
  animation: slide 100ms;
}

.ym-content-leave {
  animation: slide 100ms reverse;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slide {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
