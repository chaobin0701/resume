<template>
  <div class="w-full h-[350px] pr-wrapper-p pl-wrapper-p flex justify-between">
    <!-- 在校成绩 -->
    <div
      class="w-[45%] bg-pBlue rounded-[10px] p-[30px] grid grid-rows-4 grid-cols-3"
    >
      <div class="col-span-3">
        <p class="relative text-[18px] font-bold title">在校成绩</p>
      </div>
      <div class="mr-[30px]" v-for="(score, index) in scores" :key="index">
        <span class="text-weakenColor text-[12px]">{{ score.des }}</span>
        <p class="font-bold">{{ score.explain }}</p>

      </div>
    </div>
    <!-- 获得荣誉 -->
    <div
      class="w-[45%] bg-pYellow rounded-[10px] p-[30px] grid grid-rows-4 grid-cols-2"
    >
      <div class="col-span-2">
        <p class="relative text-[18px] font-bold title">获得荣誉</p>
      </div>
      <div class="mr-[30px] row-span-3">
        <span class="text-weakenColor text-[12px]">{{campusAwards.des}}</span>
        <ul class="space-y-[30px] mt-[10px]">
          <li class="font-bold" v-for="(item,index) in campusAwards.explain" :key="index">{{ item}}</li>
        </ul>
      </div>
      <div class="mr-[30px] row-span-3">
        <span class="text-weakenColor text-[12px]">{{competitionAwards.des}}</span>
        <ul class="space-y-[30px] mt-[10px]">
          <li class="font-bold" v-for="(item,index) in competitionAwards.explain" :key="index">{{ item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 成绩
const scores = [
  { des: "专业排名", explain: "第四" },
  { des: "四级成绩", explain: "5XX" },
  { des: "六级成绩", explain: "4XX" },
  { des: "专业课成绩", explain: "优秀" },
  { des: "手工课成绩", explain: "优秀" },
];
const campusAwards = {
  des: "校园奖项",
  explain: ["社会实践先进个人", "优秀学生干部", "三好学生"],
};

const competitionAwards = {
  des: "比赛奖项",
  explain: ["某某比赛三等奖", "某某比赛三等奖", "某某比赛三等奖"],
};
</script>

<style scoped>
.title::before {
  @apply subscript-skills;
}
</style>
