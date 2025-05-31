import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {

    const { pathname } = useLocation();
    
    useEffect(() => {
    // ทุกครั้งที่ path เปลี่ยน ให้ scroll ขึ้นบนสุด
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default ScrollToTop