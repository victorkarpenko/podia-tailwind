import { ReactNode } from "react";

const Subtitle = ({ children }: { children: ReactNode }) => (
  <h2 className='uppercase text-gray-400 text-xs font-semibold mb-3'>
    {children}
  </h2>
);

export default Subtitle;