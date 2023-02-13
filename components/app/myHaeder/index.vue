<template>
  <div :class="{ unTop: !unTop }" class="d-point header">
    <!-- 右侧标题 -->
    <public-c-sectionTitle
      class="section"
      :direction="!unTop ? '' : 'right'"
    ></public-c-sectionTitle>
    <!-- 中间跳转 -->
    <div class="text-weakenColor space-x-[50px] font-bold items">
      <span
        v-for="(tab, index) in tabs.slice(0, -1)"
        :key="index"
        :class="{ action: action === index }"
        @click="jump(index)"
        >{{ tab }}</span
      >
    </div>
    <!-- 联系我 -->
    <button
      class="text-center rounded-full w-[85px] h-[30px] border border-weakenColor text-sm hover:bg-weakenColor hover:text-white transition-all duration-300"
      @click="jump(tabs.length - 1)"
    >
      {{ tabs[tabs.length - 1] }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tabs: string[]; // 是否必传
  }>(),
  {}
);

const action = ref(0);
// const tabs: string[] = ["初识", "我的技能", "校园经历", "实习经历", "作品集"];
const points = ref([]);
const remove = 100;
const unTop = ref(true);
// 锚点跳转方法
const jump = (index: number) => {
  let jump = document.querySelectorAll(".d-point");
  let total = jump[index].offsetTop - remove;
  let distance = document.documentElement.scrollTop || document.body.scrollTop;
  // 平滑滚动，时长500ms，每10ms一跳，共50跳
  let step = total / 50;
  if (total > distance) {
    smoothDown();
  } else {
    let newTotal = distance - total;
    step = newTotal / 50;
    smoothUp();
  }
  function smoothDown() {
    if (distance < total) {
      distance += step;
      document.body.scrollTop = distance;
      document.documentElement.scrollTop = distance;
      setTimeout(smoothDown, 10);
    } else {
      document.body.scrollTop = total;
      document.documentElement.scrollTop = total;
    }
  }
  function smoothUp() {
    if (distance > total) {
      distance -= step;
      document.body.scrollTop = distance;
      document.documentElement.scrollTop = distance;
      setTimeout(smoothUp, 10);
    } else {
      document.body.scrollTop = total;
      document.documentElement.scrollTop = total;
    }
  }
};
const onScroll = () => {
  let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
  // 判断当前是否置顶
  if (scrolled <= 0) {
    unTop.value = true;
  } else {
    unTop.value = false;
  }
  // 判断当前的索引位

  if (scrolled >= points.value[points.value.length - 2]) {
    action.value = points.value.length - 2;
    return;
  }
  action.value =
    1 +
    points.value.slice(1, -1).findIndex((p, index, arr) => {
      return scrolled >= p && scrolled < arr[index + 1];
    });
};
onMounted(() => {
  nextTick(function () {
    window.addEventListener("scroll", onScroll);
    let jump = document.querySelectorAll(".d-point");
    jump.forEach((ele) => {
      points.value.push(ele.offsetTop - remove);
    });
  });
});
</script>

<style scoped>
.items span {
  transition: all 0.3s;
  cursor: pointer;
}
/* 选中的特殊样式 */
.items span.action {
  color: black;
  position: relative;
}
/* 伪元素定位 */
.items span.action::before {
  @apply subscript-header;
}

/* 判断nav是否置顶 */
.header {
  @apply w-full h-[100px] flex justify-between items-center pr-wrapper-p pl-wrapper-p select-none duration-300;
}
.header.unTop {
  @apply h-[50px] bg-opacity-[95%];
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
}
</style>
