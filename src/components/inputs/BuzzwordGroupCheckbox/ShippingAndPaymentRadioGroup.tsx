import React, { ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Box,
  Flex,
  FlexProps,
  Text,
  useRadioGroup,
  VStack,
} from '@chakra-ui/react'
import { ShippingAndPaymentRadio } from './ShippingAndPaymentRadio'

type RadioOption = {
  label: string
  value: string | number
  subLabel?: string
  rightText?: string | ReactNode
  icon?: ReactNode
}

interface FormBuzzwordRadioGroupProps extends Omit<FlexProps, 'defaultValue'> {
  options: RadioOption[]
  id: string
  defaultValue?: RadioOption
  errorMessage?: string
  onExternalChange?: (value: string) => void
}

export const ShippingAndPaymentRadioGroup = ({
  id,
  defaultValue,
  errorMessage,
  options,
  onExternalChange,
  ...rest
}: FormBuzzwordRadioGroupProps) => {
  const { control, setValue } = useFormContext()
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: id,
    defaultValue: String(defaultValue?.value),
  })

  const group = getRootProps()

  return (
    <Controller
      name={id}
      control={control}
      render={() => (
        <>
          <Flex
            justifyContent="center"
            alignItems="center"
            w="full"
            mb="8px"
            {...group}
            {...rest}
          >
            <VStack w="full">
              {options.map(({ value, label, subLabel, rightText, icon }) => {
                const radio = getRadioProps({
                  value: String(value),
                })

                return (
                  <React.Fragment key={value}>
                    <ShippingAndPaymentRadio
                      {...radio}
                      label={label}
                      subLabel={subLabel}
                      rightLabel={rightText}
                      icon={icon}
                      onExternalChange={(selectedValue: string) => {
                        setValue(id, selectedValue)
                        onExternalChange?.(selectedValue)
                      }}
                    />
                  </React.Fragment>
                )
              })}
            </VStack>
          </Flex>
          {errorMessage && (
            <Box w="full" textAlign="left">
              <Text variant="error" mt="0">
                {errorMessage}
              </Text>
            </Box>
          )}
        </>
      )}
    />
  )
}
