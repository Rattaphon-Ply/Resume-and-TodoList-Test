import ThemeToggle from "../darkmode/ThemeToggle"
import DropdownListMenu from "./DropdownListMenu"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav>
      
        <div className="flex flex-col items-center px-6
        py-4 justify-between sm:flex-row gap-4
      bg-[#2C3E50] dark:bg-[#2C3E50] text-black dark:text-white transition-colors duration-300">
            <Logo />
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <DropdownListMenu />
            </div>
            
        </div>
        
    </nav>
  )
}
export default Navbar