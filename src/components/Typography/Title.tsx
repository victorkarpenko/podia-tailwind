import { CSSProperties, ReactNode } from "react";
import { twMerge, twJoin } from 'tailwind-merge';

type Variant = 'h1' | 'h2' | 'h3';

interface Props {
  children: ReactNode;
  variant?: Variant;
  color?: string;
  textAlign?: CSSProperties['textAlign'];
}

const Title = (props: Props) => {
  const {
    variant = 'h1',
    children,
    color,
    textAlign,
  } = props;

  const defaultClasses = twJoin(
    'font-semibold mb-3',
    color && `text-${color}`,
    textAlign && `text-${textAlign}`,
  );

  if (variant === 'h2') {
    return (
      <h2 className={twMerge(defaultClasses, "lg:text-3xl text-xl")}>
        {children}
      </h2>
    )
  }

  if (variant === 'h3') {
    return (
      <h3 className={twMerge(defaultClasses, "lg:text-2xl text-xl")}>
        {children}
      </h3>
    )
  }

  return (
    <h1 className={twMerge(defaultClasses, 'lg:text-5xl text-3xl lg:leading-[1.3]')}>
      {children}
    </h1>
  )
};

export default Title;