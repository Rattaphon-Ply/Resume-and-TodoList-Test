import Me from '@/images/MePic.png';
import { GlowEffect } from '../motion-primitives/glow-effect'; 

const PictureMe = () => {
  return (
  <div className="relative w-fit">
    <div className="absolute inset-0 z-0">
      <GlowEffect
        colors={[
          "#00FFC6", // Teal neon (เปล่งใน dark, สดใน light)
          "#3B82F6", // Tailwind Blue-500 (เบสเย็น มาตรฐาน)
          "#6366F1", // Indigo (ดูมีมิติ สีไม่จืด)
          "#A855F7", // Purple-500 (ให้ความ soft ที่ไม่แสบ)
          "#F472B6", // Pink-400 (เพิ่ม warmth เล็กน้อย)
        ]}
        mode='rotate'
        blur='strong'
        duration={15}
        
      />
    </div>
    <img
      src={Me}
      className="w-48 object-cover rounded-xl shadow-lg transition duration-300 hover:scale-105 relative z-10"
    />
    {/* <div className="absolute inset-0 rounded-xl pointer-events-none animate-glow-ring z-0"></div> */}
  </div>
  )
}
export default PictureMe