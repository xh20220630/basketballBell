import { BasicLayOutProps } from '@/Types/layoutComponentsType';

function HeaderLayout(props: BasicLayOutProps) {
  const { leftContent, rightContent } = props;

  return (
    <>
      <header className="bg-white shadow-md m-auto px-80">
        {/* <!-- 里面的内容 --> */}
        <nav className="flex items-center justify-between box-border py-2">
          {/* <!-- 左边区域 --> */}
          {leftContent}
          {rightContent}
        </nav>
      </header>
    </>
  );
}

export default HeaderLayout;
