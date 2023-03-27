import styled, { css } from "styled-components";
import { IsList } from "../../../common/interfaces/interface";

export const Title = styled.header`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 500;
  transition: 0.1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-column: span 2 / auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 14px;
  }
`;

export const Source = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  grid-column: span 2 / auto;
  transition: 0.1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 11px;
  }
`;

export const PublicationDate = styled.span`
  color: rgb(37, 37, 37);
  font-size: 14px;
  display: flex;
  grid-column: span 2 / auto;
  transition: 0.1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 11px;
  }
`;

export const TileList = styled.div`
  display: grid;
  gap: 20px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  border-radius: 6px;
  transition: 0.2s;
  grid-template-columns: auto 1fr;
  cursor: pointer;
  justify-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.moonRaker};
    transform: scale(1.02);
  }

  ${({ isList }: IsList) =>
    isList &&
    css`
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 8px;

      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        gap: 7px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        gap: 6px;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    gap: 18px;
    padding: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 16px;
    padding: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 16px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 14px 0;
    padding: 10px;
  }
`;

export const Thumbnail = styled.img`
  width: 120px;
  height: auto;
  transition: 0.1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    width: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-column: span 2 / auto;
    width: 100px;
  }
`;

export const Teaser = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  grid-column: span 2 / auto;
  transition: 0.1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
  }
`;
