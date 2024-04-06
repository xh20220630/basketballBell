import { APP_Config } from '@/config';
import React from 'react';

type LogoProps = {
  width?: string | number;
  height?: string | number;
  src?: string;
  className?: string;
};

export const Logo: React.FC<LogoProps> = (props) => {
  const {
    width = '100%',
    height = '100%',
    src = APP_Config.AppLogo,
    className,
  } = props;
  return (
    <div className=" flex justify-center items-center">
      <img
        src={src}
        className={className}
        style={{
          width: width,
          height: height,
        }}
      />
    </div>
  );
};
