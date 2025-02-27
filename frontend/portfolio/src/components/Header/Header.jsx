import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../logo/logo";
import Search from "../Search/Search";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


function Header(){
return(
    <>
     <header>
        <Container>
          <nav>
          <Row>
            <Col lg="2" md="3" className="header_logo">
            <Logo/>
            </Col>
            <Col lg="3">
            <Search/>
            </Col>
            <Col lg="7">
            <ul>
                <li>
                  <Link to="/" className=''>
                    HOME
                  </Link>
                </li>
                <li>
                <Link to="/about" className=''>
                    ABOUT 
                  </Link>
                  
                </li>
                <li>
                  <Link to="/project" className=''>
                    PROJECTS
                  </Link>
                </li>
               
                <li>
                <Link to="/github" className=''>
                    GITHUB
                  </Link>
                </li>
                <li>  
                  <Link to="/contact" className=''>
                    GET IN TOUCH
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
            </Col>        
          </Row>
          </nav>          
        </Container>
      </header>          
    </>
)}

export default Header