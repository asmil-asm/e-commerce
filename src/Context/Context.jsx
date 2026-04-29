import { createContext, useContext,useState,useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
     const [products,setProducts]=useState([]);// All products
      const [loading,setLoading]=useState(true); // loading
        const [Item,setItem]=useState();
            const [category,setCategory]=useState([]) // api Categories
      const [cartItem,setCartItem]=useState(()=>{   // add to cart
        const storedCart=localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
      });
              const [filter,setFilter]=useState([])  // filter category by api

    const [favorites,setFavorites]=useState(()=>{
    const favoritesItem= localStorage.getItem('favorites');
    
    return favoritesItem ? JSON.parse(favoritesItem):[]

    }
       ) // add to favorites
     
       const categories=[
      "smartphones",
      "tablets",
        "laptops",
          "mobile-accessories",
            "mens-watches",
  "womens-watches",
    "womens-bags",
    "sunglasses",
  "fragrances",
  "home-decoration",
  "sports-accessories",

]
// get localStorge
   useEffect(()=>{
localStorage.setItem("cart",JSON.stringify(cartItem || []));
localStorage.setItem("favorites",JSON.stringify(favorites || []))

 },[cartItem,favorites])
  
 // function scroll top
 const Scroll_top=()=>{
   window.scrollTo(0,0)
  }
   

  return <DataContext.Provider value={{filter,setFilter,category,setCategory,Scroll_top,favorites,setFavorites,Item,setItem,cartItem,setCartItem,loading,setLoading,products,setProducts,categories}}>{children}</DataContext.Provider>;
};
export const Usedata = () => {
  return useContext(DataContext);
};