import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";  // Correctement importées

const SliderContainer = styled.div`
  position: relative;
  width: 90%;
  height: 415px;
  margin: ${({ theme }) => theme.spacing.large};
`;

const Image = styled.img`
  width: 100%;
  height: 415px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  background: none;
  border: none;
  font-size: 5rem; 
  cursor: pointer;
  color: white;
  padding: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

const PrevButton = styled(Button)`
  left: ${({ theme }) => theme.spacing.large};
  transform: translate(-50%, -50%) ; 
`;

const NextButton = styled(Button)`
  right: ${({ theme }) => theme.spacing.large};
  transform: translate(50%, -50%); 
`;


const ImageCounter = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  padding: 5px 10px;
`;

function Slider({ logement }) {
  const [index, setIndex] = useState(0);

  const pictures = logement.pictures;

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <SliderContainer>
      <PrevButton onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />  
      </PrevButton>
      <Image src={pictures[index]} alt={`Image ${index + 1} de ${logement.title}`} />
      <NextButton onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </NextButton>
      <ImageCounter>{index + 1}/{pictures.length}</ImageCounter>
    </SliderContainer>
  );
}

// Validation des props avec PropTypes
Slider.propTypes = {
  logement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Slider;
