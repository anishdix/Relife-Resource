import styled from "styled-components";

import {Link}from "react-router-dom";

const Container = styled.div`
display: flex;
height: 70vh;
margin-bottom:10px;
position: relative;
padding-bottom: 25px;

`;



const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
flex-direction: column;
align-items: center;
`;



const BuyButton = styled.button`
display: flex;
width: 150px;
border:none;
padding: 10px;
align-items: center;
justify-content: center;
background-color:#e9dcdc;
color: #292424;
cursor:pointer;
font-weight: 600;
`;
const SellButton = styled.button`
display: flex;
width: 150px;
border:none;
padding: 10px;
align-items: center;
justify-content: center;
background-color:#e9dcdc;
color: #292424;
cursor:pointer;
font-weight: 600;
margin-top: 10px;


`


const Image = styled.img`
  width: 1450px;
  height: 600px;
  object-fit: cover;
  
  padding: 10px 5px;
  margin-bottom: 10px;
  padding-left: 20px ;
  

`;
const Title = styled.h1`
   font-size: 60px;
font-weight: 600;
color: #ffffff;
margin-bottom: 10px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
      <Link to ={`/products/${item.cat}`}>
        <BuyButton>BUY NOW</BuyButton>
      </Link>
      <Link to="/newproduct">
          <SellButton>SELL NOW</SellButton>
          </Link>
        
      </Info>
    
    </Container>
  );
};

export default CategoryItem;
