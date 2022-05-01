export default {
  border: {
    radius: {
      small: "0.8rem",
      default: "1.6rem"
    }
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
      black: 900
    },
    sizes: {
      xxsmall: "1rem",
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "2.2rem",
      xlarge: "2.4rem",
      xxlarge: "3.2rem"
    }
  },
  colors: {
    primary: "#F9769D",
    secondary: "#96A7FF",
    background: "#171821",
    panel: "#21222D",
    white: "#fff",
    black: "#030517",
    lightGray: "#EEEEF2",
    gray: "#797D9A",
    green: "#3CD3C1",
    red: "#E83F5B",
    yellow: "#FFC727",
    gradient:
      "linear-gradient(145deg, rgba(33,34,45,1) 0%, rgba(58,44,58,1) 100%);"
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.0rem",
    medium: "3.0rem",
    large: "4.0rem",
    xlarge: "6.0rem",
    xxlarge: "8.0rem"
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out"
  }
} as const;
