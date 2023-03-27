import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 16px;
  margin-bottom: 8px;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;

export const CurrentTime = styled.span`
  color: ${({ theme }) => theme.colors.black};
  transition: 0.1s;
`;

export const ArticlesNumber = styled.span`
  color: ${({ theme }) => theme.colors.black};
  transition: 0.1s;
`;
