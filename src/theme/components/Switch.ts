import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Switch: ComponentMultiStyleConfig = {
  parts: ['track', 'thumb', 'container'],
  baseStyle: {
    track: {
      cursor: 'pointer',
      bg: 'brand.wildBlueYonder',
      color: 'blue',
      _checked: {
        bg: 'brand.primary',
      },
      _focus: {
        boxShadow: 'none',
      },
      _dark: {
        _checked: {
          bg: 'brand.ebony',
        },
      },
    },
    thumb: {
      bg: 'brand.ghostWhite',
      _dark: { bg: 'brand.ghostWhite' },
      h: '4',
      w: '4',
    },
  },
  sizes: {
    lg: {
      track: {
        w: '40px',
        h: '6',
        px: '1',
      },
      thumb: {
        h: '5',
        w: '5',
        alignSelf: 'center',
      },
    },
  },
}
