import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link, NavLink } from "react-router-dom";
import Logo from "../logo/logo";

function Footer(){
    return(
        <>
            <footer>
                <Container>
                    <div className="upper_ftr">
                            <Row>
                                <Col lg="4" className="upper_ftr_left">
                                    <div>
                                        <h2 className="ftr_h2">LET'S COLLABORATE</h2>
                                        <p>A Focused Web Developer building the Websites that <br/>leads to the success of the overall product</p>    
                                    </div>
                                    <h6><b>Gmail : </b>priyankgupta60214@gmail.com</h6>
                                </Col>   
                                <Col lg="4">
                                    <Logo/>
                                </Col>   
                                <Col lg="4" className="download_cv">
                                    <Link className="download_link" to="../../files/resume.pdf" target="_blank" download>DOWNLOAD CV</Link>
                                    <div>
                                        <Link target="_blank" to="https://github.com/priyankguptaa">Github</Link>
                                        <Link target="_blank" to="https://www.linkedin.com/in/priyank-gupta-6490a31bb/">Linkedin</Link>
                                    </div>
                                </Col>   
                            </Row>
                    </div>
                    <div className="lower_ftr">
                        <p>Copyright {(new Date().getFullYear())}.Made by Priyank Gupta </p>
                    </div>
                </Container>                
            </footer>
        </>
    )
}

export default Footer