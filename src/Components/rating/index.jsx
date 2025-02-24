import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const RatingContainer = styled.div`
  display: flex;
  gap: 5px;
  font-size: ${({ theme }) => theme.fontSizes.large}; 
  color: ${({ theme }) => (theme.colors.primary )}; 

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

function Rating({ rating }) {
  const numericRating = Number(rating) || 0; // Convertir la note en nombre, avec fallback à 0

  return (
    <RatingContainer>
      {Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faSolidStar} 
          style={{
            color: index < numericRating ? 'inherit' : '#D3D3D3'}}
        />
      ))}
    </RatingContainer>
  );
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
