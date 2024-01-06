import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const Checkbox: ComponentMultiStyleConfig = {
  parts: ['control', 'label', 'icon'],
  baseStyle: {
    icon: {
      height: '16px',
      borderRadius: 'none',
      color: 'red',
      bgColor: 'brand.primary',
      borderColor: 'brand.primary',
      border: 'none',

      _selected: {
        boxShadow: 'none',
        bgColor: 'brand.primary',
        borderColor: 'brand.primary',
      },
      _selection: {
        boxShadow: 'none',
        bgColor: 'brand.primary',
        borderColor: 'brand.primary',
      },
      _focusVisible: {
        boxShadow: 'none',
        bgColor: 'brand.primary',
        borderColor: 'brand.primary',
        _hover: {
          boxShadow: 'none',
        },
      },
    },
    control: {
      borderColor: 'brand.primary',
      borderWidth: '2px',
      borderRadius: 0,
      height: '20px',
      width: '20px',

      _focusVisible: {
        boxShadow: 'none',
        bgColor: 'brand.primary',
        borderColor: 'brand.primary',
        _hover: {
          boxShadow: 'none',
        },
      },
      _selected: {
        boxShadow: 'none',
        bgColor: 'brand.primary',
        borderColor: 'brand.primary',
      },
      _selection: {
        boxShadow: 'none',
        bgColor: 'brand.primary',
        borderColor: 'brand.primary',
      },
    },
    label: {
      lineHeight: 'shorter',
      fontWeight: 'normal',
      fontFamily: 'Proxima Nova',
      color: 'brand.darkSlateBlue',
      borderRadius: 'none',
      _focus: {
        boxShadow: 'none',
        bgColor: 'brand.primary',
        borderColor: 'brand.primary',
      },
      _selected: {
        boxShadow: 'none',
        bgColor: 'brand.primary',
        borderColor: 'brand.primary',
      },
      _selection: {
        boxShadow: 'none',
        bgColor: 'brand.primary',
        borderColor: 'brand.primary',
      },
    },
  },
  sizes: {
    md: {
      control: {
        w: '4',
        h: '4',
      },
      label: {
        fontSize: 'xs',
      },
    },
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      icon: {
        color: mode('brand.primary', 'brand.ghostWhite')(props),
      },
      control: {
        borderColor: mode('brand.primary', 'brand.ghostWhite')(props),
        _checked: {
          bgColor: 'brand.primary',
          borderColor: mode('brand.primary', 'brand.ghostWhite')(props),
          border: 'none',
          _hover: {
            bgColor: 'brand.primary',
            borderColor: mode('brand.primary', 'brand.ghostWhite')(props),
          },
          _focusVisible: {
            boxShadow: 'none',
            bgColor: 'brand.primary',
            borderColor: mode('brand.primary', 'brand.ghostWhite')(props),
            _hover: {
              boxShadow: 'none',
            },
          },
        },
      },
      _focusVisible: {
        boxShadow: 'none',
        bgColor: 'brand.primary',
        borderColor: mode('brand.primary', 'brand.ghostWhite')(props),
        _hover: {
          boxShadow: 'none',
        },
      },
    }),
    secondary: {
      control: {
        borderColor: 'brand.primary',
        _checked: {
          bgColor: 'brand.primary',
          borderColor: 'brand.primary',
          _hover: {
            bgColor: 'brand.primary',
            borderColor: 'brand.primary',
          },
        },
      },
    },
  },
}
