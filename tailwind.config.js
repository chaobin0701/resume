/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ["Calibri"],
      serif: ["Calibri"],
      mono: ["Calibri"],
      display: ["Calibri"],
      body: ["Calibri"],
    },
    extend: {
      backgroundImage: {
        bg1: "url(https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjE2ODQ0fQ&s=8f523bec89c937de8e6afef508bcfe66&auto=format&fit=crop&w=1950&q=80)",
      },
      colors: {
        // 主题字颜色
        main: "#000",
        // 弱化颜色
        weakenColor: "rgb(152,152,152)",
        // 蓝色
        pBlue: "rgb(223,236,243)",
        // 黄色
        pYellow: "rgb(250,249,238)",
        // 棕色
        pBrown: "rgb(243,233,223)",
        // 深棕色
        pDarkBrown: "rgb(51,51,51)",
        // 灰色
        pGrey: "rgb(245,245,245)",
      },
      spacing: {
        "wrapper-p": "15%", //外层的padding大小
      },
      animation: {
        arrow: 'arrow .8s infinite',
       },
      keyframes: {
        // 箭头运动动画
        arrow: {
          "0%,100%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(15%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      }
    },
  },
  plugins: [],
};
