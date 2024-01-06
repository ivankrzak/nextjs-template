import { Button, Input } from '@chakra-ui/react'
import { EMAIL_PROVIDER_ID, useEmailSignInForm } from 'hooks/useEmailSignInForm'
import { useLoginCallback } from 'hooks/useLoginCallback'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getToken } from 'next-auth/jwt'
import { BuiltInProviderType } from 'next-auth/providers'
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from 'next-auth/react'
import { LoginFormFieldName } from 'types/auth'
import { Route } from 'constants/common/routes'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'components/ui/form'

const SignIn = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useLoginCallback()
  const { register, isLoading, onSignInSubmit, ...rest } = useEmailSignInForm(providers)

  const providersWithoutEmail = Object.values(providers).filter(
    ({ id }) => id !== EMAIL_PROVIDER_ID,
  )

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          auth.signIn.toYourAccount
        </h2>
      </div>

      <div className="mt-10 gap-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form {...rest} register={register}>
          <form className="flex flex-col gap-4" onSubmit={onSignInSubmit}>
            <FormField
              control={rest.control}
              name={LoginFormFieldName.Email}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="auth.signIn.enterYourEmail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button>auth.signIn.continueWithEmail</Button>
          </form>
        </Form>
        {providersWithoutEmail.length > 0 && (
          <>
            <div className="my-4 flex items-center justify-center gap-2">
              <span className="text-center text-sm font-light text-gray-400">
                auth.signIn.orContinueWith
              </span>
            </div>
            <div className="flex gap-3">
              {providersWithoutEmail.map((provider) => (
                <Button
                  className="w-full"
                  type="button"
                  variant="outline"
                  key={provider.name}
                  onClick={() => {
                    void (() => signIn(provider.id))()
                  }}
                >
                  auth.signIn.withProvider
                </Button>
              ))}
            </div>
          </>
        )}
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
