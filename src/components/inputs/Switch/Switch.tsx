import { forwardRef } from 'react'
import {
  FormLabel,
  HStack,
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
  Text,
  VStack,
} from '@chakra-ui/react'

export interface SwitchProps extends ChakraSwitchProps {
  label?: string
  errorMessage?: string
  id: string
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, errorMessage, id, ...rest }, ref) => (
    <VStack>
      <HStack spacing="0">
        <ChakraSwitch id={id} name={id} ref={ref} size="lg" {...rest} />
        {label && (
          <FormLabel variant="switch" htmlFor={id}>
            {label}
          </FormLabel>
        )}
      </HStack>
      {errorMessage && <Text color="state.error">{errorMessage}</Text>}
    </VStack>
  )
)
