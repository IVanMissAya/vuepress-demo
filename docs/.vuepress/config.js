module.exports = {
    title: 'IVAn', // 设置网站标题
    description: 'Think Twice,Code Once',
    port: 8000,
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }] // 增加一个自定义的 favicon
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }], //PWA 插件需要引入的manifest
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }], //<meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }]
    ],
    base: '/', // 设置站点根路径
    dest: './ROOT', // 设置输出目录
    head: [],
    plugins: [],
    themeConfig: {
        // 添加导航栏
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '前端',
                link: '/front/index.md'
            },
            {
                text: '后端(Java)',
                link: '/java/index.md'
            },
            {
                text: '工具',
                items: [{
                        text: 'java基础',
                        link: '/java/java-base/'
                    },
                    {
                        text: 'java与opc通信',
                        link: '/java/java-opc/'
                    }
                ]
            },
            {
                text: '我的小站',
                link: 'https://www.ivan.fun'
            },
        ],
        displayAllHeaders: true,
        activeHeaderLinks: false,
        logo: '/assets/img/favicon.png',
        sidebarDepth: 2,
        sidebar: {
            '/life/': [{
                title: '生活测试',
                collapsable: false,
                children: [{
                        title: '生活测试01',
                        path: '/life/life01'
                    },
                    {
                        title: '生活测试02',
                        path: '/life/life02'
                    },
                    {
                        title: '生活测试03',
                        path: '/life/life03'
                    },
                ]
            }],
            '/study/english/': [{
                title: '英语',
                collapsable: false,
                children: [{
                        title: '第一节',
                        path: '/study/english/english01'
                    },
                    {
                        title: '第二节',
                        path: '/study/english/english02'
                    },
                    {
                        title: '第三节',
                        path: '/study/english/english03'
                    },
                ]
            }],
            '/study/math/': [{
                title: '数学',
                collapsable: false,
                children: [{
                        title: '第一节',
                        path: '/study/math/math01'
                    },
                    {
                        title: '第二节',
                        path: '/study/math/math02'
                    },
                    {
                        title: '第三节',
                        path: '/study/math/math03'
                    },
                ]
            }],
        },
        lastUpdated: 'Last Updated',
        nextLinks: true, // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        prevLinks: true, // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        smoothScroll: true // 页面滚动
    },

}