import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Link}from "react-router-dom";
import { logOut } from "../redux/apiCalls";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const Container = styled.div`
  height: 60px;
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  
`;

const Center = styled.div`
  cursor: pointer;
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
`;



const Navbar = () => {
  const user=useSelector((state)=>state.user.currentUser);
  const quantity =useSelector(state=>state.cart.quantity)
  
  
  const dispatch=useDispatch();
   const history =useHistory();
  
  const handleClick=(e)=>{
    e.preventDefault()
    logOut(dispatch);
    history.push("/logout");
  };
  const handleLogo=()=>{
    history.push("/")
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
        <Link to ="/">
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
