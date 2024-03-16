import { getCaptionImg } from '@/Api';
import { ReqCaptionCode } from '@/Types/LoginType';
import { FormInstance } from 'antd';
import { useState } from 'react';

const useCaptcha = (form: FormInstance) => {
  //获取图片验证码
  const [imgCodeInfo, setImgCodeInfo] = useState<ReqCaptionCode>({
    captchaId: '',
    captchaUrl: '',
  });

  const reqSetImgCodeInfo = async (): Promise<ReqCaptionCode> => {
    const res = await getCaptionImg();
    console.log(res, 'res');
    setImgCodeInfo({ ...res.data });
    form.setFieldValue('captchaId', res.data.captchaId);

    return res.data;
  };

  return {
    imgCodeInfo,
    reqSetImgCodeInfo,
  };
};

export { useCaptcha };
