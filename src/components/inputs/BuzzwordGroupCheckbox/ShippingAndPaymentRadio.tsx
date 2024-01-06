import React, { ReactNode, useCallback } from 'react'
import {
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  useRadio,
  UseRadioGroupReturn,
  VStack,
} from '@chakra-ui/react'

interface BuzzwordCheckboxProps {
  label: string
  subLabel?: string
  rightLabel?: string | ReactNode
  icon?: ReactNode
  onExternalChange: (value: string) => void
}

export const ShippingAndPaymentRadio = ({
  label,
  subLabel,
  rightLabel,
  icon,
  onExternalChange,
  ...rest
}: BuzzwordCheckboxProps) => {
  const { getInputProps, getCheckboxProps, state } = useRadio({
    ...rest,
  })
  const input = getInputProps()
  const checkbox = getCheckboxProps()
  const handleSelect = useCallback(
    (value: string) => {
      onExternalChange(value)
      if (state.isChecked && input) {
        ;(input.onChange as UseRadioGroupReturn['onChange'])('')
      }
    },
    [input, onExternalChange, state.isChecked]
  )

  return (
    <Box width="full" as="label">
      <input
        {...input}
        onClick={({ target }) => {
          handleSelect((target as HTMLInputElement).value)
        }}
      />
      <Flex
        {...checkbox}
        width="full"
        minH="60px"
        h={{ base: 'auto', md: '60px' }}
        border="1px solid"
        borderColor="brand.primary"
        cursor="pointer"
        px="16px"
        py="8px"
        bg="white"
        justifyContent="space-between"
        role="group"
        _hover={{
          bg: 'brand.primary',
          color: 'brand.ghostWhite',
        }}
        _dark={{
          bg: 'brand.brightGray',
          _hover: { bg: 'brand.primary', color: 'brand.ghostWhite' },
        }}
        _checked={{
          color: 'white',
          backgroundColor: 'brand.primary80',
          _dark: { bg: 'brand.primary' },
        }}
      >
        <HStack spacing="16px" align="start">
          {icon && (
            <Icon
              w="24px"
              h="24px"
              _groupChecked={{
                color: 'white',
              }}
              _groupHover={{
                color: 'white',
              }}
            >
              {icon}
            </Icon>
          )}
          <VStack spacing={0} align="start">
            <Text
              fontFamily="Space Grotesk Medium"
              _groupChecked={{
                color: 'white',
              }}
              _groupHover={{
                color: 'white',
              }}
            >
              {label}
            </Text>
            {subLabel && (
              <Text
                fontSize="12px"
                _groupChecked={{
                  color: 'white',
                }}
                _groupHover={{
                  color: 'white',
                }}
              >
                {subLabel}
              </Text>
            )}
          </VStack>
        </HStack>
        {rightLabel === typeof 'string' ? (
          <Text
            fontFamily="Space Grotesk Medium"
            _groupChecked={{
              color: 'white',
            }}
            _groupHover={{
              color: 'white',
            }}
          >
            {rightLabel}
          </Text>
        ) : (
          rightLabel
        )}
      </Flex>
    </Box>
  )
}
