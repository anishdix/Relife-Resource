import styled from "styled-components";

import { useEffect, useRef, useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpapercave.com/wp/gQSAMah.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  


`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  visibility: 0.5;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color:green;
    cursor:not-allowed;

  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error=styled.span`
  color:red;
`;

const Login = () => {

  const userRef=useRef()

  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[message,setMessage]=useState("")
  const dispatch=useDispatch();
  const history =useNavigate();

  useEffect(()=>{
    userRef.current.focus()
  },[]);


  useEffect(()=>{
    setMessage("")
    
  },[username,password]);

 
  const handleSubmit=async(e)=>{
    e.preventDefault()  
    try{
      await login(dispatch,{password,username})
      
      history("/")

    }catch(err)
    {
      console.log(err,"error")
     
      setMessage("...Wrong username or password")
    
   
    }
     

     
    
    
  }
  const handleCreate=(e)=>{
    history("/register");

  }


  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          
          <Input placeholder="username" ref={userRef}
          onChange={(e)=>setUsername(e.target.value)} required/>

          <Input placeholder="password"   
          type="password"       
           onChange={(e)=>setPassword(e.target.value)} required/>

          <Button  type="submit" 
          >
            LOGIN</Button>
            {message && <Error >{message}</Error>}

          
          
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link onClick={(e)=>{handleCreate()}}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
