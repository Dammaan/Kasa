import styled from "styled-components";
import logo from "../../Assets/LOGOblanc.png";

const FooterContainer = styled.footer`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: black; 
`;


const FooterImg = styled.img`
    width: 122x;
    height: 39px;
    margin: 20px;

    @media (max-width: 768px) {
        margin:0px;
    }
`;


const FooterTxt = styled.p`
    color: white;
    font-size: 14px;
    text-align: center;


    @media (max-width: 768px) {
        width: 133px
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterImg src={logo} alt="Logo Kasa Blanc" />

            <FooterTxt> © 2020 Kasa. All rights reserved</FooterTxt> 
        </FooterContainer>
    );
}

export default Footer;
