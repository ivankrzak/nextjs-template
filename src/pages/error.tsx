import { ErrorKey } from 'api/errors'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Route } from 'constants/common/routes'
import { Button } from 'components/ui/button'

const Error = () => {
  const router = useRouter()
  const errorMessageQuery =
    router.query?.errorMessage instanceof Array
      ? router.query?.errorMessage[0]
      : router.query?.errorMessage || 'Unknown'
  const errorMessage = errorMessageQuery as keyof typeof ErrorKey

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
              common:Error
            </h1>
            {/* <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p> */}
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {errorMessage ? <p>{errorMessage}</p> : ''}
            </p>
            <Link passHref href={Route.Base}>
              <Button className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4">
                common:Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
                {t('common:Error')}
              </Heading>
              {errorMessage ? (
                <Text>{t(`error:${errorMessage}`, { defaultValue: t('error:Unknown') })}</Text>
              ) : (
                ''
              )}
              <HStack spacing="1" justify="center">
                <Text color="muted">{t('common:GoBack')}</Text>
                <Link passHref href={Route.Base}>
                  <Button variant="link" colorScheme="blue">
                    {t('common:Home')}
                  </Button>
                </Link>
              </HStack>
            </Stack>
          </Stack>
        </Stack>
      </Container> */}
    </>
  )
}

export const getServerSideProps = (context: GetServerSidePropsContext) => ({
  props: { ...context },
})

export default Error
