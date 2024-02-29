import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () =>  {
  return (
    <Container>
        <Left>
            <Logo>Relife Resources</Logo>
            <Desc>
            Relife Resources is a vibrant and dynamic C2C (customer-to-customer) e-commerce platform
             that serves as a hub for buying and selling creative and scrap items. 
             Designed with a user-friendly interface and a visually appealing layout, 
             the website offers a seamless and engaging experience for individuals passionate about unique and repurposed products.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>

            </SocialContainer>

        </Left>
        
        <Center> 
            <Title>
                LINKS
            </Title>
            <List>
                <ListItem>  HOME </ListItem>
                <ListItem>  CART </ListItem>
                <ListItem> MEN'S       </ListItem>
                <ListItem>   WOMAN'S'     </ListItem>
                <ListItem>  ACCESSORIES       </ListItem>
                <ListItem>  MY ACCOUNTS       </ListItem>
                <ListItem>  WISHLIST       </ListItem>
                <ListItem>TERMS      </ListItem>
                
            </List>
            

        </Center>
        
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>
                 DoorNo 675TR9,Derlakatte,Kotekar,575022
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>
                +91 8296058965
            </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                RelifeResources@gmail.com
            </ContactItem>
            <Payment src="https://th.bing.com/th/id/R.6f6e2ac2f5f88712283e2031a9b42437?rik=AavSVvOAMtXf0g&riu=http%3a%2f%2fwww.worldofwarfare.co.uk%2fimages%2flogo_visa_mastercard.png&ehk=LZcx%2ftWlDLrXBCgfNMH0RbAgTDDN22OwPxO%2bg6dgD3Q%3d&risl=&pid=ImgRaw&r=0"/>
            

        </Right>
      
    </Container>
  )
}
export default Footer;
