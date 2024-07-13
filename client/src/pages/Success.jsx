import { useDispatch } from "react-redux"
import { clearCart } from "../redux/apiCalls";
import {  useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min"
import styled from "styled-components"

const Container=styled.div`
 height: 850px;
 flex-direction:column ;
 background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpapercave.com/wp/gQSAMah.jpg")
      center;
 
  display: flex;
  align-items: center;
  justify-content: center;
  

`
const MsgText=styled.h1`
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  
`
const Button=styled.button`
  width:130px;
  height:40px;
  
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  color:white;
  cursor:pointer;
  border: none;
`
const Success = () => {
  
  
  const dispatch=useDispatch();
  const history =useHistory();
    const location=useLocation()
    console.log(location)
    const handleClick=(e) => {
      e.preventDefault()
    clearCart(dispatch);
    history.push("/")

    }
  return (
    <Container>
      <MsgText>   PAYMENT  SUCCESSFULL</MsgText> 
      
      <Button onClick={handleClick}>Home</Button>
      
    </Container>
    
  )
}

export default Success;
