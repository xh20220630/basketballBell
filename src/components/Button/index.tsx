import React from 'react';
enum ButtonType {
  //文字类型
  'text',
  //按钮类型
  'button',
  //link
  'link',
  //填充类型
  'fill',
}
interface ButtonProps {
  type?: ButtonType;
  children?: React.ReactElement | string;
  className?: string[];
  onClick?: () => void;
}

const ButtonClassMap = {
  [ButtonType.text]:
    'p-2 text-textBtnColor hover:bg-textBtnHoverColor hover:text-textBtnHoverColor rounded-md cursor-pointer',
  [ButtonType.button]:
    'p-2 text-textBtnColor hover:bg-textBtnHoverColor hover:text-textBtnHoverColor rounded-md cursor-pointer',
  [ButtonType.link]:
    'p-2 text-textBtnColor hover:bg-textBtnHoverColor hover:text-textBtnHoverColor rounded-md cursor-pointer',
  [ButtonType.fill]:
    'p-2 text-textBtnColor hover:bg-textBtnHoverColor hover:text-textBtnHoverColor rounded-md cursor-pointer',
};

//合成button的class类
const synthesisButtonClass: (
  type: ButtonType | undefined,
  className: string[] | undefined,
) => string = (type = ButtonType['text'], className = []) => {
  return ButtonClassMap[type] + ' ' + className.join(' ');
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, className, onClick } = props;
  return (
    <div onClick={onClick} className={synthesisButtonClass(type, className)}>
      {children}
    </div>
  );
};

export default Button;
