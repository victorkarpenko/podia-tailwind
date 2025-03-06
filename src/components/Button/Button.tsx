import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = 'primary' | 'light' | 'text';
interface Props {
  variant?: ButtonVariant;
  type?: HTMLButtonElement['type'];
  children: ReactNode;
  width?: CSSProperties['width'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const getVariantClasses = (variant: ButtonVariant): string => {
  const classnames = [
    'inline-flex', 
    'items-center', 
    'font-semibold', 
    'py-3', 
    'px-7', 
    'rounded-full', 
    'transition-all', 
    'duration-300',
  ];

  switch (variant) {
    case 'light': {
      classnames.push('bg-secondaryBrand', 'hover:bg-mainBrand', 'text-white');
      break;
    }
    case 'text': {
      classnames.push('bg-transparent', 'text-mainBrand', 'hover:text-darkBrand', 'px-0');
      break;
    }
    default: {
      classnames.push('bg-mainBrand', 'hover:bg-darkBrand', 'text-white');
      break;
    }
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
      className={twMerge(
        getVariantClasses(variant),
        `w-[${width}]`,
      )}
    >
      {children}
    </button>
  );
};

export default Button;