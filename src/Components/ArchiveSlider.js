import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './../Style/ArchiveSlider.css';

import archive1 from './../Images/1.jpeg';
import archive2 from './../Images/2.jpeg';
import archive3 from './../Images/3.jpeg';
import archive4 from './../Images/4.jpeg';
import archive5 from './../Images/5.jpeg';
import archive6 from './../Images/6.jpeg';
import archive7 from './../Images/7.jpeg';
import archive8 from './../Images/8.jpeg';
import archive9 from './../Images/9.jpeg';
import archive10 from './../Images/10.jpeg';
import archive11 from './../Images/11.jpeg';

const ArchiveSlider = () => {
  const archiveImages = [
    archive1,
    archive2,
    archive3,
    archive4,
    archive5,
    archive6,
    archive7,
    archive8,
    archive9,
    archive10,
    archive11,
  ];

  return (
    <Swiper modules={[Navigation]} navigation spaceBetween={50} slidesPerView={1}>
      {archiveImages.map(image => (
        <SwiperSlide key={image}>
          <img src={image} alt={'archive' + image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ArchiveSlider;
