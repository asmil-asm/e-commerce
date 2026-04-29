import logo from '../../assets/img/logo.jpg'
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { Usedata } from '../../Context/Context';
import Search from './Search';
const Top = () => {
  const {cartItem,favorites,Scroll_top}=Usedata()
  return (
    <div className='top'>
        <div>
           <Link onClick={Scroll_top} to='/'> <img src={logo} alt="not found" /></Link>
        </div>
    <Search/>
        <div className="icons">
        <Link onClick={Scroll_top} to={'/favorites'}>
        <div className='icon'><CiHeart />
        <span >{favorites.length}</span>
        </div>
        </Link>
          <Link onClick={Scroll_top} to={'/cart'}>
            <div className='icon'><SlBasket />
            <span >{cartItem.length}</span></div>
          </Link>
        </div>
    </div>
  )
}

export default Top