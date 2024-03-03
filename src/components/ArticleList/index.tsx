import { ArticleAbbreviation } from '@/Types/componentsType';
import React from 'react';
import ArticleInfo from '../ArticeInfo';
import Card from '../Card';
type ArticleListProps = {
  className?: Array<string>;
};

const articleList: Array<ArticleAbbreviation> = [
  {
    title:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum',
    // 文章的标签
    tags: ['#ccc'],
    // 文章的发布时间
    date: '2021-10-10',
    // 文章的路径
    path: '/detail',
    // 文章的作者
    authorInfo: {
      id: '1',
      name: '张三',
      avatar: 'https://picsum.photos/200',
    },
    // 阅读的时间
    ReadTime: 6,
    //喜欢的人数
    like: [1, 2, 3, 4],
    // 评论的人数
    comment: 10,
  },
];

const ArticleList: React.FC<ArticleListProps> = () => {
  return (
    <div className="mt-2">
      <Card
        title={
          <div id="titleBox" className="w-full">
            <img
              className="w-full"
              src="https://picsum.photos/600/300"
              alt=""
            />
          </div>
        }
      >
        <div className="body_content">
          {articleList.map((article, indx) => (
            <ArticleInfo articleInfo={article} key={indx} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ArticleList;
