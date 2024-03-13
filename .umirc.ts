import { defineConfig } from '@umijs/max';

export default defineConfig({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '创建文章',
      path: '/news',
      component: './News',
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',
    },
  ],

  npmClient: 'pnpm',
  //tailwindcss css 导入
  tailwindcss: {},

  // icon集设置
  icons: {
    autoInstall: {},
  },

  //是否开启请求
  request: {
    dataField: 'data',
  },

  //开启请求代理
  proxy: {
    '/api': {
      target: 'http://localhost:8082',
      changeOrigin: true,
      // 'pathRewrite': { '^/api' : '' },
    },
  },
});
