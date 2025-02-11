import styled from "styled-components";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;  /* Centre horizontalement */
`;

const DropdownContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom:${({ theme }) => theme.spacing.xLarge};
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TitleContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.large};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const TextContainer = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const CollapseText = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

function Dropdown({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CenteredContainer>
      <DropdownContainer onClick={handleClick}>
        <TitleContainer>
          <h2>{title}</h2>
          {/* <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} /> */}
        </TitleContainer>

        {isOpen && (
          <CollapseText>
            <TextContainer $isOpen={isOpen}>
              <p>{text}</p>
            </TextContainer>
          </CollapseText>
        )}
      </DropdownContainer>
    </CenteredContainer>
  );
}

export default Dropdown;
