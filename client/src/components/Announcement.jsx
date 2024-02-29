import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>
  FLASH SALE!! FREE SHIPPING ON FIRST ORDER
</Container>;
};

export default Announcement;
