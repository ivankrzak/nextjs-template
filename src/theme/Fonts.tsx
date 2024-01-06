import { Global } from '@emotion/react'
import { FontFamily, FontUrl } from 'constants/common/fonts'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: ${FontFamily.DMSansThin};
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(${FontUrl['DM Sans Thin']}) format('TrueType'), url(${FontUrl['DM Sans Thin']}) format('ttf');
      }
      @font-face {
        font-family: ${FontFamily.DMSansLight};
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${FontUrl['DM Sans Light']}) format('TrueType'), url(${FontUrl['DM Sans Light']}) format('ttf');
      }
      @font-face {
        font-family: ${FontFamily.DMSans};
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${FontUrl['DM Sans']}) format('TrueType'), url(${FontUrl['DM Sans']}) format('ttf');
      }
      @font-face {
        font-family: ${FontFamily.DMSansMedium};
        font-style: normal;
        font-weight: 500 ;
        font-display: swap;
        src: url(${FontUrl['DM Sans Medium']}) format('TrueType'), url(${FontUrl['DM Sans Medium']}) format('ttf');
      }
      @font-face {
        font-family: ${FontFamily.DMSansSemibold};
        font-style: normal;
        font-weight: 600 ;
        font-display: swap;
        src: url(${FontUrl['DM Sans Semibold']}) format('TrueType'), url(${FontUrl['DM Sans Semibold']}) format('ttf');
      }
      @font-face {
        font-family: ${FontFamily.DMSansBold};
        font-style: normal;
        font-weight: 700 ;
        font-display: swap;
        src: url(${FontUrl['DM Sans Bold']}) format('TrueType'), url(${FontUrl['DM Sans Bold']}) format('ttf');
      }
      `}
  />
)
