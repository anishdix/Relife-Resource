import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useEffect,useState } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { publicRequest } from "../requestMethods";
import { clearCart } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { mobile } from "../responsive";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
max-width: 1000px;
max-height: 600px;
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}

`;

const InfoContainer = styled.div`
  flex:1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 60px;
  display: flex;
`;

const Desc = styled.p`
display: flex;

  margin: 30px 10px;
  font-weight: 400;
  font-size: large;
`;

const Price = styled.span`
  padding-left: 15px;
  margin-top:10px ;
  font-weight: 400;
  font-size: 40px;
`;



const AddContainer = styled.div`
  height: 35%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;


const Button = styled.button`
  padding: 15px 20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 8px;

  &:hover{
      background-color: #edc2c2;
  }
`;


const Product = () => {
  const location=useLocation();
  const id=location.pathname.split("/")[2];
  const [product,setProduct]=useState({});
  const [quantity,setQuantity]=useState(1);
  const dispatch=useDispatch();
  const history =useHistory();
  
  
  
  useEffect(()=> {
    const getProduct=async()=>{
      try{

        const res = await publicRequest.get("/products/find/"+id)
        setProduct(res.data);
      }catch(err){}
    };
    getProduct();
  },[id]);


  const handleClickClear=(e)=>{
    e.preventDefault()
    clearCart(dispatch);
  }


  const handleQuantity= (type) =>{
  if((type==="des"&& quantity>1)){
    setQuantity(quantity -1);}

  if((type==="inc")){
    setQuantity(quantity + 1);

  }
  };

 const handleClick=()=>{
    dispatch(addProduct({...product,quantity}));
    history.push("/cart")
    console.log(product)
  };
  

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
          {product.desc}
          </Desc>
          <Price>₹{product.price}</Price>
         
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQuantity("des")} />
              <Amount>{quantity}</Amount>
              
              <Add onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClickClear}>Clear Cart</Button>
            <Button onClick={handleClick}>
              ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;



