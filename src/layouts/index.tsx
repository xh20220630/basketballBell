//基础的布局组件

import { Outlet } from '@/.umi/exports';

export default function BasicLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
