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
  ],

  npmClient: 'pnpm',
  //tailwindcss css 导入
  tailwindcss: {},

  // icon集设置
  icons: {
    autoInstall: {},
  },
});
