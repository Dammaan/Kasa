import styled from "styled-components";
import dataLogements from "../../Datas/logementlist.json";

const CardContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xLarge};
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  margin: ${({ theme }) => theme.spacing.large};
  @media (max-width: 768px) { 
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1, 1fr);
    gap: ${({ theme }) => theme.spacing.large};
  }
`;

const CardLogement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-bottom: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  height: 340px;

  /* Image + dégradé */
  background: linear-gradient(
        rgba(10, 10, 10, 0),  
      rgba(4, 4, 4, 0.41)
    ),
    url(${(props) => props.$bgImage}) center/cover no-repeat;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  color: white;
  z-index: 2;
  padding: 10px;
`

function GalleryCards() {
  return (
    <CardContainer>
      {dataLogements.map((logement) => (
        <CardLogement key={logement.id} $bgImage={logement.pictures[0]}>
          <Title>{logement.title}</Title>
        </CardLogement>
      ))}
    </CardContainer>
  );
}

export default GalleryCards;
