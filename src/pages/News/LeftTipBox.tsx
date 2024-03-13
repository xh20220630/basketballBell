import React from 'react';

//左边的提示信息
enum DirectionMap {
  'top',
  'bottom',
}

type LeftTipBoxProps = {
  showTipBox: {
    isShow: boolean;
    deration: DirectionMap;
  };
};

type TipBoxType = {
  [key in DirectionMap]: React.ReactElement;
};

function TopTipBox() {
  return <>TopTipBox</>;
}

function BottomTipBox() {
  return <>BottomTipBox</>;
}

export default function LeftTipBox(props: LeftTipBoxProps): React.ReactElement {
  //分为上下两部分

  const { showTipBox } = props;

  const TipBox: TipBoxType = {
    [DirectionMap.top]: <TopTipBox />,
    [DirectionMap.bottom]: <BottomTipBox />,
  };
  return <>{showTipBox.isShow && TipBox[showTipBox.deration]}</>;
}
