import  { useEffect, useState } from 'react'
import { useLocation,Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Usedata } from '../../Context/Context'
import Loading from '../../Components/Loading/Loading'
import toast from 'react-hot-toast'
import Message from '../../Components/Message/Message'
import { FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { TbShare3 } from "react-icons/tb";
import PageTransition from '../../Components/PageTransition/PageTransition'
import './Searching.css'
import { GrValidate } from "react-icons/gr";
const Searching = () => {
    const [result,setResult]=useState([]);
    const navigate=useNavigate();
const {loading,setLoading,cartItem,setCartItem,setFavorites,favorites}=Usedata();
    const query=new URLSearchParams(useLocation().search).get("query")
useEffect(()=>{
    const getSearch=async()=>{
        try {
const response=await axios.get(`https://dummyjson.com/products/search?q=${query}`)
setResult(response.data.products || [])
        } catch (error) {
            console.log(error);
            
        }
        finally{
            setLoading(false)
        }
    }
getSearch();
},[query])  
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
  return (
 <PageTransition>

<div className="searching">
  
    {loading?<Loading/>:<div className="items">
        {result.map((item,index)=>
     { 
        const isIncart=cartItem.some((i)=> i.id === item.id)
    const isInFavorites=favorites.some((i)=> i.id === item.id)
       return (

       <div className="item" key={index}>
<div onClick={()=>navigate(`/e-commerce/product/${item.id}`)} >
<div className='inCart'>
   {isIncart && (
        <div className="added">
            <GrValidate className='icon'/>
            <span>In Cart</span>
        </div>
    )}
</div>
<div className="data">
    <img src={item.images[0]} alt="not found" />
    <h3>{item.title}</h3>
    <div className="stars">
        {Array.from({length:item.rating
}).map((_,i)=>(<FaStar key={i}/>))}
    </div>
    <div className="price">${item.price
}</div>
</div>
</div>
<div className="add-product">
    
  <SlBasket className={`icon ${isIncart ? 'isAdded' : ''}`} onClick={() => addToCart(item)} />
<CiHeart className={`icon ${isInFavorites ? 'isAdded' : ''}`} onClick={() => addToFavorites(item)} />
    <TbShare3 className='icon' />
</div>
       </div> 

    )})}
    </div>}

</div>
       </PageTransition>
       )
  
}

export default Searching