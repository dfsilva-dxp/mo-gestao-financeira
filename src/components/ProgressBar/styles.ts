import styled, { css, DefaultTheme } from "styled-components";
import { ProgressPropsProps } from "./types";

export const Bar = styled.div`
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

type ProgressProps = ProgressPropsProps;

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
