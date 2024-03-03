// 布局组件的属性

import React from 'react';

//基本布局属性

//左右布局
export type BasicLayOutProps = {
  leftContent: React.ReactElement;
  rightContent: React.ReactElement;
  //为外面容器的className
  className?: Array<string>;
};

//左右中布局
export type FlexColumnLayoutProps = BasicLayOutProps & {
  middleContent?: React.ReactElement;
};
