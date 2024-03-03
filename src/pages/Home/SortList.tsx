import { SortItem, SortType } from '@/Types/componentsType';
import Icon from '@/components/IconHoc';
import Sort from '@/components/Sort';
import { metaType } from '@/constants';
import { SettingOutlined } from '@ant-design/icons';

const SortList: React.FunctionComponent = () => {
  return (
    <>
      <div id="left_sort_list" className="w-72 flex-shrink-0">
        <div>
          <Sort
            hoverUnderLine={true}
            sortList={metaType.sortList}
            sortType={SortType.column}
          />
        </div>
        <div className="mt-2">
          <Sort
            sortList={metaType.otherList?.list as SortItem[]}
            title={
              <div className="mb-1 font-bold">{metaType.otherList?.title}</div>
            }
            bottom={
              <div className="mb-1 font-bold">
                <Sort
                  hoverUnderLine={true}
                  sortType={SortType.row}
                  sortList={metaType.bottomIconList}
                ></Sort>
              </div>
            }
          ></Sort>
        </div>
        <div className="mb-1 font-bold flex justify-between items-center">
          {metaType.myTagList?.title}
          <div className="p-2 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer">
            <Icon
              icon={(newProps) => {
                return <SettingOutlined {...newProps} />;
              }}
            />
          </div>
        </div>
        <div className="mt-2 h-[320px] overflow-y-auto overflow-x-hidden">
          <Sort
            hoverUnderLine={true}
            sortList={metaType.myTagList?.list as SortItem[]}
          ></Sort>
        </div>
      </div>
    </>
  );
};

export default SortList;
