// import { transparentize } from 'polished'

export const DeviceBreakpoints = {
  xs: '320px',
  sm: '480px',
  md: '700px', // Tablet
  lg: '1025px', // Desktop
}

export interface ThemeColors {
  brand: {
    primary: string
    primary90: string
    primary80: string
    primary50: string
    primary25: string
    deepPurple: string
    ebony: string
    darkEbony: string
    ebony50: string
    wildBlueYonder: string
    fogGray: string
    ghostWhite: string
    darkWildBlueYonder: string
    gainsboro: string
    brightGray: string
    selago: string
    black: string
    white: string
  }
  state: {
    success: string
    warning: string
    error: string
    info: string
    hover: string
    hoverLight: string
    errorHover: string
    errorLight: string
  }
}

export const Colors: ThemeColors = {
  brand: {
    primary: '#1E1E1E',
    primary90: '#212121',
    primary80: '#4B4B4B',
    primary50: '#8E8E8E',
    primary25: '#C7C7C7',
    deepPurple: '#0F1526',
    ebony: '#243340',
    darkEbony: '#222831',
    ebony50: '#9FA1A8',
    wildBlueYonder: '#A4ACCA',
    darkWildBlueYonder: '#5C5F88',
    gainsboro: '#D8DBE7',
    brightGray: '#3F4452',
    fogGray: '#F3F6F9',
    ghostWhite: '#F7F8FB',
    selago: '#EFEFFC',
    black: '#000000',
    white: '#ffffff',
  },
  state: {
    success: '#76CA66',
    warning: '#FBC756',
    error: '#BA0000',
    info: '#A0C3FF',
    hover: '#798BFF',
    hoverLight: '#EAEBFF',
    errorHover: '#F4D5D5',
    errorLight: '#FEFAFE',
  },
}

export const TEXT_COLOR = Colors.brand.primary
export const BASE_FONT_SIZE_PX = '14px'
