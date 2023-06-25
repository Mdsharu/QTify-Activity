import React, { useEffect } from 'react';
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useSwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import CarouselLeftNavigation from "./CarouselLeft&RightNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselLeft&RightNavigation/CarouselRightNavigation";


const Controls = ({data}) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    }, [data]);
}

const Carousel = ({data, component}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper style={{padding: "0px 20px"}} initialSlide={0} modules={[Navigation]} slidesPerView={"auto"} spaceBetween={40} allowTouchMove>
            <Controls data={data}/>
            <CarouselLeftNavigation />
            <CarouselRightNavigation />
            {data.map(item => {
                return (
                    <SwiperSlide>{component(item)}</SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  );
};

export default Carousel;
