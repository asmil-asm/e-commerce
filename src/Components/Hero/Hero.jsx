
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay,EffectCoverflow} from 'swiper/modules';
import Hero1 from '../../assets/img/banner_Hero1.jpg'
import Hero2 from '../../assets/img/banner_Hero2.jpg'
import Hero3 from '../../assets/img/banner_Hero3.jpg'
import 'swiper/css/pagination';
import 'swiper/css';
import './Hero.css'
const Hero = () => {
  return (
    <section className='hero'>
<Swiper className="hero-banner"
modules={[Pagination,Autoplay,EffectCoverflow]}
 coverflowEffect={{
        rotate: 50,      
        stretch: 0,           
        depth: 100,           
        modifier: 1,         
        slideShadows: true    
      }}
      autoplay={{ delay: 3000 }}
        grabCursor={true} 
      loop={true}
slidesPerView={1}
  pagination={{ clickable: true }}
        spaceBetween={50}

  >
<SwiperSlide className='banner'>
    <div className="text">
        <h4>Introducing the new</h4>
        <p>Explore the best products</p>
        <button>Shop Now</button>
    </div>
    <img src={Hero1} alt="" />
</SwiperSlide>
<SwiperSlide className='banner'>
<div className="text">
        <h4>Introducing the new</h4>
        <p>Explore the best products</p>
        <button>Shop Now</button>
    </div> 
       <img src={Hero2} alt="" />
</SwiperSlide>
<SwiperSlide className='banner'>
<div className="text">
        <h4>Introducing the new</h4>
        <p>Explore the best products</p>
        <button>Shop Now</button>
    </div>
        <img src={Hero3} alt="" />
</SwiperSlide>

</Swiper>
    </section>
  )
}

export default Hero