// 拦截器

import { RequestConfig } from '@umijs/max';

const requestInterceptorsConfig: Pick<
  RequestConfig,
  'requestInterceptors' | 'responseInterceptors'
> = {
  // 请求拦截器
  requestInterceptors: [
    (config: any) => {
      // 拦截请求配置，进行个性化处理。
      //   const url = config.url.concat('?token = 123');
      return { ...config };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response: any) => {
      // 拦截响应数据，进行个性化处理
      const { data } = response;

      if (!data.success) {
        return Promise.reject(data);
      }
      return response;
    },
  ],
};

export default requestInterceptorsConfig;
