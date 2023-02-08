<template>
  <div
    class="w-full h-[100px] border bg-white flex justify-between items-center pr-[200px] pl-[200px]"
  >
    <!-- 右侧logo -->
    <div class="text-main">logo</div>
    <!-- 中间跳转 -->
    <div class="text-weakenColor space-x-[50px] font-bold items">
      <span class="action">初始</span>
      <span>我的技能</span>
      <span>校园经历</span>
      <span>实习经历</span>
      <span>作品集</span>
    </div>
    <!-- 右边 -->
    <button
      class="rounded-full w-[85px] h-[30px] border-2 border-black text-[14px] hover:bg-weakenColor hover:border-opacity-50 hover:text-white transition-all duration-300"
    >
      联系我
    </button>
  </div>
</template>

<script setup></script>

<style scoped>
/* 选中的特殊样式 */
.items span.action {
  color: black;
  position: relative;
}
/* 伪元素定位 */
.items span.action::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 1.5px;
  background: #000;
}
</style>
