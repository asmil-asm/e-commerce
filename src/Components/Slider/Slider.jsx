import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectCoverflow, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { IoIosShareAlt } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link} from 'react-router-dom';
import {Usedata } from '../../Context/Context';
import { GrValidate } from "react-icons/gr";
import toast from 'react-hot-toast';
import  Message from '../Message/Message'
const Slider = () => {
   const {products,categories,cartItem,setCartItem,favorites,setFavorites,Scroll_top}=Usedata();
const addToCart=(item)=>{
    
  
    setCartItem(prevCart=>
   
    [...prevCart,{...item , quantity:1}]
  )
   toast.success(
    <Message title={'Added To Cart'}/>,
    { duration: 4000 }
  )
  
}


const addToFavorites=(item)=>{
    setFavorites(prevItem=>[...prevItem,item])
    toast.success(
    <Message title={'Added To Favorites'}/>,
    { duration: 4000 }
  )
}
return(
categories.map((category, index)=>(
<div key={index} className='slider'>
<div className="products">
<div className="text">
        <h2>{category.replace('-',' ')}</h2>
<p>Discover the Best {category.replace('-',' ')}</p>
</div>
<div className='categories'>
<Swiper
modules={[Navigation,Autoplay,EffectCoverflow]}
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
            navigation

slidesPerView={'auto'}
        spaceBetween={50}>
    {(products[category] || []).map((item)=>
   { 
    const isIncart=cartItem.some((i)=>i.id===item.id)
    const isInFavorites=favorites.some((i)=>i.id===item.id)
  return  (
      
<SwiperSlide key={item.id} className={`product ${isIncart?'inCart':''}`}>
    {isIncart && (
        <div className="added">
            <GrValidate className='icon'/>
            <span>In Cart</span>
        </div>
    )}
<Link onClick={Scroll_top} to={`product/${item.id}`} >
<div className="data">
    <img src={item.images[0]} alt="not found" />
    <h3>{item.title}</h3>
    <div className="stars">
        {Array.from({length:item.rating
}).map((_,i)=>(<FaStar key={i}/>))}
    </div>
    <div className="price">${item.
price
}</div>
</div>
</Link>
<div className="add-product">
<SlBasket 
    className={`icon ${isIncart ? 'isAdded' : ''}`} 
    onClick={() => addToCart(item)} 
/>    <CiHeart className={`icon ${isInFavorites? 'isAdded':''}`} onClick={()=>addToFavorites(item)} />
    <IoIosShareAlt className='icon' />
</div>

    </SwiperSlide>
    )})}
      
</Swiper>
</div>
</div>
</div>
)))}

export default Slider