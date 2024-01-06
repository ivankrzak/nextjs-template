import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const Textarea: ComponentSingleStyleConfig = {
  variants: {
    outline: (props: StyleFunctionProps) => ({
      px: '8px',
      py: '12px',
      borderColor: mode('brand.wildBlueYonder', 'brand.ebony')(props),
      bgColor: mode('brand.white', 'brand.ebony')(props),
      color: mode('brand.primary', 'brand.ghostWhite')(props),
      lineHeight: '20px',
      fontSize: '16px',
      _placeholder: {
        textTransform: 'none',
        bgColor: mode('brand.white', 'brand.ebony')(props),
        color: 'brand.wildBlueYonder',
        lineHeight: '20px',
        fontSize: '14px',
      },
      _focus: {
        boxShadow: 'none',
        borderColor: 'brand.primary',
        bgColor: mode('brand.selago', 'brand.brightGray')(props),
      },
      _hover: {
        boxShadow: 'none',
        borderColor: 'brand.primary',
        bgColor: mode('brand.selago', 'brand.brightGray')(props),
      },
      _invalid: {
        bgColor: 'state.errorHover',
        borderWidth: '1px',
        boxShadow: 'none',
      },
    }),
  },
}
