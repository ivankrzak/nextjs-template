import { Controller, useFormContext } from 'react-hook-form'
import { ActionMeta } from 'chakra-react-select'
import { Dropdown, DropdownOption, DropdownProps } from './Dropdown'

export const FormDropdown = ({
  id,
  onChange,
  externalOnChange,
  options,
  errorMessage,
  ...rest
}: DropdownProps & {
  externalOnChange?: (
    newValue: DropdownOption | DropdownOption[],
    actionMeta: ActionMeta<unknown>
  ) => void
}) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={id}
      control={control}
      render={({ field }) => (
        <Dropdown
          id={id}
          ref={field.ref}
          value={field.value}
          errorMessage={errorMessage}
          onChange={(newValue, actionMeta) => {
            field.onChange(newValue)
            if (newValue) {
              externalOnChange?.(newValue, actionMeta)
            }
          }}
          onBlur={field.onBlur}
          options={options}
          {...rest}
        />
      )}
    />
  )
}
