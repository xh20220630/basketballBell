import { BasicLayOutProps } from '@/Types/layoutComponentsType';
import HeaderLayout from '@/layouts/header';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from '@umijs/max';
import { Button } from 'antd';

import { useTextArea } from './hooks';

const HeaderLayoutProps: BasicLayOutProps = {
  leftContent: (
    <>
      <div className="flex items-center gap-2 relative">
        {/* <!-- logo --> */}
        <Link to="/">
          <img
            src="https://picsum.photos/200/300"
            alt="logo"
            className="w-12 h-10"
          />
        </Link>
        <div>Create Posts</div>
      </div>
    </>
  ),
  rightContent: <div>Tabs</div>,
};
export default function News() {
  const { value, setValue, minHeight, preventBlock } = useTextArea();
  console.log(minHeight, 'minHeight');
  return (
    <>
      <HeaderLayout {...HeaderLayoutProps} />
      <div id="newsContent" className="rounded-2xl h-full bg-white w-[806px]">
        {/* 上面的部分 */}
        <div className="p-4 flex flex-col">
          {/*上传图片的按钮 */}
          <Button
            className=" w-max h-[36px] tracking-wide"
            icon={<UploadOutlined />}
          >
            点击上传封面图
          </Button>

          {/* 标题区域 */}
          <textarea
            value={value}
            onInput={(event: any) => setValue(event, event.target.value)}
            onKeyDown={preventBlock}
            placeholder="新的文章标题"
            className="text-5xl outline-none"
            style={{
              minHeight: minHeight + 'px',
              maxHeight: minHeight + 'px',
            }}
          ></textarea>
        </div>
      </div>
    </>
  );
}
