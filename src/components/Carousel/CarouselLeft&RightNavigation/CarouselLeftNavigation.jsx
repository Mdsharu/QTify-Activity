import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { useSwiper, useSwiperSlide } from 'swiper/react';
import styles from "./CarouselLeftNavigation.module.css";


const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBegining, setIsBegining] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsBegining(swiper.isBeginning);
        })
    }, []);

  return (
    <div className={styles.leftNavigation}>
        {!isBegining && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation;
