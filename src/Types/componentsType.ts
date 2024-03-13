import React from 'react';

export type SortItem = {
  name?: string;
  target?: boolean;
  //跳转的路径
  path?: string;
  icon?: React.FC<any>;
};

export type ListWithTitle = {
  title: string;
  list: SortItem[];
};

// 定义一个枚举属性
export enum SortType {
  column = 'col',
  row = 'row',
}
export type SortProps = {
  [SortType.column]: string;
  [SortType.row]: string;
  hoverUnderLine?: string;
};

export interface SortItemHandleClick {
  (item: SortItem): void;
}

export interface SortMetaType {
  // 分类列表
  sortList?: SortItem[];
  // 其他列表
  otherList?: ListWithTitle;
  // 底部的icon列表
  bottomIconList?: SortItem[];
  myTagList?: ListWithTitle;
}

export interface ArticleAbbreviation {
  title: string;
  // 文章的标签
  tags: string[];
  // 文章的发布时间
  date: string;
  // 文章的封面
  cover?: string;
  // 文章的路径
  path: string;
  // 文章的作者
  authorInfo: AuthorInfo;
  // 阅读的时间
  ReadTime: number;
  //喜欢的人数
  like: number[];
  // 评论的人数
  comment: number;
}
export interface discussProps {
  // 讨论的内容
  content: string;
  // 评论的人数
  num: number;
}
// 热榜属性
export interface HotDiscussProps {
  // 标题
  title: {
    main: string;
    sub?: string;
  };
  discussList: discussProps[];
}

interface AuthorInfo {
  id: string;
  name: string;
  avatar: string;
}

//Tag 渲染 props

export type TagRenderData = {
  value: string | number;
  label: string;
  description: string;
};
