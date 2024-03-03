import { ArticleAbbreviation } from '@/Types/componentsType';
import { BarChartOutlined } from '@ant-design/icons';
import React, { useCallback } from 'react';
import IconHoc from '../IconHoc';
type ArticleInfoProps = {
  articleInfo: ArticleAbbreviation;
};

export default function ArticleInfo(
  props: ArticleInfoProps,
): React.ReactElement {
  const { articleInfo } = props;

  const likeNum = useCallback(() => {
    return articleInfo.like.length;
  }, [articleInfo.like]);
  return (
    // <!-- 用户头像 -->
    <div id="articleInfo_content" className="p-4 w-full box-border">
      <div id="authorInfo_box" className="flex items-center gap-2">
        <div>
          <img
            src={articleInfo.authorInfo.avatar}
            className="w-8 h-8 rounded-full border border-gray-500"
            alt=""
          />
        </div>
        <div>
          <div className="text-base">{articleInfo.authorInfo.name}</div>
          <div className="text-sm text-gray-500">2021-10-10</div>
        </div>
      </div>
      <div id="articleDesc_box" className="ml-10">
        <div className="text-black font-bold text-2xl">{articleInfo.title}</div>
        <div className="flex mt-1 items-center gap-1 text-sm text-sortTextColor">
          {articleInfo.tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="px-2 py-1 rounded-lg border border-transparent hover:bg-hoverColor hover:border-gray-400 align-middle cursor-pointer"
              >
                {tag}
              </div>
            );
          })}
        </div>
        <div className="flex justify-between mt-2 items-center">
          <div className="flex items-center gap-2">
            {/* <!-- 关注的人数 --> */}
            <div className="text-sortTextColor text-sm gap-2 hover:bg-hoverColor rounded-md px-2 py-1 flex items-center cursor-pointer">
              <div className="flex items-center -gap-1">
                <div className="-mr-3">
                  <img
                    src="https://picsum.photos/200"
                    className="w-8 h-8 rounded-full border border-gray-500"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="ml-3">{likeNum()} 人关注</div>
              </div>
            </div>
            {/* <!-- 关注的人数 --> */}
            <div className="text-sortTextColor text-sm gap-2 hover:bg-hoverColor rounded-md px-2 py-1 flex items-center cursor-pointer">
              <div>
                <div>
                  <IconHoc icon={BarChartOutlined} />
                </div>
              </div>
              <div>
                <div>{articleInfo.comment} 人评论</div>
              </div>
            </div>
          </div>
          {/* <!-- 页脚 --> */}
          <div className="text-sortTextColor text-sm flex gap-1 items-center">
            <div>{articleInfo.ReadTime} min read</div>
            <div className="p-3 rounded-xl hover:bg-blue-200 hover:text-white">
              <div>
                <IconHoc icon={BarChartOutlined} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
