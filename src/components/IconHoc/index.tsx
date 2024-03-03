// icon组件的hoc
import React from 'react';

type WithIconHocType = {
  icon: React.FC<any>;
};

function IconHoc() {
  return function WithIconHoc(props: WithIconHocType) {
    // 创建一个新的 props 对象，包含原来的 props 和新的 className
    const newProps = {
      ...props,
      className: 'w-full h-full block',
    };
    const Icon = props.icon;
    return <div className="w-6 h-6 text-2xl">{<Icon {...newProps} />}</div>;
  };
}

export default IconHoc();
