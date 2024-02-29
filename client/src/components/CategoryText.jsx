import styled from "styled-components"

const Container=styled.h1`
display: flex;
justify-content: center;
align-items: center;
background-color: #efe2e2;
padding: 10px 5px;
  
  padding-left: 35px ;
  font-weight: 600;
    
`
const CategoryText = () => {
  return (
    <Container>
      CATEGORIES
    </Container>
  )
}

export default CategoryText
