import styled, { css } from "styled-components";

import { LogoProps } from "./types";

const wrapperModifier = {
  small: () => css`
    width: 4rem;
  `,
  medium: () => css`
    width: 5rem;
  `,
  large: () => css`
    width: 6.5rem;
  `
};

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifier[size]}
  `}
`;
