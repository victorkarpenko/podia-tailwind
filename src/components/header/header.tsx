import { navigationItems } from "./helpers";
import NavigationItem from "../NavigationItem/NavigationItem";

const Header = () => {
  return (
    <header className="bgc-white border-b border-grey-100">
      <div className="container mx-auto flex h-[50px] justify-center items-center">
        <div className="flex">
          {
            navigationItems.map(item => <NavigationItem key={item.label} {...item} />)
          }
        </div>
      </div>
    </header>
  )
}

export default Header;