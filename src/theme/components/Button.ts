import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    _focus: {
      boxShadow: 'none',
    },
    fontFamily: 'Space Grotesk',
    borderRadius: '8px',
  },
  sizes: {
    sm: {
      w: 'auto',
      h: 'auto',
      px: '16px',
      py: '8px',
      fontSize: '14px',
    },
    md: {
      w: 'auto',
      h: 'auto',
      px: '20px',
      py: '8px',
      fontFamily: 'Space Grotesk',
      fontSize: '18px',
    },
    lg: {
      w: 'auto',
      h: 'auto',
      px: '24px',
      py: '14px',
      fontFamily: 'Space Grotesk Medium',
      fontSize: '18px',
    },
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      borderRadius: 0,
      bgColor: mode('brand.primary', 'brand.ghostWhite')(props),
      color: mode('brand.ghostWhite', 'brand.primary')(props),
      _active: {
        bgColor: 'brand.deepPurple',
      },
      _hover: {
        bgColor: 'brand.ebony',
        color: 'brand.ghostWhite',
      },
      _disabled: {
        color: 'brand.primary50',
        bgColor: 'brand.fogGray',
        opacity: '1',
      },
    }),
    outline: (props: StyleFunctionProps) => ({
      borderRadius: 0,
      border: '1px',
      bgColor: mode('white', 'brand.primary90')(props),
      color: mode('brand.primary', 'brand.ghostWhite')(props),
      borderColor: mode('brand.primary', 'brand.ghostWhite')(props),
      _active: {
        bgColor: 'brand.deepPurple',
      },
      _hover: {
        bgColor: mode('brand.fogGray', 'brand.fogGray')(props),
        color: 'brand.primary',
      },
      _disabled: {
        bgColor: mode('brand.fogGray', 'brand.fogGray')(props),
        color: mode('brand.primary50', 'brand.primary50')(props),
        borderColor: mode('brand.primary50', 'brand.primary50')(props),
        opacity: '1',
      },
    }),
    ghost: {
      _hover: {
        bgColor: 'transparent',
      },
      _active: {
        bgColor: 'transparent',
      },
    },

    pagination: (props: StyleFunctionProps) => ({
      bgColor: mode('brand.ghostWhite', 'brand.ebony')(props),
      color: mode('brand.primary', 'brand.white')(props),
      width: '20px',
      height: '40px',
      fontSize: '14px',
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        bgColor: mode('backoffice.deepPurple', 'backoffice.primary300')(props),
        color: mode('backoffice.secondary', 'backoffice.white')(props),
      },
    }),
    paginationActive: (props: StyleFunctionProps) => ({
      bgColor: mode('brand.primary', 'brand.ghostWhite')(props),
      color: mode('brand.ghostWhite', 'brand.primary')(props),
      width: '20px',
      height: '40px',
      fontSize: '14px',
      _focus: {
        boxShadow: 'none',
      },
    }),
  },
  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
}
