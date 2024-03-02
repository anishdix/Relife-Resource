import styled from "styled-components";
//import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect ,useState} from "react";
import axios from "axios";
import { Box } from "@mui/system";
import {CircularProgress} from "@mui/material";



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  console.log(cat,filters,sort)
  const [products,setProducts]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts,setFilteredProducts]=useState([]);

 
  


  useEffect(()=>{
    const getProducts=async()=>{
      setIsLoading(true);
      try{
        const res=await axios.get(cat ? `https://relife-resource.onrender.com/api/products?category=${cat}`
        :"https://relife-resource.onrender.com/api/products");
      setProducts(res.data)
      
      }catch(err){
        console.error(err)
      }
      setIsLoading(false);
    };getProducts();
  },[cat]);


  useEffect(()=>{
    cat && 
    setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key,value])=>
      item[key].includes(value),
      
      ) 
      )
    );

  },[products,cat,filters])

  useEffect(()=>
{
  if((sort==="newest")){
    setFilteredProducts((prev)=>
      [...prev].sort((a,b)=>a.createdAt-b.createdAt)
      );
  }
  if((sort==="asc")){
    setFilteredProducts((prev)=>
      [...prev].sort((a,b)=>a.price-b.price)
      );
  }
  else{
    setFilteredProducts((prev)=>
      [...prev].sort((a,b)=>b.price-a.price)
      );
  }
},[sort])
  





  return (
    <Container>
      
      {isLoading ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{margin:"auto"}}
          py={10}
        >
          <CircularProgress size={30} />
          <h4> Loading Products... </h4>
        </Box>
      ):

      cat
      ? filteredProducts.map((item) => 
        <Product item={item} key={item._id}  />)
      : products
      .map((item)=> <Product item={item} key={item._id} />)}
        
        
      
      
    </Container>
  );
};

export default Products;
