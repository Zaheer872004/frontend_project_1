import SearchBar from "./SearchBar"
import { useState } from "react"
import { logo_url } from "../utils/JsonData";
import { Link } from "react-router-dom";
import Home from "./Home";

const Header = () => {

  const [btnName, setbtnName] = useState("Login");



    let btnChangeName =  () => {
      btnName === "Login" ? (setbtnName("Logout")) : (setbtnName("Login"));             
    }
   

    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src={logo_url} alt="logo"/>
        </div>
        <div className='search-container'>
          {/* < SearchBar /> */}
        </div>
        <div className='nav-items'>
          <ul >
            <Link to= "/home"> <li className="menu-item">Home</li></Link>
            <Link to= "/about">
            <li className="menu-item">About-Us</li>
            </Link>
            <Link to= "/contact"><li className="menu-item">Contact-Us </li></Link>
            <Link to= "/cart"><li className="menu-item">Cart</li></Link>
            <Link><li className="menu-item" onClick={ btnChangeName} 
            >
              {btnName}</li></Link>
          </ul>
        </div>
  
          
      </div>
    )
  }
  
  export default Header