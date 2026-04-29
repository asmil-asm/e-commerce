
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Products from './Pages/Products/Products'
import Cart from './Pages/Cart/Cart'
import Favorites from './Pages/Favorites/Favorites'
import { Toaster } from 'react-hot-toast'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'
import {AnimatePresence} from "framer-motion"
import Categories from './Pages/Categories/Categories'
import Searching from './Pages/Searching/Searching'


function App() {
return (
    <div className='main'>
    <Header/>
    <Toaster  position="bottom-right" 
     toastOptions={{
      style:{
        background:'#eee',
        borderRadius:'8px',
        padding:'15px',

      }
     }} />
     <AnimatePresence mode='wait'>
    <Routes>
<Route path='/' element={<Home/>} />
<Route path="/product/:id" element={<Products />} />
<Route path="/cart" element={<Cart/>}/>
<Route path="/favorites" element={<Favorites/>}/>
<Route path='/about' element={<About/>} />
<Route path='/blog' element={<Blog/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/category/:category' element={<Categories/>} />
<Route path="/search" element={<Searching />} />
    </Routes>
    </AnimatePresence>
 <Footer/>
    </div>
  )
}

export default App
