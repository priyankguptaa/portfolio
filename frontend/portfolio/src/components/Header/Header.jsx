import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header(){
return(
    <>
     <header>
          <nav>
            <ul>
            <li>
                <Link to="/" className=''>
                  HOME
                </Link>
              </li>
              <li>
              <Link to="/about" className=''>
                  ABOUT US
                </Link>
                
              </li>
              <li>
              <Link to="/github" className=''>
                  GITHUB
                </Link>
                
              </li>
              {/* <li>
                <NavLink to="/" className={ ({isActive}) => `${isActive ? "text-color-red": "text-color-grey" }`}>
                    HOME
                </NavLink>
                <NavLink to="/about" className={ ({isActive}) => `${isActive ? "text-color-red": "text-color-grey" }`}>
                    ABOUT US
                </NavLink>
              </li> */}
            </ul>
          </nav>
      </header>
    </>
)}

export default Header