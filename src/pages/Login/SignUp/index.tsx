// 注册页面
import SignUpForm from './SignUpForm';
import ViewPage from './ViewPage';

export default function SignUp() {
  return (
    <>
      <div className="bg-[rgb(249,249,249)] absolute w-full h-full flex items-center justify-center">
        <div
          id="SignUpBox"
          className="w-[70%] m-auto flex shadow-md bg-white relative box-border"
        >
          <SignUpForm />
          <div className="w-full relative overflow-hidden">
            <ViewPage />
          </div>
        </div>
      </div>
    </>
  );
}
