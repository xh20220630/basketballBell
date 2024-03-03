import {
  SortItem,
  SortItemHandleClick,
  SortProps as SortPropsClass,
  SortType,
} from '@/Types/componentsType';

import { ReactNode, useCallback } from 'react';
import IconHoc from '../IconHoc';

interface SortProps {
  title?: React.ReactNode;
  bottom?: ReactNode;
  sortList?: Array<SortItem>;
  sortType?: SortType;
  hoverUnderLine?: boolean | string;
}

const Sort: React.FunctionComponent<SortProps> = (props) => {
  const { title, bottom, sortList } = props;

  const sortItemClass: SortPropsClass = {
    [SortType.column]: '',
    [SortType.row]: ' items-center justify-center !gap-0',
    hoverUnderLine: props.hoverUnderLine ? ' hover:underline' : '',
  };

  const sortType: SortPropsClass = {
    [SortType.column]: 'flex-col ',
    [SortType.row]: 'flex-row ',
  };

  const PropsSortType =
    sortItemClass[props.sortType as SortType] || sortItemClass[SortType.column];
  //获取类名
  const getSortClass = useCallback(() => {
    return (
      'flex items-center gap-2 p-2 hover:bg-blue-500 rounded-md hover:text-white cursor-pointer mb-1 ' +
      PropsSortType +
      sortItemClass.hoverUnderLine
    );
  }, []);
  const sortItemHandleClick: SortItemHandleClick = ({ target, path = '/' }) => {
    if (target) {
      // 跳转
      //   router.push({
      //     path: path
      //   })
      console.log(path);
    }
  };
  return (
    <>
      <div>{title}</div>
      <div
        id="sort_box"
        className={
          'flex text-sortTextColor w-full ' +
          (sortType[props.sortType as SortType] || sortType[SortType.column])
        }
      >
        {sortList?.length &&
          sortList.map((sortItem, index) => {
            const Icon = sortItem.icon;
            return (
              <div
                onClick={() => sortItemHandleClick(sortItem)}
                key={index}
                id="sort_item_box"
                className={getSortClass()}
              >
                {Icon && <IconHoc icon={Icon} />}
                {/* <!-- 文字 --> */}
                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                  {sortItem.name}
                </div>
              </div>
            );
          })}

        <div>{bottom}</div>
      </div>
    </>
  );
};

export default Sort;
