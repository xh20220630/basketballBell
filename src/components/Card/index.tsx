import React, { useCallback } from 'react';

export type CardProps = {
  title?: React.ReactElement;
  bottom?: React.ReactElement;
  children?: React.ReactElement;
  bodyStyle?: Array<string>;
};

export default function Card(props: CardProps): React.ReactElement {
  const { title, bottom, children, bodyStyle = [] } = props;

  const cardClass = useCallback(() => {
    return bodyStyle.join(' ');
  }, []);
  return (
    <div
      id="card_box"
      className={'bg-white rounded-md shadow-md overflow-hidden ' + cardClass}
    >
      {title}
      {children}
      {bottom}
    </div>
  );
}
