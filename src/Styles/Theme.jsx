const colors = {
  black: "#2d3436",
  white: "#dfe6e9",
  lightGrey: "#b2bec3",
  darkGrey: "#636e72",
};

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  colors,
  device,
};

export default theme;
