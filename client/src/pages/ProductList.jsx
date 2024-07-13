import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
    
`

const Filter=styled.div`
margin: 20px;
font-size: 24px;
    
`
const FilterText=styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;

    
`
const Select=styled.select`



`
const Option=styled.option`

`
const Text=styled.span`
font-weight: 700;
  
`




const ProductList = () => {
  const location=useLocation();
  const cat=location.pathname.split("/")[2]
  // const[filters,setFilters]=useState({})
  const[sort,setSort]=useState("newest")
  
  
  


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>

      <FilterContainer>
            <Filter>
              All available <Text>{cat}</Text>  products
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
            <Select onChange={(e)=>setSort(e.target.value)}>
                <Option value="newest">
                    NEWEST
                </Option>
                <Option value="asc">PRICE(asc)</Option>
                <Option value="desc">PRICE(desc)</Option>
            </Select>
           

            </Filter>

        </FilterContainer>



      
      <Products cat={cat} filters={{}} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;


//17.08-3.12.07








