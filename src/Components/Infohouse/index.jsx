import { useParams } from "react-router-dom";
import dataLogements from "../../Datas/logementlist.json";
import Dropdown from "../../Components/Dropdown";
import styled from "styled-components";

// Conteneur des dropdowns
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: ${({ theme }) => theme.spacing.small};
  width: 90%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


function InfoDropdown() {
  const { id } = useParams();
  const logement = dataLogements.find((item) => item.id.toString() === id);

  return (
    <InfoContainer>
      {/* Dropdown pour les équipements */}
      <Dropdown title="Équipements">
        {logement.equipments.map((equipement, index) => (
          <p key={index}>{equipement}</p>
        ))}
      </Dropdown>

      {/* Dropdown pour la description */}
      <Dropdown title="Description">
  <p>{logement.description}</p>
</Dropdown>

    </InfoContainer>
  );
}

export default InfoDropdown;
