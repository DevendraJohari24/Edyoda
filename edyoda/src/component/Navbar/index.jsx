import "./Navbar.css";
import logoImage from "../../assets/images/LOGO.png";
import {RiArrowDropDownLine} from "react-icons/ri";
import {AiOutlineSearch} from "react-icons/ai";

export default function Navbar() {
  return (
    <nav>
        {/* Left container */}
            <div className='nav-left'>
              {/* Logo */}
                <div className='logo'>
                  <img src={logoImage} alt="Logo" />
                </div>
                {/* Courses */}
                <div className='nav-item'>
                  <p>Courses</p>
                  <RiArrowDropDownLine className="nav-icon" />
                </div>
                {/* Programs */}
                <div className='nav-item'>
                    <p>Programs</p>
                    <RiArrowDropDownLine className="nav-icon" />
                </div>
            </div>
            {/* Right Container */}
            <div className='nav-right'>
              {/* Icon */}
              <div className='nav-item'>
                <AiOutlineSearch className="nav-icon" />
              </div>
              {/* LogIn */}
              <div className='nav-item'>
              Log in
              </div>
              {/* Primary Button */}
              <div className='nav-item'>
                <button className="nav-button">Join Now</button>
              </div>
            </div>
    </nav>
  )
}
