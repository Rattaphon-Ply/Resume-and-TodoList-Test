import Contact from "./Contact"


const Footer = () => {
  return (
    <footer className="relative text-white dark:text-black">
      <div className="absolute left-0 w-full overflow-hidden bg-[#2C3E50]">

        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-[#000]"></path>
        </svg>

        <div className="grid lg:grid cols-4 md:grid-cols-2 grid-cols-1 p-20">
          <div className="flex flex-col gap-5">
            <Contact />
          </div>
        </div>

      </div>
    </footer>
  )
}
export default Footer