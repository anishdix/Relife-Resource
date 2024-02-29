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




const ProductList = () => {
  const location=useLocation();
  const cat=location.pathname.split("/")[2]
  const[filters,setFilters]=useState({})
  const[sort,setSort]=useState("newest")
  
  
  const handleFilters=(e)=>{
   const value=e.target.value
     setFilters({
      ...filters,
      [e.target.name]:value,
     });

     };


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>

      <FilterContainer>
            <Filter>
            
            <Select name="category"onChange={handleFilters}>
                
                
            </Select>
            

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



      
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;


//17.08-3.12.07








