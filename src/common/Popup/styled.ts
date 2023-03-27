import styled from "styled-components";

export const ArticleLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  transition: 0.2s;
  font-size: 18px;

  &:hover {
    color: ${({ theme }) => theme.colors.doveGray};
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

export const Container = styled.div`
  display: grid;
  justify-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 6px;
  }
`;

export const Author = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 10px;
  }
`;

export const Content = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 10px;
  }
`;

export const CreationProcess = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;

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

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 10px;
  }
`;

