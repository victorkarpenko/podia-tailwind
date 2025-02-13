import Link from "next/link";
import Dropdown from "../Dropdown/Dropdown";

export interface NavigationItem {
  label: string;
  children?: NavigationItem[];
  href?: string;
}

const NavigationItem = (props: NavigationItem) => {
  const {
    label,
    children,
    href
  } = props;

  if (children) {
    return <Dropdown label={label} items={children} />;
  }

  if (href) {
    return <Link href={href} className="py-2 mx-3 hover:text-mainBrand">{label}</Link>
  }

  return null;
}

export default NavigationItem;