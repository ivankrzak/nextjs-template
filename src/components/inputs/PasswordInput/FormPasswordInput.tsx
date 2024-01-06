import { useFormContext } from 'react-hook-form'
import { PasswordInput, PasswordInputProps } from './PasswordInput'

export const FormPasswordInput = ({
  id,
  errorMessage,
  ...rest
}: PasswordInputProps) => {
  const { register } = useFormContext()

  return (
    <PasswordInput
      id={id}
      errorMessage={errorMessage}
      {...register(id)}
      {...rest}
    />
  )
}
