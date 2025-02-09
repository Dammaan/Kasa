import styled from "styled-components";
import { useLocation } from "react-router-dom";

// Importez vos images pour chaque page
import Image1 from "../../Assets/Montagne.jpg";
import Image2 from "../../Assets/Cote.jpg";

const BannerContainer = styled.div`
    width: 95%;
    height: 223px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${({ theme }) => theme.spacing.large};
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius.large};

    /* Image de fond */
    background-image: url(${(props) => props.$bgImage});
    background-size: cover;
    background-position: center;

    /* Overlay pour l'effet sombre */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        border-radius: ${({ theme }) => theme.borderRadius.large}; 
        z-index: 0;  
    }

    @media (max-width: 768px) {
        height: 111px;
        justify-content: flex-start;
    }
`;

const BannerTxt = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xxLarge};
    font-weight: 700;
    text-align: center;
    z-index: 1;

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontSizes.large};
        margin-left: ${({ theme }) => theme.spacing.medium};
        width: 225px;
        text-align: left;
    }
`;

function Banner() {
    const location = useLocation();

    // Change l'image en fonction de l'URL de la page
    const getBannerImage = () => {
        switch (location.pathname) {
            case '/apropos':
                return Image1;
            default:
                return Image2; 
        }
    };

    return (
        <BannerContainer $bgImage={getBannerImage()}>
            {location.pathname !== '/apropos' && <BannerTxt>Chez vous, partout et ailleurs</BannerTxt>}
        </BannerContainer>
    );
}

export default Banner;
