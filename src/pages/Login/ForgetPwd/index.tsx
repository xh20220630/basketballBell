/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Anr8e8c5AYF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { PostForgetPassword } from '@/Api';
import { Logo } from '@/components/Logo';
import { useFormVerify } from '@/hooks';
import { Button, TextField } from '@mui/material';
import { Link } from 'umi';

export default function Component() {
  const { formValue, formVerify } = useFormVerify({ type: 'email' });

  //请求忘记密码
  const forgetPassword = async () => {
    if (!formVerify.status) return;
    const res = await PostForgetPassword({
      email: formValue.value,
    });

    console.log(res);
  };
  return (
    <div className="px-4 py-12 space-y-4 md:py-24">
      <Logo width={100} height={100} />
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">忘记你的密码?</h1>
        <p className="text-gray-500 dark:text-gray-400">
          输入注册时的邮箱，用于找回密码
        </p>
      </div>
      <div className="mx-auto max-w-sm space-y-4">
        <div className="space-y-2">
          <TextField
            {...formValue}
            error={!formVerify.status}
            helperText={formVerify.status ? '' : formVerify.msg}
            id="email"
            label="email"
            className="w-full"
            variant="standard"
            placeholder="输入注册邮箱"
            type="email"
          />
        </div>
        <Button
          onClick={() => forgetPassword()}
          variant="contained"
          className="w-full"
        >
          提交
        </Button>
      </div>
      <div className="text-center">
        已经有账户了？
        <Link className="text-sm underline text-blue-500" to="/login">
          返回登录
        </Link>
      </div>
    </div>
  );
}
