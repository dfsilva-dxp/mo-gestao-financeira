import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};

    [type="month"] {
      max-width: 1.4rem;
      background: transparent url("./img/calendar-white-icon.svg") center
        center/contain no-repeat;
      border: none;
      outline: 0;

      &:active,
      &:focus {
        background: transparent url("./img/calendar-pink-icon.svg") center
          center/contain no-repeat;
      }
    }
    [type="month"]::-webkit-inner-spin-button {
      display: none;
    }
    [type="month"]::-webkit-calendar-picker-indicator {
      opacity: 0;
      cursor: pointer;
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    text-transform: capitalize;
    font-weight: ${theme.font.weight.bold};
  `}
`;
