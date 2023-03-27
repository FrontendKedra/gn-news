import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: sideMenu;
  margin: 36px 24px 0 0;
  transition: 0.1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 32px 20px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 28px 16px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 24px 6px 0 0;
  }
`;

export const CountryContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 12px;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  transition: 0.2s;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.moonRaker};
    transform: scale(1.03);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 15px 11px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 12px 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 10px 6px;
    gap: 2px;
  }
`;

export const Country = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;

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

export const Flag = styled.img`
  width: 16px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 10px;
  }
`;
