import { NavigationItem } from "../NavigationItem/NavigationItem";

export const navigationItems: NavigationItem[] = [
  {
    label: 'Features',
    children: [{
      label: 'Feature 1',
      href: '/feature/1',
    },
    {
      label: 'Feature 2',
      href: '/feature/2',
    }],
  },
  {
    label: 'Examples',
    href: '/examples',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Demo',
    href: '/demo',
  }
];