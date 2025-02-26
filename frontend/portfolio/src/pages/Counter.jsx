import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function Counter() {
 const[counter,setCounter] = useState(10)

 const Add_value = ()=>{
    if(counter === 20){
        setCounter(20)
    } else
    setCounter(counter+1)
 }
 const subtract_value = ()=>{
    if(counter === 0){
        setCounter(0)
    }else
    setCounter(counter-1)
 }

  return (
    <div>
        <Container>
            <Row>
                <Col lg="6">
                    <h3>Counter Project</h3>
                    <button onClick={Add_value}>Add Value</button>
                    <div>{counter}</div>
                    <button onClick ={subtract_value}>Subtract Value</button>
                </Col>
                <Col lg="6">
                    counter project
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Counter
