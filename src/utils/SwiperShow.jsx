import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules  
import { Navigation, Pagination } from 'swiper/modules';

const SwiperShow = ({children}) =>{
    return (
        <div>
            <Swiper 
                navigation={true} 
                pagination={{
                    type: 'fraction',
                }}
                modules={[Navigation, Pagination]}
                slidesPerView={1} // แสดงทีละ 1 slide
                spaceBetween={30}
                className="w-full max-w-2xl mx-auto text-blue-200"    
            >
                {children}
            </Swiper>
        </div>
    )
}

export default SwiperShow