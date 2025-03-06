import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import {Cards} from '../index'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

function Project() {
  return (  
    <div>
      <Container className="container-div">
        <h3 className="main-heading">PROJECTS</h3>
        <Row>
          <Col lg={4}>
            <Link to ='/project_1'>
              <Cards
                videoSource = "../files/counter.mp4"
                title="card one"
                decription = "this is card one"
                />
          </Link>
          </Col>
          <Col lg={4}>
            <Link to ='/project_2'>
              <Cards
                videoSource = "../files/password.mp4"
                title="card two"
                decription = "this is card two"
                />
          </Link>
          </Col>
          <Col lg={4}>
            <Link to ='/github'>
              <Cards
                videoSource = "../files/github.mp4"
                title="card two"
                decription = "this is card two"
              />
            </Link>
          </Col>
          <Col lg={4}>
            <Link to ='/project_4'>
              <Cards
                title="card one"
                decription = "this is card one"
                // videoSource = "../files/counter.mp4"
                />
            </Link>
          </Col>
        </Row>     
      </Container>
    </div>
  )
}

export default Project
