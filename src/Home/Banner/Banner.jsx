import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../Banner/Banner.css';
import img1 from  '../../assets/1000_F_212211876_YgnZO2Hf3lSVJsTnUYaXYOMQRaze8tGX.jpg';
import img2 from '../../assets/1000_F_227046174_gjMrotdFLk6KzH3EK1h3HATuScLbntGK.jpg';
import img3 from '../../assets/1000_F_445629548_LVQxB74qKx0bAEZGRK0k1JzfayperKh8.jpg';

const Banner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div className="mySwiper mt-2 mb-2">
            <Swiper pagination={pagination}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img1} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                        
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img2} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
    
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img3} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;