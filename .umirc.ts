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
    {
      name: '忘记密码',
      path: '/forgetPwd',
      component: getAbsolutePath('Login/ForgetPwd'),
    },
  ],

  //配置网站图标
  favicons: [
    // 完整地址
    'https://cdn.dribbble.com/userupload/13278662/file/original-5c0b8ca6ff0bb7e65b7317bb49a4bcae.jpg?resize=1600x1200',
    // 此时将指向 `/favicon.png` ，确保你的项目含有 `public/favicon.png`
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

  //导入的别名
  alias: {
    public: '/public',
  },
});
