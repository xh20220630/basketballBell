//基础的布局组件

import { Outlet } from '@/.umi/exports';
import HeaderLayout from './header';

export default function BasicLayout() {
  return (
    <>
      {/* 定义头部组件 */}
      <HeaderLayout />
      <div id="content_out_box" className="bg-appBackground pt-3">
        <Outlet />
      </div>
    </>
  );
}
