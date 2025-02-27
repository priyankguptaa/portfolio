import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './About.css'

function About() {
  return (
    <div className='about_div'>
      <Container className="container-div">
        <h3 className="main-heading">ABOUT ME</h3>
          <Row>
            <Col lg="6" className='about_left'>
              <p>Web developer, creating beautiful and user-friendly web experiences with several years of experience in the industry, I have worked on a wide range of projects, including responsive web design  and performance optimization. My goal is to leverage my skills and knowledge to contribute to innovative projects and help businesses achieve their digital goals.</p>
              <p>
              Designed and developed different website with functionality using Reactjs ,react-router-dom,
              Node.js, Express , MongoDB, npm packages and many more.
              </p>
              <p>
                Designed and developed over 50 websites and landing pages in the past 20 months using
              coding languages such as HTML, CSS, JavaScript, jQuery, Bootstrap, and Chart.js. Projects
              included e-commerce platforms, single and multi-vendor sites, hotel booking systems, stock
              market analysis tools, news websites, and tourism portals and many more
              </p>
              <p><span>Awards:</span> Employee of the month for October 2023 in a company of around 200 employees.
                Position appraisal in month of November 2023.
              </p>
              <p><span>Certifications:</span> Web development and node.js course from udemy and Innovation Design.</p>
            </Col>
            <Col lg="6" className='about_right'>
              <img src="../../temp/IMG_3208.jpeg" alt="" />
            </Col>
            <Col lg="6">
            <img src="../../temp/skills_img.avif" alt="" />
            </Col>
            <Col lg="6">
            <h3 className="main-heading">SKILLS</h3>
            <p><span>Frontend Languages : </span>Reactjs, Redux Toolkit, Javascript, J-Query, HTML, CSS, Bootstrap</p>
            <p><span>Backend Languages : </span>Node.js, Express.jsp</p>
            <p><span>Database :  </span>MongoDB, MongoDB Aggregation Pipelines</p>
            <p><span>Api’s: </span>RESTful API, Postman</p>
            <p><span>Miscellaneous: </span>GitHub,Vs code, winSCP, Filezilla, Chart.js, Figma ,Canva</p>
            <p><span>Soft Skills:  </span>Team player, Bias for action, Deliver results</p>
            </Col>
          </Row>
      </Container>
    </div>
  )
}

export default About
