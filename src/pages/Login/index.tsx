import { PostLogin, PostPhoneLogin } from '@/Api';
import { LoginReqParamsType } from '@/Types/LoginType';
import {
  AlipayOutlined,
  TaobaoOutlined,
  WeiboOutlined,
} from '@ant-design/icons';
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCheckbox,
} from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { App, Divider, Form, Space, Tabs, theme } from 'antd';
import type { CSSProperties } from 'react';
import { useCallback, useState } from 'react';
import AccountForm from './AccoutForm';
import PhoneForm from './PhoneForm';

export type LoginType = 'phone' | 'account';

interface handleLoginSuccess {
  (res: { message: string; redirect: string }): void;
}

const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const LoginForm = () => {
  const [loginType, setLoginType] = useState<LoginType>('account');

  //是否触发刷新验证码
  const [refreshCaptchaCode, setRefreshCaptchaCode] = useState<boolean>(false);
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const { message } = App.useApp();
  const navigate = useNavigate();

  const LoginFinish = useCallback(
    async (value: LoginReqParamsType) => {
      //登录成功的回调函数
      const handleLoginSuccess: handleLoginSuccess = (res) => {
        message.success(res.message);
        //进行路由的跳转
        navigate(res.redirect);
      };

      //账户登录
      const AccountLogin = async () => {
        //请求登录
        const { data } = await PostLogin({
          ...value,
          //重定向到首页
          redirect: '/',
        });

        handleLoginSuccess({
          message: data.message,
          redirect: data.redirect,
        });
      };

      const PhoneLogin = async () => {
        //电话号码登录
        const { data } = await PostPhoneLogin(value);

        handleLoginSuccess({
          message: data.message,
          redirect: data.redirect,
        });
      };

      if (loginType === 'account') {
        // 请求刷新验证码
        setRefreshCaptchaCode(!refreshCaptchaCode);
        await AccountLogin();
      } else if (loginType === 'phone') {
        await PhoneLogin();
      }
    },
    [refreshCaptchaCode],
  );

  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
      }}
    >
      <LoginFormPage
        form={form}
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title="爱玩社区"
        containerStyle={{
          backgroundColor: 'rgba(0, 0, 0,0.65)',
          backdropFilter: 'blur(4px)',
        }}
        subTitle="打造大家梦想中的社区"
        onFinish={LoginFinish}
        actions={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Divider plain>
              <span
                style={{
                  color: token.colorTextPlaceholder,
                  fontWeight: 'normal',
                  fontSize: 14,
                }}
              >
                其他登录方式
              </span>
            </Divider>
            <Space align="center" size={24}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid ' + token.colorPrimaryBorder,
                  borderRadius: '50%',
                }}
              >
                <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid ' + token.colorPrimaryBorder,
                  borderRadius: '50%',
                }}
              >
                <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid ' + token.colorPrimaryBorder,
                  borderRadius: '50%',
                }}
              >
                <WeiboOutlined style={{ ...iconStyles, color: '#1890ff' }} />
              </div>
            </Space>
          </div>
        }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          items={[
            {
              key: 'account',
              label: '账号密码登录',
              children: (
                <AccountForm
                  refreshCaptchaCode={refreshCaptchaCode}
                  form={form}
                  token={token}
                />
              ),
            },
            {
              key: 'phone',
              label: '手机号登录',
              children: <PhoneForm form={form} token={token} />,
            },
          ]}
        ></Tabs>
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};

export default function Login() {
  return (
    <App>
      <ProConfigProvider dark>
        <LoginForm />
      </ProConfigProvider>
    </App>
  );
}
