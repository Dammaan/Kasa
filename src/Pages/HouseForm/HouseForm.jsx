import Slider from "../../Components/Slider";
import Host from "../../Components/Host/host";
import TitleLoc from "../../Components/TitleHouse";
import Tags from "../../Components/Tags";
import InfoDropdown from "../../Components/Infohouse";
import { useParams, Navigate } from "react-router-dom";
import dataLogements from "../../Datas/logementlist.json";
import Rating from "../../Components/rating";
import styled from "styled-components";

const PrincipalContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
gap: ${({ theme }) => theme.spacing.medium};

`;
const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  width: 90%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FirstElementDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 80%; 

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SecondElementDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end; 
  width: 20%; 
  gap: ${({ theme }) => theme.spacing.medium};

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    margin-top: ${({ theme }) => theme.spacing.medium};
    width: 100%;
  }
`;





function HouseForm() {
  const { id } = useParams();
  const logement = dataLogements.find((item) => item.id.toString() === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <PrincipalContainer>
      
        
    <Slider  logement={logement}/>
      <RowDiv>
        <FirstElementDiv>
        <TitleLoc logement={logement} />
        <Tags  logement={logement}/>
        </FirstElementDiv>
        
        <SecondElementDiv>
        <Host  logement={logement}/>
        <Rating rating={logement.rating.toString()} /> 
        </SecondElementDiv>
      </RowDiv>
      
    <InfoDropdown logement={logement}/>
      
    </PrincipalContainer>
  );
}

export default HouseForm;

