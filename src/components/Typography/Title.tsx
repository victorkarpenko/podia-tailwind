import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => (
  <h1 className='lg:text-5xl text-3xl font-semibold lg:leading-[1.3] mb-3'>
    {children}
  </h1>
);

export default Title;