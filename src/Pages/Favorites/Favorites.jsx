import { Usedata } from "../../Context/Context"
import './Favorites.css'
import { Link,useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { TbShare3 } from "react-icons/tb";
import PageTransition from "../../Components/PageTransition/PageTransition";
import Message from "../../Components/Message/Message";
import toast from "react-hot-toast";
import { GrValidate } from "react-icons/gr";

const Favorites = () => {
    const navigate=useNavigate();
    const {favorites,setFavorites,setCartItem,cartItem}=Usedata();
 const addToCart=(item)=>{
    
  
    setCartItem(prevCart=>
   
    [...prevCart,{...item , quantity:1}]
  )
   toast.success(
    <Message title={'Added To Cart'}/>,
    { duration: 4000 }
  )
  
}


    const removeFavorite=(id)=>{
setFavorites(prevItem=>prevItem.filter((item)=>item.id !=id))
    }
  return (
    <PageTransition>
        <div className="favorites">
<h2>Your Favorites</h2>
<div className="items">
    {favorites.length === 0 ?( <p className='empty'>Your Cart is empty.

</p>):(
    favorites.map((item,index)=>
     { 
            const isIncart=cartItem.some((i)=>i.id===item.id)
            const isInFavorites=favorites.some((i)=>i.id===item.id)
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
    <div className="price">${item.
price
}</div>
</div>
</div>
<div className="add-product">
<SlBasket 
    className={`icon ${isIncart ? 'isAdded' : ''}`} 
    onClick={() => addToCart(item)} 
/>     <CiHeart onClick={()=>removeFavorite(item.id)} className={`icon ${isInFavorites? 'removeFavorite':''}`}/>
    <TbShare3 className='icon' />
</div>
       </div> 
    )})
)}
</div>
    </div>
    </PageTransition>
  )
}

export default Favorites