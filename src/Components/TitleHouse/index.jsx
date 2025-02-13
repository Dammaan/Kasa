import styled from "styled-components";
import PropTypes from "prop-types";

// Définition des composants styled
const InfoContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-top: ${({ theme }) => theme.spacing.large};
`;

const TitleHouse = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const LocalisationHouse = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

function TitleLoc({ logement }) {
  return (
    <InfoContainer>
      <TitleHouse>{logement.title}</TitleHouse>
      <LocalisationHouse>{logement.location}</LocalisationHouse>
    </InfoContainer>
  );
}

// Validation des props avec PropTypes
TitleLoc.propTypes = {
  logement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default TitleLoc;


