import VariableProximity from "@/components/text-animate/VariableProximity";
import { useRef } from 'react';


const TitleAbout = () => {
    const containerRef = useRef(null);

  return (
    <div className="w-full">
      <div className="relative pr-6 max-w-3xl space-y-4 lg:pr-10">
        {/* เส้นสีด้านซ้าย */}
        <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-full" />

        <div className="pl-6 pr-6 space-y-4">

            <div
                ref={containerRef}
                style={{position: 'relative'}}
            >
                <VariableProximity
                    label={'สวัสดีครับ ผมเป็นนักศึกษาจบใหม่ เกรดเฉลี่ย 3.57 กำลังมองหางานประจำในตำแหน่งนักพัฒนา (Developer) โดยมีเป้าหมายระยะยาวในการพัฒนาตนเองสู่การเป็น Full-Stack Developer ผมเป็นคนมีความรับผิดชอบ อดทน สามารถทำงานภายใต้ความกดดันได้ดี และพร้อมเปิดรับการเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ'}
                    className={'variable-proximity-demo leading-relaxed text-base lg:text-lg text-muted-foreground pl-8 text-white'}
                    fromFontVariationSettings="'wght' 300"
                    toFontVariationSettings="'wght' 900"
                    containerRef={containerRef}
                    radius={100}
                    falloff='linear'
                />
            </div>
        </div>
      </div>

    </div>
    
  );
};
export default TitleAbout;
