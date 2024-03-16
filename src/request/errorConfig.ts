//请求错误处理

import { NormalHandle } from '@/Types/commonType';
import { message } from 'antd';
import { RequestConfig } from 'umi';
import { ResponseStructure } from '.';

// 错误处理方案： 错误类型
export enum ErrorShowCode {
  NotLogin = 1,
}

//错误处理对象
export interface ErrorsHandleInterface {
  [ErrorShowCode.NotLogin]: NormalHandle;
}

const handleNotLogin = () => {
  history.pushState({}, '/login');
};
//具体的实现
const ErrorsHandle = {
  [ErrorShowCode.NotLogin]: handleNotLogin,
};

const ErrorReqConfig: RequestConfig['errorConfig'] = {
  // 错误抛出
  errorThrower: (res) => {
    const { success, data, errorCode, message: errorMessage, showType } = res;
    if (!success) {
      const error: any = new Error(errorMessage);
      error.name = 'BizError';
      error.info = { errorCode, message: errorMessage, showType, data };
      throw error; // 抛出自制的错误
    }
  },
  // 错误接收及处理
  errorHandler: (error: any, opts: any) => {
    if (opts?.skipErrorHandler) throw error;
    // 我们的 errorThrower 抛出的错误。
    if (error.name === 'BizError') {
      const errorInfo: ResponseStructure | undefined = error.info;
      if (errorInfo) {
        const { message: errorMessage, errorCode } = errorInfo;
        if (errorCode && ErrorsHandle[errorCode]) {
          ErrorsHandle[errorCode]();
          return;
        }
        message.error(errorMessage);
      }
    } else if (error.response) {
      // Axios 的错误
      // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
      message.error(`Response status:${error.response.status}`);
    } else if (error.request) {
      // 请求已经成功发起，但没有收到响应
      // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
      // 而在node.js中是 http.ClientRequest 的实例
      message.error('None response! Please retry.');
    } else {
      // 发送请求时出了点问题
      message.error(error.message);
    }
  },
};

export default ErrorReqConfig;
