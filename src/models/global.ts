// 全局共享数据示例
import { useState } from 'react';

const useHello = () => {
  const [hello, setHello] = useState<string>('hello basketballBell');
  return {
    hello,
    setHello,
  };
};

export default useHello;
