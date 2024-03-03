import HomeContent from './HomeContent';
import RightCardList from './RightCardList';
import SortList from './SortList';

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <div id="content" className="px-44 flex">
        <SortList />
        <HomeContent />
        <RightCardList />
      </div>
    </>
  );
};

export default HomePage;
