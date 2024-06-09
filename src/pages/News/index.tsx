import { SettingFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { createContext, useCallback, useState } from 'react';
import { ArticleForm } from './ArticleForm';
import ArticleView from './ArticleView';
import ArticleFormTitle from './ArtileFormTitle';
import { News_render_key } from './type';

interface ArticleFormContextItr {
  // 文章标题
  title: string;
  // 文章内容
  content: string;
  // 文章标签
  tag: string[];
  // 文章封面
  coverUrl: string;
}
// 创建一个文章 的context 对象
const defaultValue: ArticleFormContextItr = {
  title: '',
  content: '',
  tag: [],
  coverUrl: '',
};
export const ArticleFormContext = createContext<{
  value: ArticleFormContextItr;
  setValue: React.Dispatch<React.SetStateAction<ArticleFormContextItr>>;
}>({
  value: defaultValue,
  setValue() {},
});

export default function News() {
  const [tabKey, setTabKey] = useState(News_render_key.EDIT_KEY);

  const [articleForm, setArticleForm] =
    useState<ArticleFormContextItr>(defaultValue);

  const switchTabKey = (key: News_render_key) => {
    setTabKey(key);
  };

  const renderTabKey = useCallback(() => {
    const tabRender = {
      [News_render_key.EDIT_KEY]: {
        render() {
          return <ArticleForm />;
        },
      },
      [News_render_key.VIEW_KEY]: {
        render() {
          return <ArticleView />;
        },
      },
    };

    return tabRender[tabKey].render();
  }, [tabKey]);
  return (
    <>
      <div className="w-full h-full">
        <div
          id="newsContent"
          className="rounded-2xl h-bodyHeight w-[820px] mx-auto flex flex-col flex-grow box-border"
        >
          <ArticleFormTitle renderKey={tabKey} switchTab={switchTabKey} />
          <ArticleFormContext.Provider
            value={{
              value: articleForm,
              setValue: setArticleForm,
            }}
          >
            <div className="bg-white m-4 rounded-2xl h-full flex-1 flex flex-col overflow-y-auto">
              {renderTabKey()}
            </div>
          </ArticleFormContext.Provider>
          <div className="pb-3">
            <Button
              className="hover:bg-indigo-600"
              style={{
                backgroundColor: 'rgb(59,73,223)',
              }}
              type="primary"
              size="large"
            >
              发布
            </Button>
            <Button className="text-black ml-2" size="large" type="text">
              保存为草稿
            </Button>
            {/* 设置 */}
            <SettingFilled className="ml-2" />
          </div>
        </div>
      </div>
    </>
  );
}
