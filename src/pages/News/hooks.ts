import { useRef, useState } from 'react';

const minHeight = 64;

export function useTextArea() {
  //记录当前换行的次数
  const minHeightRef = useRef(minHeight);
  const [value, setValue] = useState<string>('');

  //计算当前的换行数量
  const computerMinHeight = (scrollHeight: number): number => {
    console.log(scrollHeight, 'scrollHeight');
    return Math.ceil(scrollHeight / minHeight) * minHeight;
  };
  const handleSetTitle = (event: any, value: string): void => {
    //禁用换行
    minHeightRef.current = computerMinHeight(event.target.scrollHeight);
    setValue(value);
  };

  //阻止换行事件
  const preventBlock = (event: any) => {
    if (event.key === 'Enter') {
      // 阻止默认行为（即输入换行）
      event.preventDefault();
      return;
    }
  };

  return {
    value: value,
    setValue: handleSetTitle,
    minHeight: minHeightRef.current,
    preventBlock: preventBlock,
  };
}
