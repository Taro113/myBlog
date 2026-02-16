import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({
  vpHome: false,
  author: {
    name: "郜健宇",
  },
  vitePlugins: {
    autoFrontmatter: true,
    autoFrontmatterOption: {
      permalinkType: "rules",
      permalinkRules: [
        { folderName: "01.进化志", rule: "/growth/$uuid6" },
        { folderName: "04.代码宇宙", rule: "/tech/$uuid6" },
        { folderName: "07.作品集", rule: "/portfolio/$uuid6" },
        { folderName: "10.灵感抽屉", rule: "/inspiration/$uuid6" },
        { folderName: "13.热爱清单", rule: "/hobbies/$uuid6" },
        { folderName: "16.精神食粮", rule: "/library/$uuid6/" },
        { folderName: "19.心语角落", rule: "/heart/$uuid6" },
      ],
    },
  },
  backTop: {
    enabled: true, // 是否启动回到顶部功能
    content: "icon", // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: (TkMessage) => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
  },
  toComment: {
    enabled: true, // 是否启动滚动到评论区功能
    done: (TkMessage) => TkMessage.success("已抵达评论区"), // 滚动到评论区后的回调
  },
  sidebarTrigger: true,
  bodyBgImg: {
    imgSrc: ["/bg/cover1.jpg", "/bg/cover2.jpg", "/bg/cover3.jpg"], // body 背景图片链接。单张图片 string | 多张图片 string[], 多张图片时每隔 imgInterval 秒换一张
    imgOpacity: 0.6, // body 背景图透明度，选值 0.1 ~ 1.0
    imgInterval: 15000, //  body 当多张背景图时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // body 背景图是否随机切换，为 false 时按顺序切换
    mask: false, // body 背景图遮罩
    maskBg: "rgba(0, 0, 0, 0.2)", // body 背景图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。mask 为 true 时生效
  },
  wallpaper: {
    enabled: true,
    hideBanner: false,
  },
  footerInfo: {
    customHtml: '<span id="runtime"></span>',
    topMessage: [
      '<span><img alt="VitePress" src="https://liuyuyang.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanimals.65eaf6e3.webp&w=750&q=75"><span/>',
    ],
  },
  // docAnalysis: {
  //   createTime: "2025-03-23",
  //   statistics: {
  //     provider: "busuanzi",
  //   },
  // },
  friendLink: {
    // 友情链接
    list: [
      {
        name: "vuepress-theme-vdoing",
        desc: "🚀一款简洁高效的VuePress 知识管理&博客 主题",
        avatar: "https://doc.xugaoyi.com/img/logo.png",
        link: "https://doc.xugaoyi.com/",
      },
      {
        name: "二丫讲梵",
        desc: "💻学习📝记录🔗分享",
        avatar: "https://wiki.eryajf.net/img/logo.png",
        link: " https://wiki.eryajf.net/",
      },
    ],
    autoScroll: true,
  },
  // social: [
  //   {
  //     icon: "icon-github",
  //     name: "GitHub",
  //     link: "https://github.com/Taro113/myBlog",
  //   },
  // ],
  pageStyle: "segment-nav",
  banner: {
    enabled: true,
    name: "🎉 Self Blog",
    bgStyle: "fullImg",
    imgWaves: true,
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "types",
  },
  themeEnhance: {
    layoutSwitch: {
      defaultMode: "original",
    },
  },
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/myBlog/",
  extends: teekConfig,
  title: "郜健宇的个人博客",
  description: "郜健宇的个人博客-描述",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "🚀 进化志",
        items: [
          { text: "Test", link: "/pages/b1ad26" },
          { text: "Runtime API Examples", link: "/api" },
        ],
      },
      {
        text: "⚙️ 代码宇宙",
        items: [
          { text: "唯有爱与生活不可辜负", link: "/tech/7121d4" },
          {
            text: "🗄️ 数据库",
            items: [
              {
                text: "DB数据类型一致性风险治理方案",
                link: "/tech/c05570",
              },
            ],
          },
          {
            text: "⚡ 效率工具箱",
            items: [
              { text: "Markdown Examples", link: "/markdown" },
              { text: "Runtime API Examples", link: "/api" },
            ],
          },
        ],
      },
      {
        text: "📦 作品集",
        items: [
          { text: "Markdown Examples", link: "/markdown" },
          { text: "Runtime API Examples", link: "/api" },
        ],
      },
      {
        text: "💡 灵感抽屉",
        items: [
          { text: "Markdown Examples", link: "/markdown" },
          { text: "Runtime API Examples", link: "/api" },
        ],
      },
      {
        text: "🎨 热爱清单",
        items: [
          { text: "Markdown Examples", link: "/markdown" },
          { text: "Runtime API Examples", link: "/api" },
        ],
      },
      {
        text: "📚 精神食粮",
        items: [
          { text: "Markdown Examples", link: "/markdown" },
          { text: "Runtime API Examples", link: "/api" },
        ],
      },
      {
        text: "🌿 心语角落",
        items: [
          { text: "Markdown Examples", link: "/markdown" },
          { text: "Runtime API Examples", link: "/api" },
        ],
      },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [{ text: "Markdown Examples", link: "/markdown" }],
    //   },
    //   {
    //     text: "Examples2",
    //     items: [{ text: "Runtime API Examples", link: "/api" }],
    //   },
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
