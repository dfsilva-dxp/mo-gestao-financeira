import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacings.medium};
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h4``;

export const Body = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `}
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Category = styled.strong`
  ${({ theme }) => css`
    grid-area: 1 / 1 / 2 / 2;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
  `}
`;

export const Amout = styled.p`
  ${({ theme }) => css`
    grid-area: 1 / 2 / 2 / 3;
    font-size: ${theme.font.sizes.small};
    place-self: end;
  `}
`;

type ProgressBarProps = {
  color: string;
  percentage: string;
};

export const ProgressBar = styled.div<ProgressBarProps>`
  ${({ theme, color, percentage }) => css`
    grid-area: 2 / 1 / 3 / 3;
    place-self: center center;
    position: relative;
    width: 100%;
    height: 0.6rem;
    background: ${theme.colors.black};
    border-radius: ${theme.border.radius.small};

    &::after {
      content: "";
      width: ${percentage};
      height: 100%;
      background: ${color};
      position: absolute;
      border-radius: ${theme.border.radius.small};
    }
  `}
`;
