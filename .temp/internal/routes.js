/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\code_file\\IVAn\\vuepress-starter\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-15b55480",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-15b55480").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-5763fc87",
    path: "/front/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5763fc87").then(next)
    },
  },
  {
    path: "/front/index.html",
    redirect: "/front/"
  },
  {
    name: "v-3db66813",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3db66813").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-631e94d3",
    path: "/java/Java+PhantomJs%E5%AE%9E%E7%8E%B0%E5%90%8E%E5%8F%B0%E7%94%9F%E6%88%90Echarts%E5%9B%BE%E7%89%87.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-631e94d3").then(next)
    },
  },
  {
    path: "/java/Java+PhantomJs实现后台生成Echarts图片.html",
    redirect: "/java/Java+PhantomJs%E5%AE%9E%E7%8E%B0%E5%90%8E%E5%8F%B0%E7%94%9F%E6%88%90Echarts%E5%9B%BE%E7%89%87.html"
  },
  {
    path: "/java/Java+PhantomJs实现后台生成Echarts图片.html",
    redirect: "/java/Java+PhantomJs%E5%AE%9E%E7%8E%B0%E5%90%8E%E5%8F%B0%E7%94%9F%E6%88%90Echarts%E5%9B%BE%E7%89%87.html"
  },
  {
    name: "v-84967c6a",
    path: "/java/Java%E4%BD%BF%E7%94%A8poi-tl%E6%93%8D%E4%BD%9Cword%E6%96%87%E6%A1%A3.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-84967c6a").then(next)
    },
  },
  {
    path: "/java/Java使用poi-tl操作word文档.html",
    redirect: "/java/Java%E4%BD%BF%E7%94%A8poi-tl%E6%93%8D%E4%BD%9Cword%E6%96%87%E6%A1%A3.html"
  },
  {
    path: "/java/Java使用poi-tl操作word文档.html",
    redirect: "/java/Java%E4%BD%BF%E7%94%A8poi-tl%E6%93%8D%E4%BD%9Cword%E6%96%87%E6%A1%A3.html"
  },
  {
    name: "v-aa994232",
    path: "/java/java%E5%A4%84%E7%90%86emoji%E7%9A%84%E6%96%B9%E5%BC%8F.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-aa994232").then(next)
    },
  },
  {
    path: "/java/java处理emoji的方式.html",
    redirect: "/java/java%E5%A4%84%E7%90%86emoji%E7%9A%84%E6%96%B9%E5%BC%8F.html"
  },
  {
    path: "/java/java处理emoji的方式.html",
    redirect: "/java/java%E5%A4%84%E7%90%86emoji%E7%9A%84%E6%96%B9%E5%BC%8F.html"
  },
  {
    name: "v-4c17a423",
    path: "/java/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4c17a423").then(next)
    },
  },
  {
    path: "/java/index.html",
    redirect: "/java/"
  },
  {
    name: "v-acbeb42e",
    path: "/java/%E5%9F%BA%E4%BA%8EJava%E7%9A%84TCPSocket%E9%80%9A%E4%BF%A1%E8%AF%A6%E8%A7%A3.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-acbeb42e").then(next)
    },
  },
  {
    path: "/java/基于Java的TCPSocket通信详解.html",
    redirect: "/java/%E5%9F%BA%E4%BA%8EJava%E7%9A%84TCPSocket%E9%80%9A%E4%BF%A1%E8%AF%A6%E8%A7%A3.html"
  },
  {
    path: "/java/基于Java的TCPSocket通信详解.html",
    redirect: "/java/%E5%9F%BA%E4%BA%8EJava%E7%9A%84TCPSocket%E9%80%9A%E4%BF%A1%E8%AF%A6%E8%A7%A3.html"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]