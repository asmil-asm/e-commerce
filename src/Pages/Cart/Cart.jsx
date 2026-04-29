import './Cart.css'
import {Usedata} from '../../Context/Context'
import { MdDelete } from "react-icons/md";
import PageTransition from '../../Components/PageTransition/PageTransition';
const Cart = () => {
    const {cartItem,setCartItem}=Usedata();
    console.log(cartItem);
    const total=cartItem.reduce((num,item)=>num + (item.price * item.quantity || item.price)  ,0)
    const deleteProduct=(id)=>{
        setCartItem(prevItem=> prevItem.filter((item)=>item.id != id))
      }
    const incressItem = (id) => {
  setCartItem(prevItem =>
    prevItem.map(item =>
      item.id === id 
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    )
  );
};
   const decressItem = (id) => {
  setCartItem(prevItem =>
    prevItem.map(item =>
      item.id === id && item.quantity>1
        ? { ...item, quantity: (item.quantity || 1) - 1 }
        : item
    )
  );
};
  return (
    <PageTransition>
      <div className='cart'>
        <div className='order'>
            <h2>Order Summary</h2>
<div className='items'>
{cartItem.length ===0 ?( <p className='empty'>Your Cart is empty.

</p>
):
(cartItem.map((item)=>(

    <div className='item'>
<div className="data"> 
            <img src={item.images[0]} alt="not found" />
            <div className="text">
                <h3>{item.title}</h3>
                <p className='price'>${item.price * item.quantity || item.price}</p>
                <div className="amount">
                    <button onClick={()=>decressItem(item.id)}>-</button>
                    <span>{item.quantity||1}</span>
                <button onClick={()=>incressItem(item.id)}>+</button>
                </div>
            </div>
</div>  
    <MdDelete onClick={()=>deleteProduct(item.id)} className='delete'/>
        
    </div>

    
)))
}

</div>
<div className="check">
        <div className="total">
            <p>Total:</p>
            <span>{total.toFixed(2)}</span>
        </div>
        <button>Place Order</button>
    </div>
        </div>
    </div>
    </PageTransition>
  )
}

export default Cart