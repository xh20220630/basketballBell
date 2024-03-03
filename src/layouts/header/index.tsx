import { Icon } from '@/.umi/plugin-icons';
import { useState } from 'react';
//导入动画组件
import { UserInfoCard } from '@/components';
import { useSpring } from '@react-spring/web';

function HeaderLayout() {
  const [isShowUser, setIsShowUser] = useState<boolean>(true);
  /* eslint-disable no-unused-vars */
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  const toggleUserInfo = () => {
    setIsShowUser(!isShowUser);
  };
  return (
    <>
      <header className="bg-white shadow-md m-auto px-80">
        {/* <!-- 里面的内容 --> */}
        <nav className="flex items-center justify-between box-border py-2">
          {/* <!-- 左边区域 --> */}
          <div className="flex items-center gap-2 relative">
            {/* <!-- logo --> */}
            {/* <router-link to="/"> */}
            <img
              src="https://picsum.photos/200/300"
              alt="logo"
              className="w-12 h-10"
            />
            {/* </router-link> */}
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
          <div className="flex items-center gap-2 relative">
            <div className="p-2 border border-blue-700 hover:bg-blue-700 hover:text-white cursor-pointer rounded-md text-blue-500 font-medium">
              Create posts{' '}
              <Icon
                icon="ant-design:edit-outlined"
                className="align-[-5px] w-6 h-6 inline-block"
              />
            </div>
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
        </nav>
      </header>
    </>
  );
}

export default HeaderLayout;
