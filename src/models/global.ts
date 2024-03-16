// 全局共享数据示例
import { useState } from 'react';

// 全局共享属性token
const useToken = (tokenStr: string) => {
  const [token, setToken] = useState<string>(tokenStr);
  return {
    token,
    setToken,
  };
};

export default useToken;
