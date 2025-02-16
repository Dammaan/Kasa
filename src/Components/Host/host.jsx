import styled from "styled-components";
import PropTypes from "prop-types";

const HostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;;
`;

const NameHost = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  width: 80px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    width: 55px;
  }
`;

const ImageHost = styled.img`
  width: 65px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 32px;
  }
`;

function Host({ logement }) {
  const { name, picture } = logement.host; // Récupère le nom et l'image de l'hôte

  return (
    <HostContainer>
      <NameHost>{name}</NameHost>
      <ImageHost src={picture} alt={`Hôte ${name}`} />
    </HostContainer>
  );
}

// Validation des props avec PropTypes
Host.propTypes = {
  logement: PropTypes.shape({
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Host;

