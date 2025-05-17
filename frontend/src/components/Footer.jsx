
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import '../public/static/Footer.css'

import { FaFacebook,FaTwitter,FaLinkedin,FaInstagram} from "react-icons/fa";
export default function Footer() {
const d = new Date();
let year = d.getFullYear();
  return (
    <div className=' footer bg-success mt-0 pt-0'>
      <div className='row'>
          <div className="col-6">
            <div className="maize-heading">
                <img  src={logo} alt='logo' />
                <h1>Maize-Medic</h1>
            </div>
            <div className="maize-heading1">
               <p>Maize disease detection uses machine learning to identify
               diseases like leaf blight and gray leaf spot from leaf images. 
               Early detection allows farmers to take quick action, reducing 
               crop losses and promoting healthier yields. These
               technologies are essential for sustainable                agriculture.</p>
            </div>
            
          </div>
          <div className="col-3 categories">
          <h1>Categories</h1>
          <h2><Link className='link' to='/'>Home</Link></h2>
          <h2>  <Link  className='link'to='about'>About us</Link></h2>
          <h2> <Link className='link' to='how-it-works'>How it Works</Link></h2>
          <h2> <Link className='link'>Contact us </Link></h2>
          </div>
          <div className="col-3 contact-us">
            <h1>Contact us</h1>
            <form action="/contact-us">
            <input type="email" placeholder='Email' />
            <input type='text' placeholder='Message'/>
            <input type="submit" />
            </form>
          </div>
      </div>
      <div className='row allrights reserver'>
           <div className="col-8 ms-4 mb-4">
            <h1>Copyright© {year} All rights reserved by maizeMedic </h1>
           </div>
           <div className="col-3">
  <div className="follow-us">
    <h2>Follow us at</h2>
    <div className="social-links">
      <Link to='#' className="social-icon"><FaFacebook /></Link>
      <Link to='#' className="social-icon"><FaTwitter /></Link>
      <Link to='#' className="social-icon"><FaLinkedin /></Link>
      <Link to='#' className="social-icon"><FaInstagram /></Link>
    </div>
  </div>
</div>
      </div>

    </div>
  )
}
