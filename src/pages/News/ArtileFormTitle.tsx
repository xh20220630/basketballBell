import Button from '@/components/Button';
import { Link } from '@umijs/max';
import React from 'react';
import { News_render_key } from './type';

type ArticleFormTitleProps = {
  switchTab: (key: News_render_key) => void;
  renderKey: News_render_key;
};

type TabsButton = {
  key: string | number;
  onClick?: () => void;
  text: string;
};
const buttonGroups: TabsButton[] = [
  {
    key: News_render_key.EDIT_KEY,
    text: '编辑',
  },
  {
    key: News_render_key.VIEW_KEY,
    text: '预览',
  },
];

export default function ArticleFormTitle(
  props: ArticleFormTitleProps,
): React.ReactElement {
  const { switchTab, renderKey } = props;

  const activeClass = (currentRenderKey: News_render_key): boolean => {
    return renderKey === currentRenderKey;
  };

  return (
    <div className="flex items-center mt-3">
      <div className="flex items-center flex-grow gap-2 relative">
        {/* <!-- logo --> */}
        <Link to="/">
          <img
            src="https://picsum.photos/200/300"
            alt="logo"
            className="w-12 h-10"
          />
        </Link>
        <div>创建文章</div>
      </div>
      <div className="flex gap-2">
        {buttonGroups.map(({ key, text }) => (
          <Button
            className={
              activeClass(key as News_render_key)
                ? ['bg-textBtnHoverColor text-textBtnHoverColor']
                : []
            }
            key={key}
            onClick={() => switchTab(key as News_render_key)}
          >
            {text}
          </Button>
        ))}
      </div>
    </div>
  );
}
