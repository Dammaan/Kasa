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
gap: ${({ theme }) => theme.spacing.xLarge};

`;
const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FirstDiv = styled.div`
`

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
        <FirstDiv>
        <TitleLoc logement={logement} />
        <Tags  logement={logement}/>
        </FirstDiv>
        
        <div>
        <Host  logement={logement}/>
        <Rating rating={logement.rating.toString()} /> 
        </div>
      </RowDiv>
      
    <InfoDropdown logement={logement}/>
      
    </PrincipalContainer>
  );
}

export default HouseForm;

