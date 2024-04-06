import { FormVerification } from '@/constants';
import { useState } from 'react';

const useFormVerify = (props: any) => {
  const { type } = props;
  const [value, setValue] = useState<string>('');

  //当前的验证状态
  const [verifyStatus, setVerifyStatus] = useState<boolean>(true);

  const verify = FormVerification[type as string];

  const getVerifyStatus = (val: string) => {
    return new RegExp(verify.verify).test(val);
  };

  const onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const val = event.target.value;
    setValue(val);
    setVerifyStatus(getVerifyStatus(val));
  };

  return {
    formValue: {
      value,
      onChange,
    },
    formVerify: {
      msg: verify.msg,
      status: verifyStatus,
    },
  };
};

export { useFormVerify };
