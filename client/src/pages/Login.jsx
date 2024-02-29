import styled from "styled-components";

import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


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
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const dispatch=useDispatch();
  const history =useHistory();

  const {error}=useSelector((state)=>state.user)
console.log(error)
  const handleClick=(e)=>{
    e.preventDefault()   //used to stop refreshing the page
    login(dispatch,{username,password})
    
    
  }
  const handleCreate=(e)=>{
    history.push("/");

  }


  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          
          <Input placeholder="username" 
          onChange={(e)=>setUsername(e.target.value)}/>

          <Input placeholder="password"   
          type="password"       
           onChange={(e)=>setPassword(e.target.value)}/>

          <Button onClick={handleClick} 
          >
            LOGIN</Button>
            {error && <Error>...Wrong Username or Password</Error>}

          
          
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link onClick={handleCreate}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
