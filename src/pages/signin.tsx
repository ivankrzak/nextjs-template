import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { EMAIL_PROVIDER_ID } from 'hooks/useEmailSignInForm'
import { useLoginCallback } from 'hooks/useLoginCallback'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getToken } from 'next-auth/jwt'
import { BuiltInProviderType } from 'next-auth/providers'
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from 'next-auth/react'
import { InferType } from 'yup'
import * as yup from 'yup'
import { Route } from 'constants/common/routes'
import { FormTextInput } from 'components/inputs'

export enum FieldName {
  Email = 'email',
  Password = 'password',
}

export const YupSignInValidationSchema = yup.object({
  [FieldName.Email]: yup.string().email().required(),
})
export type YupSignInFormValues = InferType<typeof YupSignInValidationSchema>

const SignIn = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useLoginCallback()
  const methods = useForm<YupSignInFormValues>({
    defaultValues: {
      [FieldName.Email]: '',
    },
    resolver: yupResolver(YupSignInValidationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const providersWithoutEmail = Object.values(providers).filter(
    ({ id }) => id !== EMAIL_PROVIDER_ID,
  )

  console.log('providersWithoutEmail', providersWithoutEmail)
  const submit = async (formData: YupSignInFormValues) => {
    const response = await signIn('email', {
      ...formData,
    })
    console.log('response', response)
  }

  return (
    <div>
      <div>
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2>auth.signIn.toYourAccount</h2>
      </div>

      <div>
        <FormProvider {...methods}>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form style={{ width: '100%' }} onSubmit={methods.handleSubmit(submit)}>
            <FormTextInput id={FieldName.Email} label="Email" />
            <Button type="submit">Submit</Button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const token = await getToken({ req: context.req })
  const emptyProviders = {} as Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (token) {
    const destination = decodeURIComponent((context.query?.callbackUrl as string) || Route.Base)
    return {
      redirect: {
        destination,
        permanent: false,
      },
      props: {
        providers: emptyProviders,
      },
    }
  }

  const providers = await getProviders()
  return {
    props: {
      providers: providers ?? emptyProviders,
    },
  }
}

export default SignIn
