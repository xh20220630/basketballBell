import { LoginFormProps } from '@/Types/LoginType';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { ProFormText } from '@ant-design/pro-components';
import { Row } from 'antd';
import { useEffect } from 'react';
import { useCaptcha } from './hooks';

interface AccountFormProps extends LoginFormProps {
  refreshCaptchaCode: boolean;
}

export default function AccountForm(props: AccountFormProps) {
  const { token, form, refreshCaptchaCode } = props;

  //获取图片验证码
  const { imgCodeInfo, reqSetImgCodeInfo } = useCaptcha(form);

  useEffect(() => {
    reqSetImgCodeInfo();
  }, [refreshCaptchaCode]);

  return (
    <>
      <ProFormText
        name="username"
        fieldProps={{
          size: 'large',
          prefix: (
            <UserOutlined
              style={{
                color: token.colorText,
              }}
              className={'prefixIcon'}
            />
          ),
        }}
        placeholder={'用户名: admin or user'}
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'middle',
          prefix: (
            <LockOutlined
              style={{
                color: token.colorText,
              }}
              className={'prefixIcon'}
            />
          ),
        }}
        placeholder={'密码: ant.design'}
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      />
      <ProFormText
        name="captchaId"
        hidden
        fieldProps={{
          size: 'large',
        }}
        initialValue={imgCodeInfo.captchaId}
      />
      <Row>
        <ProFormText
          name="captchaCode"
          width={200}
          style={{
            display: 'inline-block',
          }}
          fieldProps={{
            size: 'large',
          }}
          placeholder={'图形验证码'}
          rules={[
            {
              required: true,
              message: '请输入验证码!',
            },
          ]}
        />
        <div
          onClick={() => reqSetImgCodeInfo()}
          className=" flex-1 h-[40px] bg-white rounded inline-block"
        >
          <img className="w-full h-full" src={imgCodeInfo.captchaUrl} alt="" />
        </div>
      </Row>
    </>
  );
}
