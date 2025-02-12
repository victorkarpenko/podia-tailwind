import Link from "next/link";

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
    return (<span className="mx-3">{label}</span>)
  }

  if (href) {
    return <Link href={href} className="mx-3">{label}</Link>
  }

  return null;
}

export default NavigationItem;