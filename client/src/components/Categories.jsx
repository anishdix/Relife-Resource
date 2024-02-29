import styled from "styled-components";
import { categories } from "../data";

import CategoryItem from "./CategoryItem";

const Container = styled.div`
  flex-direction:left;
padding: 10px;
align-items: center;
justify-content:center ; 
padding : 20px;  
  

`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
