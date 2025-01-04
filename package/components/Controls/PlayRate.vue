<template>
  <ElTooltip placement="top" effect="light" :append-to="playerRef">
    <section>
      <span>倍速</span>
    </section>

    <template #content>
      <ul>
        <li
          v-for="item of playrateList"
          :key="item"
          :class="{ active: Number(item) == playrate }"
          @click="playrate = Number(item)"
        >
          {{ item }}x
        </li>
      </ul>
    </template>
  </ElTooltip>
</template>

<script setup lang="ts">
import { ElTooltip } from "element-plus";
import { playrate } from "@/stores/usePlayrate";
import { playerRef } from "@/stores/useEl";

//倍速
const playrateList = ["2.0", "1.5", "1.25", "1.0", "0.75", "0.5"];
</script>

<style scoped lang="scss">
span {
  margin-right: 10px;

  font-size: 14px;
  font-weight: bold;
  color: #a9a9a9;
  white-space: nowrap;

  &:hover {
    color: #ccc;
  }
}

ul {
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  font-size: 14px;

  list-style: none;

  > li {
    cursor: pointer;

    &:hover {
      color: var(--main-color);
    }
  }

  .active {
    color: var(--main-color);
  }
}
</style>
