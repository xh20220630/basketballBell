import HotDiscuss from '@/components/HotDiscuss';
import { HotDiscussList } from '@/constants';

const RightCardList: React.FunctionComponent = () => {
  return (
    <div className="w-[320px] flex-shrink-0 first:mt-0">
      {HotDiscussList.map((hotDiscussItem, index) => (
        <div className="mt-2" key={index}>
          <HotDiscuss HotDiscuss={hotDiscussItem} />
        </div>
      ))}
    </div>
  );
};

export default RightCardList;
