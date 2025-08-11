import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react"; // icon

const sections = [
  { id: "#me", label: "About" },
  { id: "#project", label: "Projects" },
  { id: "#exp", label: "Experiences" },
  { id: "#skill", label: "Skills" },
  { id: "#education", label: "Educations" },
];

const SCROLL_DURATION = 300; // ms ต้องตรงกับ AnimatePresence duration

const ScrollNav = () => {
  const [activeSection, setActiveSection] = useState("#me");
  const [hoverSection, setHoverSection] = useState(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleScrollToId = (id) => {
    const el = document.querySelector(id);
    if (!el) return;

    if (window.innerWidth < 640) {
      // mobile → ปิดเมนูก่อน
      setOpen(false);
      setTimeout(() => {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }, SCROLL_DURATION);
    } else {
      // desktop → scroll ได้เลย
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => {
      const el = document.querySelector(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={menuRef}>
      {/* ปุ่ม Hamburger */}
      <div className="sm:hidden">
        <Button variant="ghost" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile menu with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: SCROLL_DURATION / 1000 }}
            className="flex flex-col sm:hidden overflow-hidden"
          >
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <div
                  key={sec.id}
                  className="relative"
                >
                  <Button
                    variant="hash"
                    onClick={() => handleScrollToId(sec.id)}
                    className="relative text-white w-full justify-start"
                  >
                    {sec.label}
                  </Button>
                  {(hoverSection === sec.id || isActive) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-500"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop menu */}
      <div className="hidden sm:flex sm:flex-row sm:space-x-6 relative">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <div
              key={sec.id}
              className="relative"
              onMouseEnter={() => setHoverSection(sec.id)}
              onMouseLeave={() => setHoverSection(null)}
            >
              <Button
                variant="hash"
                onClick={() => handleScrollToId(sec.id)}
                className="relative text-white"
              >
                {sec.label}
              </Button>
              {(hoverSection === sec.id || isActive) && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-500"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollNav;
