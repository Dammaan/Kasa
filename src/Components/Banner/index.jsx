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
    margin: 20px;
    position: relative;
    border-radius: 25px; 

    /* Image de fond */
    background-image: url(${(props) => props.$bgImage});
    background-size: cover;
    background-position: center;

    /* Shadow */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6); 
        border-radius: 20px; 
        z-index: 0;  
    } 
    @media (max-width: 768px) {
    height: 111px;
    justify-content: left


        
    }
`;

const BannerTxt = styled.p`
    color: white;
    font-size: 48px;
    text-align: center;
    z-index: 1;
    @media (max-width: 768px) {
        font-size: 24px;
        margin-left: 10px;
        width: 225px ;
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
