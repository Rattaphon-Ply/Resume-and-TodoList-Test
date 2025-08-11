
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { Outlet } from "react-router"
import { useModalStore } from "@/store/modalStore";
import Particles from "@/components/home/backgrounds/Particles";

const Layout = () => {
  const { isModalOpen, setModalOpen } = useModalStore();

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <main className="relative z-10">
        <Navbar />
        
        <Outlet context={{ isOpen: isModalOpen, setIsOpen: setModalOpen }} />
        
        <Footer />
      </main>
    </div>
  )
}
export default Layout