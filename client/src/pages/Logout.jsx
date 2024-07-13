import { Link } from "react-router-dom/cjs/react-router-dom.min"
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
const Logout = () => {
  
  

    
  return (
    <Container>
      <MsgText>  LOGGED OUT</MsgText> 
      <Link to="/login">
      <Button>LOGIN</Button>
      </Link>
    </Container>
    
  )
}

export default Logout;