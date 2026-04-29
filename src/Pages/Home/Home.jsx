import Hero from "../../Components/Hero/Hero"
import './Home.css'
import Slider from "../../Components/Slider/Slider"
import { useEffect} from "react"
import { FiLoader } from "react-icons/fi";
import axios from "axios";
import { Usedata } from "../../Context/Context";
import Loading from "../../Components/Loading/Loading";
import PageTransition from "../../Components/PageTransition/PageTransition";
const Home = () => {
 const {setProducts,categories,loading,setLoading}=Usedata();
 useEffect(()=>{
const getProducts=async()=>{
  try {
    const result=await Promise.all(
      categories.map(async(category)=>{
const response=await axios.get(`https://dummyjson.com/products/category/${category}`)
return {[category]:response.data.products}
      })
    )
    const productsAll=Object.assign({},...result);
    setProducts(productsAll)
  } catch (error) {
    console.log(error);
    
  }
  finally{
    setLoading(false)
  }
}
getProducts();
 },[])


  return (
    <PageTransition>
      <div className="home">
<Hero/>
{loading?(<Loading/>):
<Slider/>

}
    </div>
    </PageTransition>
  )
}

export default Home