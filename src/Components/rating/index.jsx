import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function Rating({ rating }) {
  const numericRating = Number(rating) || 0; // Convertir la note en nombre, avec fallback à 0

  return (
    <RatingContainer>
      {Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < numericRating ? faSolidStar : faRegularStar}
        />
      ))}
    </RatingContainer>
  );
}

const RatingContainer = styled.div`
  display: flex;
  gap: 5px;
  font-size:${({ theme }) => theme.fontSizes.large};  ;
  color:${({ theme }) => theme.colors.primary};
`;


Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;