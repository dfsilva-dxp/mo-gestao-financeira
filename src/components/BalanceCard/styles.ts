import styled, { css, DefaultTheme } from "styled-components";
import { BalanceCardProps } from "./types";

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

export const ProgressBar = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    width: 100%;
  `}
`;

const progressModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
  `
};

type ProgressProps = Pick<BalanceCardProps, "progressBar" | "color">;

export const Progress = styled.div<ProgressProps>`
  ${({ theme, progressBar, color }) => css`
    background: ${theme.colors.black};
    width: 100%;
    height: 1rem;
    border-radius: ${theme.border.radius.default};
    position: relative;

    &::after {
      content: "";
      background: ${theme.colors.secondary};
      width: ${`${progressBar}%`};
      height: 1rem;
      border-radius: ${theme.border.radius.default};
      position: absolute;

      ${!!color && progressModifiers[color](theme)}
    }
  `}
`;
