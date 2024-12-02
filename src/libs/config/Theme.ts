// eslint-disable-next-line @nx/enforce-module-boundaries
import colors from '../../utils/tokens/colors.json';

export type ColorCSSVariable = keyof typeof colors;

export const getColorCSSVariables = (color: ColorCSSVariable) => {
    return colors[color];
};