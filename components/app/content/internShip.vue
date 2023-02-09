<template>
  <div
    class="w-full pr-wrapper-p pl-wrapper-p flex items-center justify-center flex-col mb-[200px] space-y-[60px]"
  >
    <!-- 工作经验1 -->
    <div class="flex w-full h-[250px] rounded-[5px] overflow-hidden">
      <!-- 左边 -->
      <div
        class="grid grid-cols-5 grid-rows-3 bg-pBlue w-[40%] h-full p-[30px]"
      >
        <div class="col-span-4 text-[15px] tracking-[3px]">
          <p>世纪某某公司</p>
        </div>
        <span class="vertical-rl text-weakenColor tracking-[2px]">FIRST.</span>
        <div
          class="col-span-5 self-center font-bold text-[35px] tracking-[5px]"
        >
          平-面-设-计-师
        </div>
        <!-- 日期开始 -->
        <div class="self-end flex h-[26px]">
          <div>
            <p class="text-right text-[14px] font-bold leading-[16px]">03</p>
            <p class="text-right text-[12px] text-weakenColor leading-[12px]">
              2015
            </p>
          </div>
          <div class="w-[1px] h-full bg-black mr-[2px] ml-[2px]"></div>
          <span class="text-[12px] rotate-90 translate-x-[-12px]">MAR</span>
        </div>
        <!-- 日期结束 -->
        <div class="self-end flex h-[26px]">
          <div>
            <p class="text-right text-[14px] font-bold leading-[16px]">03</p>
            <p class="text-right text-[12px] text-weakenColor leading-[12px]">
              2015
            </p>
          </div>
          <div class="w-[1px] h-full bg-black mr-[2px] ml-[2px]"></div>
          <span class="text-[12px] rotate-90 translate-x-[-12px]">JAN</span>
        </div>
        <div
          class="self-end justify-self-end col-span-3 w-[12px] h-[12px] border-2 border-weakenColor rounded-full"
        ></div>
      </div>
      <!-- 右边 -->
      <div
        class="flex justify-between bg-pGrey w-[60%] h-full p-[30px] relative"
      >
        <div class="flex flex-col justify-between">
          <div class="mr-[30px]" v-for="item in 3" :key="item">
            <span class="text-weakenColor text-[12px]">工作经验</span>
            <p class="font-bold">两年前端工程师经验</p>
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <span class="vertical-rl text-weakenColor tracking-[2px]">One.</span>
          <div
            class="self-end justify-self-end col-span-3 w-[12px] h-[12px] border-2 border-weakenColor rounded-full"
          ></div>
        </div>
      </div>
    </div>
    <!-- 工作经验2 -->
    <div class="flex w-full h-[250px] rounded-[5px] overflow-hidden">
      <!-- 左边 -->
      <div
        class="grid grid-cols-5 grid-rows-3 bg-pBlue w-[40%] h-full p-[30px]"
      >
        <div class="col-span-4 text-[15px] tracking-[3px]">
          <p>世纪某某公司</p>
        </div>
        <span class="vertical-rl text-weakenColor tracking-[2px]">FIRST.</span>
        <div
          class="col-span-5 self-center font-bold text-[35px] tracking-[5px]"
        >
          平-面-设-计-师
        </div>
        <!-- 日期开始 -->
        <div class="self-end flex h-[26px]">
          <div>
            <p class="text-right text-[14px] font-bold leading-[16px]">03</p>
            <p class="text-right text-[12px] text-weakenColor leading-[12px]">
              2015
            </p>
          </div>
          <div class="w-[1px] h-full bg-black mr-[2px] ml-[2px]"></div>
          <span class="text-[12px] rotate-90 translate-x-[-12px]">MAR</span>
        </div>
        <!-- 日期结束 -->
        <div class="self-end flex h-[26px]">
          <div>
            <p class="text-right text-[14px] font-bold leading-[16px]">03</p>
            <p class="text-right text-[12px] text-weakenColor leading-[12px]">
              2015
            </p>
          </div>
          <div class="w-[1px] h-full bg-black mr-[2px] ml-[2px]"></div>
          <span class="text-[12px] rotate-90 translate-x-[-12px]">JAN</span>
        </div>
        <div
          class="self-end justify-self-end col-span-3 w-[12px] h-[12px] border-2 border-weakenColor rounded-full"
        ></div>
      </div>
      <!-- 右边 -->
      <div
        class="flex justify-between bg-pGrey w-[60%] h-full p-[30px] relative"
      >
        <div class="flex flex-col justify-between">
          <div class="mr-[30px]" v-for="item in 3" :key="item">
            <span class="text-weakenColor text-[12px]">工作经验</span>
            <p class="font-bold">两年前端工程师经验</p>
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <span class="vertical-rl text-weakenColor tracking-[2px]">One.</span>
          <div
            class="self-end justify-self-end col-span-3 w-[12px] h-[12px] border-2 border-weakenColor rounded-full"
          ></div>
        </div>
      </div>
    </div>
    <!-- 工作经验3 -->
    <div class="flex w-full h-[250px] rounded-[5px] overflow-hidden">
      <!-- 左边 -->
      <div
        class="grid grid-cols-5 grid-rows-3 bg-pBlue w-[40%] h-full p-[30px]"
      >
        <div class="col-span-4 text-[15px] tracking-[3px]">
          <p>世纪某某公司</p>
        </div>
        <span class="vertical-rl text-weakenColor tracking-[2px]">FIRST.</span>
        <div
          class="col-span-5 self-center font-bold text-[35px] tracking-[5px]"
        >
          平-面-设-计-师
        </div>
        <!-- 日期开始 -->
        <div class="self-end flex h-[26px]">
          <div>
            <p class="text-right text-[14px] font-bold leading-[16px]">03</p>
            <p class="text-right text-[12px] text-weakenColor leading-[12px]">
              2015
            </p>
          </div>
          <div class="w-[1px] h-full bg-black mr-[2px] ml-[2px]"></div>
          <span class="text-[12px] rotate-90 translate-x-[-12px]">MAR</span>
        </div>
        <!-- 日期结束 -->
        <div class="self-end flex h-[26px]">
          <div>
            <p class="text-right text-[14px] font-bold leading-[16px]">03</p>
            <p class="text-right text-[12px] text-weakenColor leading-[12px]">
              2015
            </p>
          </div>
          <div class="w-[1px] h-full bg-black mr-[2px] ml-[2px]"></div>
          <span class="text-[12px] rotate-90 translate-x-[-12px]">JAN</span>
        </div>
        <div
          class="self-end justify-self-end col-span-3 w-[12px] h-[12px] border-2 border-weakenColor rounded-full"
        ></div>
      </div>
      <!-- 右边 -->
      <div
        class="flex justify-between bg-pGrey w-[60%] h-full p-[30px] relative"
      >
        <div class="flex flex-col justify-between">
          <div class="mr-[30px]" v-for="item in 3" :key="item">
            <span class="text-weakenColor text-[12px]">工作经验</span>
            <p class="font-bold">两年前端工程师经验</p>
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <span class="vertical-rl text-weakenColor tracking-[2px]">One.</span>
          <div
            class="self-end justify-self-end col-span-3 w-[12px] h-[12px] border-2 border-weakenColor rounded-full"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
