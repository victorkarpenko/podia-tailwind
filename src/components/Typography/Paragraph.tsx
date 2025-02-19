import { ReactNode } from "react";

interface Props {
  color?: string;
  children: ReactNode;
}
const Paragraph = (props: Props) => {
  const {
    children,
    color = 'gray-600',
  } = props;

  return (
    <p className={`text-lg text-${color} mb-3 leading-[2rem]`}>
      {children}
    </p>
  );
};

export default Paragraph;