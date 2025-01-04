//列表是否可见
export const listVisible = ref(false);

//播放列表
export const list = ref<string[]>([]);

//当前播放集数索引
export const selectedIndex = ref(0);

//当前播放地址
export const selectedSrc = computed(() => list.value[selectedIndex.value]);

//判断是否可以进入下一集
export const hasNext = computed(
  () => selectedIndex.value < list.value.length - 1
);

//下一集
export const next = () => {
  if (!hasNext.value) {
    return;
  }

  selectedIndex.value++;
};

//关闭列表
export const close = () => {
  listVisible.value = false;
};
