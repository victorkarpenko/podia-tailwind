import { navigationItems } from "./helpers";
import NavigationItem from "../NavigationItem/NavigationItem";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="bg-white border-b border-grey-100 fixed w-full left-0 top-0 z-[3]">
      <div className="container flex h-[50px] justify-between items-center">
        <div className="flex items-center">
          <div className="mr-[32px]">
            <Logo />
          </div>
          {
            navigationItems.map(item => <NavigationItem key={item.label} {...item} />)
          }
        </div>
      </div>
    </header>
  )
}

export default Header;