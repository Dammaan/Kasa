import PropTypes from "prop-types";
import Dropdown from "../../Components/Dropdown";
import styled from "styled-components";

// Conteneur des dropdowns
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function InfoDropdown({ logement }) {
  return (
    <InfoContainer>
      {/* Dropdown pour la description */}
      <Dropdown title="Description">
        <p>{logement.description}</p>
      </Dropdown>

      {/* Dropdown pour les équipements */}
      <Dropdown title="Équipements">
        {logement.equipments.map((equipement, index) => (
          <p key={index}>{equipement}</p>
        ))}
      </Dropdown>

    </InfoContainer>
  );
}

// Définition des PropTypes
InfoDropdown.propTypes = {
  logement: PropTypes.shape({
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default InfoDropdown;
