//导出请求的Api
import { CaptionCodeVerify } from '@/Types/LoginType';
import { request } from 'umi';
import UserApi from './UserApi';

//请求图片验证码
function getCaptionImg() {
  return request('/api/captcha/request', {
    method: 'get',
  });
}

// 核对验证码
function GetVerifyCaptionCode(data: CaptionCodeVerify) {
  return request('/api/captcha/verify', {
    method: 'get',
    params: data,
  });
}

export const { PostLogin, PostPhoneLogin, PostSignUp, PostForgetPassword } =
  UserApi;

export { GetVerifyCaptionCode, getCaptionImg };
