import {
  LoginReqParamsType,
  PhoneLoginReqParams,
  SignReqParamsProps,
} from '@/Types/LoginType';
import { request } from 'umi';

//请求登录 --- 账号登录
function PostLogin(data: LoginReqParamsType) {
  return request('/api/login/signin', {
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

// 请求电话登录
function PostPhoneLogin(data: PhoneLoginReqParams) {
  return request('/api/login/phoneSign', {
    method: 'post',
    data,
  });
}

// 请求注册
function PostSignUp(data: SignReqParamsProps) {
  return request('/api/login/signup', {
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

//请求忘记密码
function PostForgetPassword(data: { email: string }) {
  return request('/api/user/forget/pass/word ', {
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export default {
  PostLogin,
  PostPhoneLogin,
  PostSignUp,
  PostForgetPassword,
};
