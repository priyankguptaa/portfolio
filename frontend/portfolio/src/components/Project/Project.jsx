import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'

function Project() {
  return (  
    <div>
      <Container className="container-div">
        <h3 className="main-heading">PROJECTS</h3>
        <Link to ='/project_1'>project1</Link>
        <Link to ='/project_2'>project2</Link>
        <Link to ='/github'>project3(Api Handling)</Link>
        <Link to ='/project_4'>project4</Link>
      </Container>
    </div>
  )
}

export default Project
