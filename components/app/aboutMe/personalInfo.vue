<template>
  <div
    class="userInfo-1 w-[500px] h-[300px] bg-white border border-weakenColor rounded-md relative box-border p-[20px] flex flex-col justify-around"
  >
    <public-c-mtitle text="大张伟"></public-c-mtitle>
    <div class="mt-[16px] relative space-x-[10%] flex">
      <div
        class="item relative item-1"
        v-for="(item, index) in personalDes"
        :key="index"
      >
        <p class="leading-7">{{ item.text }}</p>
        <p class="text-weakenColor text-xs">{{ item.des }}</p>
      </div>
    </div>
    <div class="mt-[50px] flex space-x-[20px]">
      <app-aboutMe-linkBtn
        v-for="(item, index) in links"
        :key="index"
        :link="item.link"
        >{{ item.linkName }}</app-aboutMe-linkBtn
      >
    </div>
    <!-- 小圆点 -->
    <span
      class="absolute w-[10px] h-[10px] rounded-full border border-black bottom-[10px] right-[10px]"
    ></span>
  </div>
</template>

<script setup lang="ts">
const personalDes = ref([
  {
    text: "UI界面",
    des: "设计师",
  },
  {
    text: "2年",
    des: "平面设计经验",
  },
  {
    text: "2年",
    des: "实习经验",
  },
  {
    text: "美术",
    des: "专业出身",
  },
]);
const links = [
  {
    linkName: "Github",
    link: "#",
  },
  {
    linkName: "掘金主页",
    link: "#",
  },
];
</script>

<style scoped>
/* 个人标签伪元素 */
.item::before {
  @apply subscript-pInfo;
}
/* 框 */
.userInfo-1 {
  transform-style: preserve-3d;
}
.userInfo-1::before {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  top: -3px;
  right: -3px;
  border-radius: 2px;
  transform: translateZ(-1px);
}

/* 动画 */
.item-1 {
  animation: identifier1 1.5s;
  
}
@keyframes identifier1 {
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
