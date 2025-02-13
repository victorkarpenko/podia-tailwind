import { ReactNode } from "react";

const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className='text-lg text-gray-600 mb-3'>
    {children}
  </p>
);

export default Paragraph;