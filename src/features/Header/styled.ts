import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  display: grid;
  justify-content: center;
  justify-items: center;
  margin-top: 8px;
  gap: 12px;
`;

export const ViewImage = styled.img`
  width: 20px;
  height: 20px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 16px;
    height: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 12px;
    height: 12px;
  }
`;

export const Title = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 30px;
  }
`;

export const ListViewChanger = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: auto;
  border: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    width: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 12px;
  }
`;

export const PopUp = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  transition: 0.2s;
  border: none;
  cursor: pointer;
  border-radius: 16px;
  padding: 8px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.moonRaker};
    transform: scale(1.03);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 11px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 10px;
  }
`;

export const ChangerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 6px;
  align-items: center;
  font-size: 16px;
  transition: 0.2s;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;

export const LocaleChanger = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  transition: 0.2s;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.moonRaker};
    transform: scale(1.03);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 11px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 10px;
  }
`;
