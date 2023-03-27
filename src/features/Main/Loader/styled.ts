import styled from "styled-components";
import { ReactComponent as iconSpinner } from "./icons/icon-spinner.svg";

export const Container = styled.div`
  display: grid;
  grid-area: main;
  width: 56%;
  margin-top: 450px;
  justify-items: center;
  position: fixed;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 48%;
  }
`;

export const LoadingParagraph = styled.p`
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
    font-size: 11px;
  }
`;

export const Icon = styled(iconSpinner)`
  animation: rotation 1s infinite linear;
  width: 100px;
  height: 100px;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    width: 85px;
    height: 85px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 46px;
    height: 46px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 32px;
    height: 32px;
  }
`;
