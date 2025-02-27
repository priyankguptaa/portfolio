import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function Counter() {
 const[counter,setCounter] = useState(10)
 const[counterSecond,setCounterSecond] = useState(12)

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
//  counterSecond
const subtract_value_2 =()=>{
    setCounterSecond(prevCounter => prevCounter -1)
    setCounterSecond(prevCounter => prevCounter -1)
    setCounterSecond(prevCounter => prevCounter -1)
    setCounterSecond(prevCounter => prevCounter -1)
} 
const Add_value_2 =()=>{
    setCounterSecond((prevCounter) => prevCounter + 1 )
    setCounterSecond((prevCounter) => prevCounter + 1 )
    setCounterSecond((prevCounter) => prevCounter + 1 )
    setCounterSecond((prevCounter) => prevCounter + 1 )
} 


  return (
    <div className='counter_div'>
        <Container>
            <Row>
                <Col lg="6" className='left_counter'>
                    <h3>Counter Project</h3>
                    <div className='counter-btn'>
                        <button onClick ={subtract_value}>Subtract </button>
                        <div className='counter_value'>{counter}</div>
                        <button onClick={Add_value}>Add </button>
                    </div>
                </Col>
                <Col lg="6">
                <h3>Counter Project</h3>
                    <div className='counter-btn'>
                        <button onClick ={subtract_value_2}>Subtract </button>
                        <div className='counter_value'>{counterSecond}</div>
                        <button onClick={Add_value_2}>Add </button>
                    </div>
                    <p>value changes by four, concept of previous state in react</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Counter
