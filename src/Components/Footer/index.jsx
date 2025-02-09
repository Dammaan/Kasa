import styled from "styled-components";
import logo from "../../Assets/LOGOblanc.png";

const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.large}; 
    background-color: ${({ theme }) => theme.colors.black}; 
    margin-top: auto;
`;

const FooterImg = styled.img`
    width: 122px; 
    height: 39px;
    margin: ${({ theme }) => theme.spacing.medium};

    @media (max-width: 768px) {
        margin: 0;
    }
`;

const FooterTxt = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.small}; 
    text-align: center;

    @media (max-width: 768px) {
        width: 133px;
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
