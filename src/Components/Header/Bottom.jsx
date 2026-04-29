import { BsList } from "react-icons/bs";
import { MdPersonAddAlt1 } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import axios from "axios";
import { Link, NavLink,useLocation } from "react-router-dom";
import { Usedata } from "../../Context/Context";


const Bottom= () => {
    const location=useLocation();
  
    const links=[
        {title:'Home', link:'/e-commerce'},
{title:'About', link:'e-commerce/about'},
{title:'Blog', link:'e-commerce/blog'},
 {title:'Contact', link:'e-commerce/contact'}



    ]
    const {Scroll_top,category,setCategory}=Usedata();
    
    const [listMobile,setListMobile]=useState(false)
    const [menu,setMenu]=useState(false);
    useEffect(()=>{
        const API=async()=>{
try {
    const response=await axios.get('https://dummyjson.com/products/categories')
    setCategory(response.data)
} catch (error) {
    console.log(error);
   setCategory([])
    
}
        }
        API()
    },[])
    useEffect(()=>{
        setMenu(false)
        setListMobile(false)
    },[location])
    
    const handelCategories=()=>{
setMenu(!menu)
    }
    const handelList=()=>{
        setListMobile(!listMobile)
    }

  return (
 <div className="bottom">
   <nav >
    <BsList/>
<div className="select-categories">
    <div className={`categories ${menu?'active':''}`} >
    {category.map((category,index)=>(
<Link   key={index} className="categroy" to={`/e-commerce/category/${category.slug}`}><div >{category.name}
</div>   
</Link> 
))}
</div>
</div>
<div  onClick={handelCategories} className="list">
    <p >Browse Category</p>

<FaAngleDown className="icon"/>
</div>
   </nav>
   <div className="links">
  {links.map((link,index)=>(
        <Link onClick={()=>Scroll_top()}  key={index} to={link.link}>{link.title}</Link>
  ))}
  </div>
  {/* Mobile Links */}
<div className="links-mobile">
    

   <div className={`list-mobile ${listMobile?'active':''}`}>
     {links.map((link,index)=>(
        <Link onClick={()=>Scroll_top()} key={index} to={link.link}>{link.title}</Link>
  ))}
   <div className="login-Mobile">
   
      <MdPersonAddAlt1 className="icon"/>
      <CiLogin className="icon"/>
   
 
   
   
  </div>
  
</div>
<div onClick={handelList} className="icon-Mobile"><RxDropdownMenu/></div>
   </div>
   <div className="login">

     <MdPersonAddAlt1 className="icon"/>
      <CiLogin className="icon"/>
   
   </div>
   
 </div>
  )
}

export default Bottom