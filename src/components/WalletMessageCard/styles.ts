import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gradient};
    width: 34rem;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    border-radius: ${theme.border.radius.default};
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};

    display: grid;
    grid-template-rows: repeat(2, auto);
    place-items: center;
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    font-size: 1.3rem;
    color: ${theme.colors.gray};
  `}
`;
