import Logo from "./Logo"
import ScrollNav from "./ScrollNav"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 py-4
       text-white bg-black/20 backdrop-blur-md border-b border-white/10">
            <Logo />
             <div className="">
              <ScrollNav />
            </div>
        </div>
    </nav>
  )
}
export default Navbar