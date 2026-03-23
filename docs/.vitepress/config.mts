import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({
  vpHome: false,
  wallpaper: {
    enabled: true,
    hideBanner: true,
  },
  post: {
    postStyle: "card",
  },
  homeCardListPosition: "left",
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
    imgSrc: "/bg/cover3.jpg", // body 背景图片链接。单张图片 string | 多张图片 string[], 多张图片时每隔 imgInterval 秒换一张
    imgOpacity: 0.6, // body 背景图透明度，选值 0.1 ~ 1.0
    // imgInterval: 15000, //  body 当多张背景图时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // body 背景图是否随机切换，为 false 时按顺序切换
    mask: false, // body 背景图遮罩
    maskBg: "rgba(0, 0, 0, 0.2)", // body 背景图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。mask 为 true 时生效
  },
  footerInfo: {
    customHtml: '<span id="runtime"></span>',
    topMessage: [
      '<span><img alt="VitePress" src="https://liuyuyang.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanimals.65eaf6e3.webp&w=750&q=75"><span/>',
      '<a title="Github release" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/releases" style="margin-right: 10px;">\n        <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/Kele-Bingtang/vitepress-theme-teek?logo=github">\n      </a>\n\n      <a title="Npm Version" target="_blank" href="https://www.npmjs.com/package/vitepress-theme-teek" style="margin-right: 10px;">\n        <img src="https://img.shields.io/npm/v/vitepress-theme-teek?logo=npm&color=%09%23bf00ff" alt="https://img.shields.io/npm/v/vitepress-theme-teek?color=%09%23bf00ff">\n      </a>\n\n      <img src="https://img.shields.io/badge/v18.x-x?logo=node.js&label=node" alt="node version" style="margin-right: 10px;">\n      <img src="https://img.shields.io/github/languages/code-size/Kele-Bingtang/vitepress-theme-teek?logo=Visual Studio Code&logoColor=blue" alt="GitHub code size in bytes" style="margin-right: 10px;">\n\n      <a title="GitHub Discussions" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/discussions" style="margin-right: 10px;">\n        <img src="https://img.shields.io/github/discussions/Kele-Bingtang/vitepress-theme-teek?color=9cf&logo=github" alt="GitHub Discussions">\n      </a>\n\n      <a title="MIT License" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/master/LICENSE" style="margin-right: 10px;">\n        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License">\n      </a>',
    ],
  },
  docAnalysis: {
    createTime: "2025-03-23",
    statistics: {
      provider: "busuanzi",
    },
  },
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
    imgSrc: ["/bg/logo.png", "/bg/png.png"],
    description: [
      "想要就争取，不行就努力",
      "越能看懂历史，越能明白现在，越能看清未来",
      "是什么，为什么，怎么做，是否有更好的方案，验证结果",
      "我们必不可停止探索，而一切探索的尽头，都是重回起点，并对起点有初次般的了解",
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
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      // 文章右侧页内目录标题层级显示
      level: [2, 4],
    },
    outlineTitle: "目录导航",
    nav: [
      {
        text: "🚀 进化志",
        items: [
          {
            text: "美团四大名著",
            items: [
              { text: "走进高效能人士的七个习惯", link: "/growth/9703d2" },
            ],
          },
        ],
      },
      {
        text: "⚙️ 代码宇宙",
        items: [
          { text: "唯有爱与生活不可辜负", link: "/tech/7121d4" },
          {
            text: "☕ Java",
            items: [
              {
                text: "LocalDateTime使用",
                link: "/tech/4df292",
              },
            ],
          },
          {
            text: "🔧 框架与库",
            items: [
              { text: "MyBatis", link: "/tech/86f7a8" },
              { text: "MyBatis-Plus", link: "/tech/9660f6" },
              { text: "SpringCloud", link: "/tech/5b55ae" },
              { text: "Redis", link: "/tech/e06551" },
            ],
          },
          {
            text: "🗄️ 数据库",
            items: [
              {
                text: "DB数据类型一致性风险治理方案",
                link: "/tech/c05570",
              },
              {
                text: "xml文件符号表示",
                link: "/tech/f8b33c",
              },
              {
                text: "SQL常用语句",
                link: "/tech/d10041",
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
        items: [{ text: "拍照摄影", link: "/hobbies/372bfb" }],
      },
      {
        text: "📚 精神食粮",
        items: [
          { text: "亚马逊逆向工作法", link: "/library/9bc140" },
          { text: "我的最后一本口才书", link: "/library/8f4ba0" },
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
      { icon: "github", link: "https://github.com/Taro113/myBlog" },
    ],
  },
});
