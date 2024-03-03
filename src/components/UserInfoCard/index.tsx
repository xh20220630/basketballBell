// 用户信息组件

import React from 'react';

type UserInfoCardProps = {
  handleClick?: () => void;
};

const UserInfoCard: React.FunctionComponent<UserInfoCardProps> = function (
  props,
) {
  const { handleClick } = props;
  return (
    <div
      id="UserInfoCard"
      onClick={handleClick}
      className="absolute top-full right-0 w-[240px]"
    >
      <div
        id="card_box"
        className="bg-white rounded-md overflow-hidden px-2 shadow-lg"
      >
        <div className="py-2 border-b border-gray-200 text-sortTextColor">
          <div className="group hover:bg-blue-200 hover:text-blue-700 hover:underline py-2 px-4 rounded-md cursor-pointer">
            <div>xh20200630</div>
            <div className="text-sm group-hover:text-blue-700  text-gray-500 ">
              @xh20200630
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="p-2 rounded-md text-sortTextColor hover:bg-blue-200 hover:underline cursor-pointer hover:text-blue-700">
            仪表盘
          </div>
          <div className="p-2 rounded-md text-sortTextColor hover:bg-blue-200 hover:underline cursor-pointer hover:text-blue-700">
            创建文章
          </div>
          <div className="p-2 rounded-md text-sortTextColor hover:bg-blue-200 hover:underline cursor-pointer hover:text-blue-700">
            设置
          </div>
        </div>
        <div className="group py-2 border-t border-gray-200 text-sortTextColor hover:text-blue-700">
          <div className=" group-hover:text-blue-700  hover:bg-blue-200 hover:underline py-2 px-4 rounded-md cursor-pointer">
            退出登录
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
