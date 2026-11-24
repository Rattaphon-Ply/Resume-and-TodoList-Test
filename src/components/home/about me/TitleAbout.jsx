import { useRef } from "react";

const TitleAbout = () => {
  const containerRef = useRef(null);

  return (
    <div className="w-full">
      <div className="relative pr-6 max-w-3xl space-y-4 lg:pr-10">
        {/* เส้นสีด้านซ้าย */}
        <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-full" />

        <div className="pl-6 pr-6 space-y-4">
          <div ref={containerRef} style={{ position: "relative" }}>
            <div className="pl-8 text-base lg:text-lg leading-relaxed text-muted-foreground text-white">
              <p>
                สวัสดีครับ ผม รัตพล ศิริพันธ์ บัณฑิตสาขาวิทยาการคอมพิวเตอร์
                (เกียรตินิยมอันดับ 2 เกรดเฉลี่ย 3.57)
                ที่มีทักษะการพัฒนาเว็บแอปพลิเคชันแบบ Full-Stack (React, Next.js,
                Node.js, TypeScript) รวมถึงมีประสบการณ์ฝึกงานด้าน Software
                Testing (Cypress)
              </p>

              <p className="mt-5">
                ปัจจุบันกำลังมองหางานประจำในตำแหน่ง Full-Stack Developer หรือ
                Software Developer โดยมุ่งเน้นการพัฒนาซอฟต์แวร์ที่มีคุณภาพ
                โค้ดสะอาด ดูแลรักษาง่าย และพร้อมเรียนรู้เทคโนโลยีใหม่ๆ
                เพื่อร่วมสร้างผลงานไปกับทีมครับ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TitleAbout;
