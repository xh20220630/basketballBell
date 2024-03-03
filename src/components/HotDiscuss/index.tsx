import { HotDiscussProps } from '@/Types/componentsType';
import Card, { CardProps } from '../Card';

type HotDiscussFCProps = {
  HotDiscuss: HotDiscussProps;
};

const HotDiscuss: React.FC<HotDiscussFCProps> = (props) => {
  const { HotDiscuss } = props;
  const CardProps: CardProps = {
    title: (
      <div className="p-4 border-b border-gray-200">
        {/* <!-- 主标题 --> */}
        <div id="mainTitle" className="text-lg font-bold">
          {HotDiscuss.title.main}
        </div>
        {/* <!-- 副标题 --> */}
        {HotDiscuss.title.sub && (
          <div className="text-gray-500 text-sm" id="subTitle">
            {HotDiscuss.title.sub}
          </div>
        )}
      </div>
    ),
  };
  return (
    <div className="w-[320px] flex-shrink-0">
      <Card {...CardProps}>
        <div className="body_content">
          <div>
            {HotDiscuss.discussList.map((hotDiscussItem, index) => (
              <div className="p-4 border-b border-gray-200" key={index}>
                <div className="text-sm ">{hotDiscussItem.content}</div>
                <div className="text-sm text-gray-500 mt-2">
                  {hotDiscussItem.num} 人讨论
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HotDiscuss;
