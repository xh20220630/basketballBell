import ArticleList from '@/components/ArticleList';
import { useCallback, useState } from 'react';

const HomeContent: React.FunctionComponent = () => {
  // 当前点击的下标
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClass = ' font-bold text-black';
  const tabList = [
    {
      name: '相关的',
      path: '/',
    },
    {
      name: '最新的',
      path: '/new',
    },
    {
      name: '最热的',
      path: '/hot',
    },
  ];

  const currentActiveClassName = useCallback(
    (index: number) => {
      return activeIndex === index ? activeClass : '';
    },
    [activeIndex],
  );

  const tabClickHandle = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div id="content_list" className="px-3">
        {/* <!-- tab 页 --> */}
        <div className="flex items-center gap-2">
          {tabList.map((item, index) => {
            return (
              <div
                onClick={() => tabClickHandle(index)}
                className={
                  'p-2 text-xl text-sortTextColor hover:bg-blue-500 rounded-md hover:text-white cursor-pointer' +
                  currentActiveClassName(index)
                }
                key={item.name}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <ArticleList />
      </div>
    </>
  );
};

export default HomeContent;
