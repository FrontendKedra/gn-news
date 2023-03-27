import styled, { css } from "styled-components";
import { IsList } from "../../common/interfaces/interface";

export const Container = styled.div`
  grid-area: main;
  margin: 36px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  height: min-content;

  ${({ isList }: IsList) =>
    isList &&
    css`
      grid-template-columns: 1fr;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr;
    margin: 32px 20px;
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 28px 16px;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 24px 6px;
    gap: 16px;
  }
`;