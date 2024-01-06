export enum FontFamily {
  DMSansThin = 'DM Sans Thin',
  DMSansLight = 'DM Sans Light',
  DMSans = 'DM Sans',
  DMSansMedium = 'DM Sans Medium',
  DMSansSemibold = 'DM Sans Semibold',
  DMSansBold = 'DM Sans Bold',
}

export const FontUrl: Record<FontFamily, string> = {
  [FontFamily.DMSans]: '/fonts/DM-Sans/DMSans-Regular.ttf',
  [FontFamily.DMSansThin]: '/fonts/DM-Sans/DMSans-Thin.ttf',
  [FontFamily.DMSansLight]: '/fonts/DM-Sans/DMSans-Light.ttf',
  [FontFamily.DMSansMedium]: '/fonts/DM-Sans/DMSans-Medium.ttf',
  [FontFamily.DMSansSemibold]: '/fonts/DM-Sans/DMSans-SemiBold.ttf',
  [FontFamily.DMSansBold]: '/fonts/DM-Sans/DMSans-Bold.ttf',
}
