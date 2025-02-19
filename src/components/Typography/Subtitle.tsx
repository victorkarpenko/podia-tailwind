import { ReactNode } from "react";

const Subtitle = ({ children }: { children: ReactNode }) => (
  <h4 className='uppercase text-gray-400 text-xs font-semibold mb-3'>
    {children}
  </h4>
);

export default Subtitle;