import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate}from "react-router-dom";
import { logOut } from "../redux/apiCalls";

import { mobile } from "../responsive";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}

  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft:"15px"})}

`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "40px" })}
  
`;


const Center = styled.div`
  cursor: pointer;
  flex: 1;
  text-align: center;
  ${mobile({ paddingLeft: "40px" })}

`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "16px" })}
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;



const Navbar = () => {
  const user=useSelector((state)=>state.user.currentUser);
  const quantity =useSelector(state=>state.cart.quantity)
  
  
  const dispatch=useDispatch();
   const history =useNavigate();
  
  const handleClick=(e)=>{
    e.preventDefault()
    logOut(dispatch);
    history("/logout");
  };
  const handleLogo=()=>{
    history("/")
  }

  return (
    <Container>
     <Wrapper> 
        <Left>
            <Language>EN</Language>
        
        <SearchContainer>
            <Input placeholder='search'/>
            <Search style={{color:"gray",fontSize:16}}/>
        </SearchContainer>
        </Left>
        <Center onClick={handleLogo}>
          <Logo>RELIFE RESOURCES</Logo>
        </Center>
        <Right>
          
        {!user?
        <>
        <Link to ="/register">
          <MenuItem >Register</MenuItem>
          </Link>
          
          <Link to ="/login">
          <MenuItem>SignIn</MenuItem>
          </Link> 
        </>
        :<MenuItem onClick={handleClick}>LogOut</MenuItem>}
          
          
          
          
          <Link to ="/cart">
          <MenuItem>
          <Badge badgeContent={quantity} color="primary">
          
      <ShoppingCartOutlined color="action" />
    </Badge>
          </MenuItem>
          </Link>

        </Right>
        
     </Wrapper>
    </Container>
  )
}

export default Navbar;
