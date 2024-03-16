import { defineConfig } from '@umijs/max';

const BasicPath = '@/pages/';

function getAbsolutePath(path: string): string {
  return BasicPath + path;
}
export default defineConfig({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: getAbsolutePath('Home'),
    },
    {
      name: '创建文章',
      path: '/news',
      component: getAbsolutePath('News'),
    },
    {
      name: '登录',
      path: '/login',
      component: getAbsolutePath('Login'),
    },
    {
      name: '注册',
      path: '/signUp',
      component: getAbsolutePath('Login/SignUp'),
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
