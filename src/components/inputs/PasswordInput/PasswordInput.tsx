import { forwardRef, useState } from 'react'
import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  LayoutProps,
  Stack,
  StackDirection,
  Text,
} from '@chakra-ui/react'
import Image from 'next/legacy/image'

export interface PasswordInputProps extends InputProps {
  id: string
  label?: string
  labelDirection?: StackDirection
  inputWidth?: LayoutProps['w']
  errorMessage?: string
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      id,
      inputWidth = 'full',
      label,
      labelDirection = 'column',
      errorMessage = '',
      isDisabled,
      ...rest
    },
    ref
  ) => {
    const [isPasswordRevealed, setIsPasswordRevealed] = useState(false)

    return (
      <Stack
        justifyContent="space-between"
        direction={labelDirection}
        align="start"
        alignItems={labelDirection === 'row' ? 'center' : 'left'}
        spacing="1"
        w={inputWidth}
      >
        {label && (
          <FormLabel variant="input" whiteSpace="nowrap">
            {label}
          </FormLabel>
        )}
        <Box>
          <InputGroup justifyContent="flex-end">
            <Input
              id={id}
              name={id}
              ref={ref}
              {...rest}
              type={isPasswordRevealed ? 'text' : 'password'}
            />
            {!isDisabled && (
              <InputRightElement h="full" w="fit-content">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setIsPasswordRevealed((prevState) => !prevState)
                  }}
                >
                  <Image
                    src={
                      isPasswordRevealed
                        ? '/icons/password_show.svg'
                        : '/icons/password_hide.svg'
                    }
                    width={16}
                    height={16}
                  />
                </Button>
              </InputRightElement>
            )}
          </InputGroup>
          {errorMessage && (
            <Box mt="4px">
              <Text variant="error" mt="0">
                {errorMessage}
              </Text>
            </Box>
          )}
        </Box>
      </Stack>
    )
  }
)
