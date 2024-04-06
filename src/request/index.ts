import { RequestConfig } from 'umi';
import requestInterceptorsConfig from './Interceptors';
import errorConfig, { ErrorShowCode } from './errorConfig';

// 与后端约定的响应数据格式
export interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: ErrorShowCode;
  message?: string;
}

const requestConfig: RequestConfig<ResponseStructure> = {
  // 统一的请求设定
  timeout: 3000,
  errorConfig,
  requestInterceptors: requestInterceptorsConfig.requestInterceptors,
  responseInterceptors: requestInterceptorsConfig.responseInterceptors,
};

export default requestConfig;
