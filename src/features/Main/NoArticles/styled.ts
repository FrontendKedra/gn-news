import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-area: main;
  width: 56%;
  margin-top: 450px;
  justify-items: center;
  position: fixed;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 50%;
  }
  
`;

export const NoArticlesParagraph = styled.p`
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;