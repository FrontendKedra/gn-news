import styled from "styled-components";
import { ReactComponent as PreviousArrow } from "./icons/previousArrow.svg";
import { ReactComponent as NextArrow } from "./icons/nextArrow.svg";

export const PageChanger = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  font-weight: 500;
  transition: 0.2s;

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
    gap: 4px;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 8px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.moonRaker};
    transform: scale(1.03);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray};
      transform: scale(1);
    }
  }

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

export const ArrowPrevious = styled(PreviousArrow)`
  height: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    height: 9px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 7px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 6px;
  }

`;

export const ArrowNext = styled(NextArrow)`
  height: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    height: 9px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 7px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 6px;
  }
`;
