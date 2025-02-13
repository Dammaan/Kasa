import styled from "styled-components";
import PropTypes from "prop-types";

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.small};
`;

const TagList = styled.p`
  display: flex;
  justify-content: center;
  width: auto;
  padding: 5px;
  padding-left: ${({ theme }) => theme.spacing.medium};
  padding-right: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.large};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

function Tags({ logement }) {
  return (
    <TagContainer>
      {logement.tags.map((tag, index) => (
        <TagList key={index}>{tag}</TagList>
      ))}
    </TagContainer>
  );
}

// Validation des props avec PropTypes
Tags.propTypes = {
  logement: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Tags;
