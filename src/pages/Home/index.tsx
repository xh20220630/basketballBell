import { UserInfoCard } from '@/components';
import HeaderLayout from '@/layouts/header';
import { Icon, Link } from '@umijs/max';
import { useState } from 'react';
import HomeContent from './HomeContent';
import RightCardList from './RightCardList';
import SortList from './SortList';

function RightContent() {
  const [isShowUser, setIsShowUser] = useState<boolean>(false);

  const toggleUserInfo = () => {
    setIsShowUser(!isShowUser);
  };

  return (
    <div className="flex items-center gap-2 relative">
      <Link to="/news">
        <div className="p-2 border border-blue-700 hover:bg-blue-700 hover:text-white cursor-pointer rounded-md text-blue-500 font-medium">
          Create posts
          <Icon
            icon="ant-design:edit-outlined"
            className="align-[-5px] w-6 h-6 inline-block"
          />
        </div>
      </Link>
      <div className="bg-gray-400 cursor-pointer hover:bg-blue-700 hover:text-white text-black p-2 rounded-md ">
        <Icon icon="ant-design:bell-outlined" className="w-6 h-6" />
      </div>
      <div
        onClick={toggleUserInfo}
        className="rounded-md overflow-hidden hover:shadow-center cursor-pointer relative"
      >
        <img
          src="https://picsum.photos/200/300"
          className="w-8 h-8"
          alt="用户头像"
        />
      </div>
      {isShowUser && <UserInfoCard handleClick={toggleUserInfo} />}
    </div>
  );
}

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      {/* 定义头部组件 */}
      <HeaderLayout
        leftContent={
          <div className="flex items-center gap-2 relative">
            {/* <!-- logo --> */}
            <Link to="/">
              <img
                src="https://picsum.photos/200/300"
                alt="logo"
                className="w-12 h-10"
              />
            </Link>
            <input
              placeholder="搜索你想要的内容"
              className="h-10 indent-1 w-[420px] rounded-md border-gray-400 border outline-sky-600 outline-2"
              type="text"
            />
            <div className="absolute right-2 hover:bg-sky-500 hover:text-white flex justify-center items-center p-1 rounded text-gray-400">
              <button type="button">
                <Icon icon="ant-design:search-outlined" className="w-6 h-6" />
              </button>
            </div>
          </div>
        }
        rightContent={<RightContent />}
      />
      <div id="content_out_box" className="bg-appBackground pt-3">
        <div id="content" className="px-44 flex">
          <SortList />
          <HomeContent />
          <RightCardList />
        </div>
      </div>
    </>
  );
};

export default HomePage;
