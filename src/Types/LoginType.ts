// 跟登录相关的类型

import { GlobalToken } from 'antd';
import { FormInstance } from 'antd/lib';

type ReqCaptionCode = {
  captchaId: string;
  captchaUrl: string;
};

type LoginFormProps = {
  token: GlobalToken;
  form: FormInstance;
};

type LoginReqParamsType = {
  username: string;
  password: string;
  captchaCode: string;
  captchaId: string;
  redirect: string;
};

type CaptionCodeVerify = {
  captchaCode: string;
  captchaId: string;
};

//注册的类型
interface SignReqParamsProps extends LoginReqParamsType {
  rePassword: string;
  nickname: string;
  email?: string;
  phone?: string;
}

export {
  CaptionCodeVerify,
  LoginFormProps,
  LoginReqParamsType,
  ReqCaptionCode,
  SignReqParamsProps,
};
