export default {
  // 基础信息_认识
  basicInformation: {
    //大标题
    title: "初识",
    //基础信息
    basicInfo: {
      cTitle: "基本信息",
      info: [
        { key: "毕业学校", value: "XX理工学校" },
        { key: "专业", value: "产品设计" },
        { key: "学历", value: "普通本科" },
        { key: "出生年月", value: "1999.01.01" },
        { key: "籍贯", value: "福建省泉州市" },
        { key: "现居地", value: "福建省泉州市" },
      ],
    },
    // 求职方向
    jobOrientation: {
      cTitle: "求职方向",
      info: [
        {
          jobName: "UI界面",
          jobDes: "设计师",
        },
        {
          jobName: "平面设计",
          jobDes: "设计师",
        },
        {
          jobName: "Java工程师",
          jobDes: "程序员",
        },
      ],
    },
    // 个人联系信息
    contactInformation: {
      cTitle: "联系我",
      info: [
        { key: "联系电话", value: "13626090XXX" },
        { key: "QQ", value: "837076176" },
        { key: "邮箱", value: "837076176@qq.com" },
      ],
    },
    // 个人标签 建议6-8个,2-8个字
    tags: [
      "沉稳型",
      "强迫症",
      "沉稳型",
      "强迫症",
      "沉稳型",
      "强迫症",
      "沉稳型",
      "强迫症",
    ],
    name: "大张伟", //个人姓名
    // 博客,笔记的地址
    links: [
      {
        linkName: "Github",
        link: "#",
      },
      {
        linkName: "掘金主页",
        link: "#",
      },
    ],
    // 说明
    explains: [
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
    ],
  },
  // 我的技能
  skills: {
    title: "我的技能", //大标题
    // 技能描述
    skillsLevel: [
      { skillsName: "Photoshop", level: 100 },
      { skillsName: "Vue", level: 80 },
      { skillsName: "React", level: 60 },
      { skillsName: "C#", level: 50 },
      { skillsName: "java", level: 40 },
    ],
    // 能力描述
    abilitys: [
      { explain: "工作经验", des: "两年半前端开发经验" },
      { explain: "熟悉", des: "前后端分离开发模式" },
      { explain: "熟悉", des: "Vue全家开发" },
      { explain: "熟悉", des: "HTML,CSS标签" },
      { explain: "了解", des: "Node.js、React.js..." },
    ],
  },
  // 校园经历
  campusExperience: {
    title: "校园经历",
    // 在校成绩
    scores: [
      { des: "专业排名", explain: "第四" },
      { des: "四级成绩", explain: "5XX" },
      { des: "六级成绩", explain: "4XX" },
      { des: "专业课成绩", explain: "优秀" },
      { des: "手工课成绩", explain: "优秀" },
    ],
    // 在校成绩
    campusAwards: {
      des: "校园奖项",
      explain: ["社会实践先进个人", "优秀学生干部", "三好学生"],
    },
    // 获得荣誉
    competitionAwards: {
      des: "比赛奖项",
      explain: ["某某比赛三等奖", "某某比赛三等奖", "某某比赛三等奖"],
    },
  },
  // 工作经历
  workExperience: {
    title: "工作经历",
    workExperience: [
      {
        cName: "某某有限公司", //公司名称
        pName: "平-面-设-计-师", //职业名称
        startTime: "", //开始时间
        endTime: "", //结束时间
        describe: [
          //描述
          { des: "服务客户共计", explain: "30余" },
          { des: "服务项目共计", explain: "300余" },
          { des: "代表项目", explain: "某某公司VI设计" },
        ],
      },
      {
        cName: "某某有限公司",
        pName: "平面设计师",
        startTime: "",
        endTime: "",
        describe: [
          { des: "服务客户共计", explain: "30余" },
          { des: "服务项目共计", explain: "300余" },
          { des: "代表项目", explain: "某某公司VI设计" },
        ],
      },
      {
        cName: "某某有限公司",
        pName: "平面设计师",
        startTime: "",
        endTime: "",
        describe: [
          { des: "服务客户共计", explain: "30余" },
          { des: "服务项目共计", explain: "300余" },
          { des: "代表项目", explain: "某某公司VI设计" },
        ],
      },
    ],
  },
  //项目经验
  projectExperience: {
    title: "项目经验",
    projects: [
      {
        imgs: [], //图片
        pName: "XXXXX项目", //项目名
        pdescribe:
          "这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明",
        pSkills: ["XXXXXX", "XXXXXX"],
      },
      {
        imgs: [], //图片
        pName: "XXXXX项目", //项目名
        pdescribe:
          "这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明这是一个细节说明",
        pSkills: ["XXXXXX", "XXXXXX"],
      },
    ],
  },
  // 联系我
  contactMe: {
    title: "联系我",
    // 定制想要收集的信息 ??
  },
};
