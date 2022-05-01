import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: url("/img/looper.svg") center center/cover no-repeat,
      ${theme.colors.gradient};
    width: 34rem;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    border-radius: ${theme.border.radius.default};
    display: grid;
    gap: ${theme.spacings.small};
  `}
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
  `}
`;

export const Balance = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`;

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardNumber = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.gray};
  `}
`;
