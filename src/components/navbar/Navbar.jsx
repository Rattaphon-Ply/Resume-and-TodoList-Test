import ThemeToggle from "../darkmode/ThemeToggle"
import DropdownListMenu from "./DropdownListMenu"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav>
      
        <div className="flex flex-col items-center px-6
        py-4 justify-between sm:flex-row gap-4
      bg-[rgb(61,214,255)] dark:bg-[hsl(200,100%,50%)] text-black dark:text-white transition-colors duration-300">
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