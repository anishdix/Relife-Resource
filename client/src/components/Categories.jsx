import styled from "styled-components";
import { categories } from "../data";

import CategoryItem from "./CategoryItem";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
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
