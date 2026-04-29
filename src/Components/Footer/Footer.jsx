import './Footer.css'
import { Link } from 'react-router-dom';
import { Usedata } from '../../Context/Context';
const Footer=()=> {
  const {Scroll_top}=Usedata()
  const links_pages=[
    {title:'Home',link:'/e-commerce'},
    {title:'About',link:'e-commerce/about'},
    {title:'Blog',link:'e-commerce/blog'},
    {title:'Contact',link:'e-commerce/contact'}
  ]
  const links_help=[
    {title:"Help Center",link:'/e-commerce'},
        {title:"Returns",link:'/e-commerce'},
       {title:"Shipping",link:'/e-commerce'},
       {title:"FAQs",link:'/e-commerce'}


  ]
  return (
    <footer>
      <div className="info">
        {/* Brand */}
        <div className='title'>
          <h2>ORDAR.NET</h2>
          <p>
            Your one-stop e-commerce platform for quality products and seamless shopping experience.
          </p>
        </div>

        {/* Links */}
        <div className='links'>
          <h3>Quick Links</h3>
          <ul>
   {links_pages.map((item,index)=>(
   <li key={index}><Link onClick={Scroll_top} to={item.link} >{item.title}</Link></li>
   ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div className='links'>
          <h3 >Customer Service</h3>
          <ul>
         {links_help.map((item,index)=>(
          <li key={index}><Link onClick={Scroll_top} to={item.link}>{item.title}</Link></li>
         ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className='message'>
          <h3>Stay Updated</h3>
          <p>Subscribe to get latest offers</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
            />
            <button>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <div className="data">
          <p>© {new Date().getFullYear()} ORDAR.NET. All rights reserved.</p>
          <div className="links">
            <a href="#" >Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer