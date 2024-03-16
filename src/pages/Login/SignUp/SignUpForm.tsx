// 登录表单

import { PostSignUp } from '@/Api';
import { SignReqParamsProps } from '@/Types/LoginType';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { Button, Col, Form, Row } from 'antd';
import { useCallback, useEffect } from 'react';
import { useCaptcha } from '../hooks';

export default function SignUp() {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  //获取图片验证码
  const { imgCodeInfo, reqSetImgCodeInfo } = useCaptcha(form);

  //用户注册函数
  const userSignUpHandle = useCallback(async (value: SignReqParamsProps) => {
    //请求注册
    try {
      console.log(value, 'value');
      await PostSignUp({
        ...value,
      });
      //路由跳转
      navigate('/login');
    } catch {
      reqSetImgCodeInfo();
    }
  }, []);

  useEffect(() => {
    reqSetImgCodeInfo();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full py-[100px] px-[15%] box-border">
        <div>
          <div id="titleBox" className="mb-12">
            <h3 className=" text-4xl font-bold text-[rgb(35,40,48)] mb-8">
              创建新的用户
            </h3>
            <p className=" text-sm ">
              已经有了一个账号?<span>点击登录</span>
            </p>
          </div>
          {/* Form表单 */}
          <ProForm
            layout="vertical"
            grid={true}
            rowProps={{
              gutter: 8,
              align: 'bottom',
            }}
            onFinish={async (value: SignReqParamsProps) =>
              userSignUpHandle({
                ...value,
                captchaId: imgCodeInfo.captchaId,
              })
            }
            submitter={{
              render({ submit }) {
                return (
                  <Button onClick={() => submit()} block>
                    登录
                  </Button>
                );
              },
            }}
          >
            <ProFormText
              name="username"
              label={
                <>
                  <UserOutlined className={'prefixIcon'} />
                  <span className="text-[rgb(84,93,108)] ml-2">用户名</span>
                </>
              }
              fieldProps={{
                size: 'middle',
              }}
              placeholder={'请输入用户名'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
              colProps={{
                span: 12,
              }}
            />
            <ProFormText
              label={
                <>
                  <UserOutlined className={'prefixIcon'} />
                  <span className="text-[rgb(84,93,108)] ml-2">昵称</span>
                </>
              }
              name="nickname"
              fieldProps={{
                size: 'middle',
              }}
              placeholder={'输入你的昵称'}
              colProps={{
                span: 12,
              }}
            />
            <ProFormText
              label={
                <>
                  <MailOutlined className={'prefixIcon'} />
                  <span className="text-[rgb(84,93,108)] ml-2">邮箱</span>
                </>
              }
              name="email"
              fieldProps={{
                size: 'middle',
              }}
              rules={[
                { type: 'email', message: '邮箱不合法' },
                { required: true, message: '邮箱为必填项' },
              ]}
              placeholder={'输入你的注册邮箱'}
            />
            <ProFormText.Password
              name="password"
              label={
                <>
                  <LockOutlined className={'prefixIcon'} />
                  <span className="text-[rgb(84,93,108)] ml-2">密码</span>
                </>
              }
              fieldProps={{
                size: 'middle',
              }}
              placeholder={'密码: ant.design'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
            <ProFormText.Password
              name="rePassword"
              label={
                <>
                  <span className="text-[rgb(84,93,108)] ml-2">二次密码</span>
                </>
              }
              fieldProps={{
                size: 'middle',
              }}
              placeholder={'密码: ant.design'}
              rules={[
                {
                  required: true,
                  message: '两次密码不一致！',
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
            <Row
              style={{ width: '100%', padding: '0px 4px' }}
              justify={'space-between'}
            >
              <Col span={11}>
                <ProFormText
                  name="captchaCode"
                  fieldProps={{
                    size: 'middle',
                  }}
                  placeholder={'图形验证码'}
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码!',
                    },
                  ]}
                />
              </Col>
              <Col span={11}>
                <div
                  onClick={() => reqSetImgCodeInfo()}
                  className=" flex-1 h-[40px] bg-white rounded inline-block"
                >
                  <img
                    className="w-full h-full"
                    src={imgCodeInfo.captchaUrl}
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </ProForm>
        </div>
      </div>
    </>
  );
}
