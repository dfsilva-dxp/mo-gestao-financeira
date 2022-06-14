import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gradient};
    padding: ${theme.spacings.small} ${theme.spacings.large};
    border-radius: ${theme.border.radius.default};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Balance = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`;

export const Percentage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.green};
  `}
`;
