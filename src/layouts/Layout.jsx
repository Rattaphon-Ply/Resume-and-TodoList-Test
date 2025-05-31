
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { Outlet } from "react-router"
import { useModalStore } from "@/store/modalStore";

const Layout = () => {
  const { isModalOpen, setModalOpen } = useModalStore();

  return (
    <main className="">
        <Navbar />
        
        <Outlet context={{ isOpen: isModalOpen, setIsOpen: setModalOpen }} />
        
        <Footer />
    </main>
  )
}
export default Layout