import './Products.css'
import { useParams } from 'react-router-dom'
import { Usedata } from '../../Context/Context';
import {  useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { TbShare3 } from "react-icons/tb";
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import toast from 'react-hot-toast';
import Message from '../../Components/Message/Message'
import PageTransition from '../../Components/PageTransition/PageTransition';
const Products = () => {
  const {id}=useParams();
  const {loading,setLoading, setFavorites,favorites,cartItem,setCartItem,Item,setItem}=Usedata();
    useEffect(()=>{
const getProduct=async()=>{
try {
    const response= await axios.get(`https://dummyjson.com/products/${id}`);
    setItem(response.data);
} catch (error) {
  console.log(error);
} finally{
  setLoading(false)
}
}
getProduct();
    },[id])
   
   
const isIncart=cartItem.some((i)=> i.id === Item?.id)
    const isInFavorites=favorites.some((i)=>i.id===Item?.id)

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
  <PageTransition>
     {loading?(<Loading/>):(<div className={`product ${isIncart ?'':''}`}>
 <div className="info">
   <img id='main-image' src={Item?.images[0]} alt={Item?.title} />
<div className="text">
  <h3>{Item?.title}</h3>
  <div className="star">
  {Array.from({length:Item?.rating}).map(()=>(<FaStar/>))}

  </div>
<h2>${Item?.price}</h2>
  <p>Availability : <mark>{Item?.availabilityStatus}</mark></p>
  <p>Brand : <mark>{Item?.brand}</mark></p>
  <p>{Item?.description}</p>
  <span>{Item?.shippingInformation}</span>
  
<div className="btns">
  <button className={`${isIncart?'isAdded':''}`} onClick={()=>addToCart(Item)
    
  }>{`${isIncart?'Item in Cart':'Add to Cart'}`} <SlBasket/> </button>
<button className={`${isInFavorites?'isAdded':''}`}onClick={()=>addToFavorites(Item)}><CiHeart/></button>
<button><TbShare3/></button>
</div>
</div>
 </div>
 <div className="images">
  {Item?.images.map((image,index)=>(
<img id={index} key={index} src={image} alt={`${Item?.title} ${index}`} 
onClick={()=>document.getElementById('main-image').src=image} />
  ))}
 </div>
    </div>)}
   
    
  </PageTransition>
)
  
}

export default Products;