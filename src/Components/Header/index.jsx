import { Link } from 'react-router-dom'; 
import styled from "styled-components";
import logo from "../../Assets/LOGO.png";

const NavContainer = styled.nav`
    width:95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const HeaderImg = styled.img`
    width: 210px;
    height: 68px;

    @media (max-width: 768px) { 
        width: 145px;
        height: auto;
    }
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const HeaderLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
        color: black;
        text-decoration: underline;
    }

    &.active {
        text-decoration: underline;

    @media (max-width: 768px) {
        font-size: 16px;
    }}
`;

function Header() {
    return (
        <NavContainer>
            <HeaderImg src={logo} alt="Logo Kasa Rose" />
            <LinkContainer>
                <HeaderLink to="/">Accueil</HeaderLink>
                <HeaderLink to="/apropos">A propos</HeaderLink>
            </LinkContainer>
        </NavContainer>
    );
}

export default Header;
