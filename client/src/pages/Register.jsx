import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { addUser,logOut } from "../redux/apiCalls";
import { useDispatch ,} from "react-redux";
import { useState } from "react";
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
  width: 40%;
  padding: 20px;
  
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  
  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const dispatch=useDispatch();
  const history =useHistory();
  

  const handleClick=(e)=>{
    e.preventDefault()   //used to stop refreshing the page
    addUser(dispatch,{username,email,password})
    // login(dispatch,{username,password})
    logOut(dispatch);
    history.push("/login");
  }

  
  return (




    
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input name="username" type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="username" />
          <Input name="email" type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
          

          <Input name="password" type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="password" />
          
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <Button onClick={handleClick} >
          
            
            CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
