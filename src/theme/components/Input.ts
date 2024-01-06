import { ComponentMultiStyleConfig, StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const Input: ComponentMultiStyleConfig = {
  parts: ['field', 'addon'],
  baseStyle: {
    field: {
      fontFamily: 'Space Grotesk',
      borderWidth: '1px',
    },
  },
  variants: {
    outline: (props: StyleFunctionProps) => ({
      field: {
        h: '44px',
        px: '8px',
        py: '12px',
        borderRadius: '0px',
        borderColor: mode('brand.primary80', 'brand.white')(props),
        bgColor: mode('white', 'brand.primary')(props),
        color: mode('brand.primary', 'brand.fogGray')(props),
        lineHeight: '20px',
        fontSize: '16px',
        _placeholder: {
          textTransform: 'none',
          bgColor: mode('white', 'brand.primary')(props),
          color: 'brand.wildBlueYonder',
          lineHeight: '20px',
          fontSize: '14px',
        },
        _focus: {
          boxShadow: 'none',
          borderColor: mode('brand.primary', 'brand.white')(props),
          bgColor: mode('brand.ghostWhite', 'brand.deepPurple')(props),
        },
        _hover: {
          boxShadow: 'none',
          borderColor: mode('brand.primary', 'brand.white')(props),
          bgColor: mode('brand.ghostWhite', 'brand.deepPurple')(props),
        },
        _invalid: {
          bgColor: 'state.errorHover',
          borderWidth: '1px',
          boxShadow: 'none',
        },
      },
      addon: {
        borderColor: mode('brand.primary', 'brand.white')(props),
        color: mode('brand.primary', 'brand.white')(props),
        lineHeight: '20px',
        fontSize: '16px',
      },
    }),
    newsletter: {
      field: {
        h: '44px',
        px: '8px',
        py: '12px',
        borderRadius: '0px',
        borderColor: 'brand.primary80',
        bgColor: 'brand.primary80',
        color: 'brand.wildBlueYonder',
        lineHeight: '20px',
        fontSize: '16px',
        _placeholder: {
          textTransform: 'none',
          bgColor: 'brand.primary80',
          color: 'brand.wildBlueYonder',
          lineHeight: '20px',
          fontSize: '14px',
        },
        _focus: {
          boxShadow: 'none',
          borderColor: 'brand.primary',
          bgColor: 'brand.primary',
        },
        _hover: {
          boxShadow: 'none',
          borderColor: 'brand.primary',
          bgColor: 'brand.brightGray',
        },
        _invalid: {
          bgColor: 'state.errorHover',
          borderWidth: '1px',
          boxShadow: 'none',
        },
      },
      addon: {
        borderColor: 'brand.primary',
        color: 'brand.primary',
        lineHeight: '20px',
        fontSize: '16px',
      },
    },
  },
}
