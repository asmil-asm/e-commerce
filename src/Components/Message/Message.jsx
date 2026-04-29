import React from 'react'
import {useNavigate } from 'react-router-dom';
import './Message.css'
import { Usedata } from '../../Context/Context';
const Message = ({title}) => {
    const navigate = useNavigate();
    const{Scroll_top}=Usedata();
    
    return (
        <div className='message'>
            <div className="text">
                <p>{title}</p>
                <button onClick={() => {Scroll_top() 
                  navigate('/cart')}}>View Cart</button>
            </div>
        </div>
    )
}
export default Message