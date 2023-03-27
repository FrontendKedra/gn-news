import styled from "styled-components";
import { ReactComponent as Danger } from "./icons/danger.svg";

export const Container = styled.div`
  display: grid;
  grid-area: main;
  width: 56%;
  margin-top: 430px;
  justify-items: center;
  position: fixed;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 8px;
    width: 48%;
  }
`;

export const DangerIcon = styled(Danger)`
  width: 100px;
  height: 100px;

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

export const Header = styled.header`
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

export const ErrorMessage = styled.span`
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 10px;
  }
`;

export const LinkButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 10px;
  }
`;
