import { navigationItems } from "./helpers";
import NavigationItem from "../NavigationItem/NavigationItem";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="bgc-white border-b border-grey-100">
      <div className="container mx-auto flex h-[50px] justify-between items-center">
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