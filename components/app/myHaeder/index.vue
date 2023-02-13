<template>
  <div
    class="w-full h-[100px] flex justify-between items-center pr-wrapper-p pl-wrapper-p select-none"
  >
    <!-- 右侧标题 -->
    <public-c-sectionTitle></public-c-sectionTitle>
    <!-- 中间跳转 -->
    <div class="text-weakenColor space-x-[50px] font-bold items">
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ action: action === index }"
        @click="jump(index)"
        >{{ tab }}</span
      >
    </div>
    <!-- 右边 -->
    <button
      class=" text-center rounded-full w-[85px] h-[30px] border border-weakenColor text-sm hover:bg-weakenColor hover:text-white transition-all duration-300"
      @click="jump(5)"
    >
      联系我
    </button>
  </div>
</template>

<script setup lang="ts">
const action = ref(0);
const tabs: string[] = ["初识", "我的技能", "校园经历", "实习经历", "作品集"];
const jump = (index: number) => {
  if (index < 5) {
    action.value = index;
  }
  document
    .querySelector(`#point-${index + 1}`)
    ?.scrollIntoView({ behavior: "smooth" });
};
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
</style>
