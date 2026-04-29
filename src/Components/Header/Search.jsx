import { useState,useEffect, use } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate,Link, useLocation } from "react-router-dom";
import axios from "axios";
const Search = () => {
    const navigate=useNavigate();
    const [search,setSearch]=useState('');
    const [suggestion,setSuggestion]=useState([]);
    const location=useLocation();

    const handleSearch=(item)=>{
item.preventDefault();
if(search.trim())
{navigate(`/e-commerce/search?query=${encodeURIComponent(search.trim())}`)}
setSuggestion([])
    }
    useEffect(()=>{
const getData=async()=>{
    if(!search.trim())
    {setSuggestion([]) 
        return;
    }
    try {
const response=await axios.get(`https://dummyjson.com/products/search?q=${search}`)
setSuggestion(response.data.products.slice(0,5) || []);
    } catch (error) {
       console.log(error) 
    }
}

const time=setTimeout(()=>{
    getData();

},300);
return()=>clearTimeout(time);
    },[search])
    useEffect(()=>{
// eslint-disable-next-line react-hooks/set-state-in-effect
setSuggestion([])
setSearch('')
return;
    },[location])
  return (
   <div className="search-box">
    <form onSubmit={handleSearch} className='search'>
            <input autoComplete="off" name="search" type="search" placeholder='Search For Products'onChange={(e)=>setSearch(e.target.value)} />
            <button><IoIosSearch/></button>
        </form>
        {suggestion.length > 0 && (<ul className="suggestion">
            {suggestion.map((item,index)=>(
              <div onClick={()=>navigate(`/e-commerce/product/${item.id}`)} key={index}>
                <li >
<img src={item.images[0]} alt='' />
<h2>{item.title}</h2>
                </li>
              </div>
            ))}
        </ul>)}
   </div>
        
    )
}

export default Search