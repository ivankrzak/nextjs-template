import React, { useEffect, useState } from 'react'
import Flag from 'react-world-flags'
import {
  Box,
  Flex,
  FormLabel,
  HStack,
  Input,
  LayoutProps,
  Select,
  Stack,
  StackDirection,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  Countries,
  getCountryIsoByPrefix,
  getCountryTelCode,
} from './countries'

export const PhoneNumberInput = ({
  label,
  subLabel,
  inputWidth = 'full',
  labelDirection = 'column',
  value,
  defaultIsoCountry = 'SVK',
  defaultPrefix = '+421',
  onChange,
  placeholder,
  errorMessage,
}: {
  label?: string
  subLabel?: string
  labelDirection?: StackDirection
  inputWidth?: LayoutProps['w']
  value: string
  defaultIsoCountry?: string
  defaultPrefix?: string
  onChange: (parsedNumber: string, prefix: string) => void
  placeholder: string
  errorMessage?: string
}) => {
  const [number, setNumber] = useState(value || '')
  const [selectedCountryIso, setSelectedCountryIso] =
    useState(defaultIsoCountry)
  const [countryPrefix, setCountryPrefix] = useState(
    getCountryTelCode(defaultIsoCountry) || ''
  )

  useEffect(() => {
    const defaultCountryPrefix =
      defaultPrefix ?? getCountryTelCode(defaultIsoCountry)

    const defaultCountryByPrefix = getCountryIsoByPrefix(defaultPrefix ?? '421')
    setSelectedCountryIso(defaultCountryByPrefix ?? defaultIsoCountry)
    setCountryPrefix(defaultCountryPrefix)
    setNumber(value.replace(`${defaultCountryPrefix} `, ''))
  }, [defaultIsoCountry, defaultPrefix, value])

  return (
    <Stack
      justifyContent="space-between"
      direction={labelDirection}
      align="start"
      alignItems={labelDirection === 'row' ? 'center' : 'left'}
      spacing="1"
      w={inputWidth}
      style={{ columnGap: '30px' }}
    >
      {label && !subLabel && (
        <HStack>
          <FormLabel whiteSpace="nowrap" mr="0">
            {label}
          </FormLabel>
        </HStack>
      )}
      {label && subLabel && (
        <VStack spacing={0} alignItems="start">
          <HStack>
            <Text
              fontFamily="Space Grotesk Medium"
              fontSize="14px"
              color="brand.primary"
              _dark={{ color: 'brand.wildBlueYonder' }}
            >
              {label}
            </Text>
          </HStack>
          <Text pl="4px" color="brand.wildBlueYonder" fontSize="13px">
            {subLabel}
          </Text>
        </VStack>
      )}
      <Flex align="center">
        {/* @ts-ignore */}
        <Flag width="48px" code={selectedCountryIso} />
        <Select
          zIndex={1}
          opacity={0}
          w="28px"
          height="50px"
          value={selectedCountryIso}
          onChange={({ target }) => {
            const { value: selectValue } = target
            const prefix = getCountryTelCode(selectValue)

            setCountryPrefix(prefix)
            setSelectedCountryIso(selectValue)
            onChange(number, prefix)
          }}
        >
          {Countries.map((option) => (
            <option key={option.iso} value={option.iso}>
              {option.name}
            </option>
          ))}
        </Select>
        <Text fontSize="16px" pr="8px">
          {countryPrefix}
        </Text>
        <Input
          type="tel"
          autoComplete="tel"
          value={number}
          placeholder={placeholder}
          defaultValue={number}
          onChange={({ target }) => {
            const { value: inputValue } = target
            setNumber(inputValue.replace(countryPrefix, ''))
            onChange(inputValue.replace(countryPrefix, ''), countryPrefix)
          }}
        />
      </Flex>
      {errorMessage && (
        <Box mt="4px">
          <Text variant="error" mt="0">
            {errorMessage}
          </Text>
        </Box>
      )}
    </Stack>
  )
}
