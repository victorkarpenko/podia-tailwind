import { CSSProperties, MouseEventHandler, ReactNode } from "react";

type ButtonVariant = 'primary' | 'light'
interface Props {
  variant?: ButtonVariant;
  type?: HTMLButtonElement['type'];
  children: ReactNode;
  width?: CSSProperties['width'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const getVariantClasses = (variant: ButtonVariant): string => {
  const classnames = ['font-semibold', 'py-3', 'px-7', 'rounded-full', 'transition-bg', 'duration-300'];

  if(variant === 'light') {
    classnames.push('bg-secondaryBrand', 'hover:bg-mainBrand', 'text-white')
  } else {
    classnames.push('bg-mainBrand', 'hover:bg-darkBrand', 'text-white')
  }

  return classnames.join(' ');
}

const Button = (props: Props) => {
  const {
    variant = 'primary',
    type = 'button',
    children,
    width = 'auto',
    onClick,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${getVariantClasses(variant)} w-[${width}]`}
    >
      {children}
    </button>
  );
};

export default Button;