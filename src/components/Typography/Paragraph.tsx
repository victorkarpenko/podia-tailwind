import { ReactNode } from "react";

interface Props {
  color?: string;
  children: ReactNode;
}
const Paragraph = (props: Props) => {
  const {
    children,
  } = props;

  return (
    <p className={`text-lg text-gray-600 mb-3 leading-[2rem]`}>
      {children}
    </p>
  );
};

export default Paragraph;