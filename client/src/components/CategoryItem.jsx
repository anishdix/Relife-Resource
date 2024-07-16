import styled from "styled-components";
import { mobile } from "../responsive";

import {Link}from "react-router-dom";

const Container = styled.div`
display: flex;
margin-bottom:10px;
position: relative;

z-index: 0;

`;



const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
flex-direction: column;
align-items: center;
z-index: 1;
text-align: center;


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
  width: 95vw;
  height: 70vh;
  object-fit: cover;
  padding: 5px;
  margin-bottom: 10px;
  

`;
const Title = styled.h1`
font-size: 60px;
font-weight: 600;
color: #ffffff;
margin-bottom: 10px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
${mobile({ fontSize: "45px" })}


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
