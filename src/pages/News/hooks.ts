import { debounce } from 'lodash';
import React, { useRef, useState } from 'react';
const minHeight = 46;

export function useTextArea() {
  //记录当前换行的次数
  const minHeightRef = useRef(minHeight);
  const [value, setValue] = useState<string>('');

  //计算当前的换行数量
  const computerMinHeight = (scrollHeight: number): number => {
    return scrollHeight > 0 ? scrollHeight : minHeight;
  };

  const debounceHandle = debounce((event) => {
    minHeightRef.current = computerMinHeight(event.target.scrollHeight);
  }, 0);
  const handleSetTitle = (
    event: any,
    value: string,
    textRef: React.RefObject<HTMLAreaElement>,
  ): void => {
    //禁用换行 --- 使用防抖
    debounceHandle({
      target: textRef.current,
    });
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
