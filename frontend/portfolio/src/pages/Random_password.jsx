import { useEffect, useState, useRef, useCallback } from 'react'
import Container from 'react-bootstrap/esm/Container'

function Random_password() {
  const [length, setLength] = useState('8')
  const [number, setNumber] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFIGKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(charAllowed) str+= "!@#$%^&*()"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, number, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 51);
        window.navigator.clipboard.writeText(password)
      },[password])

  useEffect(() => {
    passwordGenerator()
  },[length, number, charAllowed,passwordGenerator])
  
  return (
    <div>
        <Container className="container-div">
          <h3 className="main-heading">Random password Generator</h3>
          <div className='main_pass_generator'>
            <div className='input_div'>
              <input type="text" 
                value={password}
                placeholder='password'
                readOnly
                ref={passwordRef}
              />
              <button onClick={copyPasswordToClipboard}>Copy</button>
            </div>
            <div className='sub_pass_generator_div'>
              <div className='sub_pass_input'>
                <input type="range" 
                min={6}
                max={50}
                value={length}
                onChange={(e)=>{setLength(e.target.value)}}
                />
                  <label>Length:{length}</label>
              </div>
              <div className='sub_pass_input'>
                <input type="checkbox"
                className='checkbox' 
                  id='numberInput'
                  defaultChecked={number}
                  onChange={(e)=>{setNumber((prev)=>!prev)}}
                />
                <label htmlFor='numberInput'>Number</label>
              </div>
              <div className='sub_pass_input'>
                <input type="checkbox" 
                className='checkbox'
                id="charInput" 
                defaultChecked={charAllowed}
                onChange={(e)=>{setCharAllowed((prev)=>!prev)}}
                />
                <label htmlFor="charInput">Special Character</label>
              </div>   
            </div>  
            <p>In this project i become familier with useEffect, useState, useRef, useCallback and copy to clipboard functionality.</p>           
          </div>        
        </Container>
    </div>
  )
}

export default Random_password
