

import { Add,  Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import {  useSelector } from "react-redux";
import {  useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react";
import {userRequest}from"../requestMethods"
 import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addOrder, clearCart } from "../redux/apiCalls";

const KEY=process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;



const TopTexts = styled.div`
 display: flex;
  align-items:center ;
  justify-content: center;
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
 
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 2;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;





const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 2;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
margin-top:10px
`;

const SummaryItemPrice = styled.span``;



const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const Input = styled.input`
  width: 200px;
  height:30px;
  padding-left:10px;
  
`;

const Order = () => {
 
    const CurrDate = new Date().toLocaleDateString();
    
    
const cart=useSelector(state=>state.cart);
const userId=useSelector(state=>state.user.currentUser._id)
const[stripeToken,setStripeToken]=useState(null);
const history =useHistory();
const[username,setUsername]=useState("");

const dispatch=useDispatch();
const amount=useSelector(state=>state.cart.total);
console.log(userId)




const onToken=(token)=>{
  setStripeToken(token);
   
};

 
useEffect(()=>{
  const makeRequest=async()=>{
    try{
      const res=await userRequest.post("/checkout/payment",{
        tokenId:stripeToken.id,
        amount:cart.total,
      });
      history.push("/success",{data:res.data});
      console.log(res)

      

      

    }catch{}
  };
   stripeToken && makeRequest();
},[stripeToken,cart.total,history]);


const handleClick=(e)=>{
  e.preventDefault()
  clearCart(dispatch);
}
const handleButtonClick=(e)=>{
  e.preventDefault()
  addOrder(dispatch,{username,amount,userId});
}
return (
  <Container>
    <Navbar />
    <Announcement />
    <Wrapper>
      <Title>Order Details</Title>
      <Top>
        
        <TopTexts>
          <TopText onClick={handleClick}>clear</TopText>
          
        </TopTexts>
      </Top>
      <Bottom>
        <Info>
          
          {cart.products.map((product)=>(
          <Product key={product._id}>
            <ProductDetail>
              <Image src={product.img}/>
              <Details>
                <ProductName>
                  <b>Product:</b> {product.title}
                </ProductName>
                <ProductId >
                  <b>ID:</b> {product._id}
                </ProductId>
                
                
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>{product.quantity}</ProductAmount>
                <Remove />
              </ProductAmountContainer>
              <ProductPrice>
                {product.price*product.quantity}
                </ProductPrice>
            </PriceDetail>
          </Product> ))}
          <Hr />
          
        </Info>
        <Summary>
          <SummaryTitle>ORDER DETAILS</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>UserName</SummaryItemText>
            <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}></Input>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Payment Date</SummaryItemText>
            <SummaryItemPrice> {CurrDate}</SummaryItemPrice>
          </SummaryItem>
          
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>{cart.total}₹</SummaryItemPrice>
          </SummaryItem>
          <StripeCheckout
          name="Relife Resources"
          image="https://static.tumblr.com/38326fc3641aa6ea8785f5cf219355a3/4jhnxeu/lRimzwx7x/tumblr_static_fbprofile_relife.png"
          billingAddress
          shippingAddress
          description={`your total is ${cart.total}rs`}
          amount={cart.total*1.21}
          token={onToken}
          stripeKey={KEY}>
            
            <Button onClick={handleButtonClick}>PAYMENT</Button>
            </StripeCheckout>
            
        </Summary>
      </Bottom>
    </Wrapper>
    <Footer />
  </Container>
);
};
export default Order
