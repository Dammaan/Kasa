import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.large};
    margin-bottom: ${({ theme }) => theme.spacing.xLarge};
    @media (max-width: 768px) {
        margin-top: ${({ theme }) => theme.spacing.xLarge};
    }
`;

const ErrorTitle = styled.h1`
    font-size: 288px;
    color: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => theme.spacing.medium};

    @media (max-width: 768px) {
        font-size: 96px;
        margin: ${({ theme }) => theme.spacing.large};
    }
`;

const ErrorTxt = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xLarge};
    color: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => theme.spacing.medium};

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontSizes.medium};
        margin: ${({ theme }) => theme.spacing.large};
    }
`;

const ErrorLink = styled(Link)`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin: ${({ theme }) => theme.spacing.large};
    color: ${({ theme }) => theme.colors.black};
    text-decoration: underline;

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontSizes.small};
        margin: ${({ theme }) => theme.spacing.large};
    }
`;

function Error() {
    return (
        <ErrorContainer>
            <ErrorTitle>404</ErrorTitle> 
            <ErrorTxt>Oups! La page que vous demandez nexiste pas.</ErrorTxt> 
            <ErrorLink to="/">Retourner sur la page daccueil</ErrorLink>
        </ErrorContainer>
    );
}

export default Error;
