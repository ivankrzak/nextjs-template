import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const FormLabel: ComponentSingleStyleConfig = {
  variants: {
    outline: (props: StyleFunctionProps) => ({
      fontFamily: 'Space Grotesk Medium',
      fontSize: '14px',
      lineHeight: '20px',
      color: mode('brand.primary', 'brand.white')(props),
      ml: '1',
      my: '0',
    }),
  },
}
