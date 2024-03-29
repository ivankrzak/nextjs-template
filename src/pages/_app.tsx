import { ApolloProvider } from '@apollo/client'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { useApollo } from 'hooks/useApollo'
import { useSetSentryUser } from 'hooks/useSetSentryUser'
import { NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import { Outfit } from 'next/font/google'
import { getSession, SessionProvider } from 'next-auth/react'
import { BaseAppProps, NextPageWithLayout } from 'types/next'
import { theme } from 'theme'
import { REFETCH_INTERVAL } from 'constants/common/auth'

/*
 Uncomment for SSG
const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
 */

type AppPropsWithLayout = AppProps<BaseAppProps> & {
  Component: NextPageWithLayout<BaseAppProps>
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const getLayout = Component.getLayout ?? ((page) => page)
  useSetSentryUser()

  return (
    <ApolloProvider client={apolloClient}>{getLayout(<Component {...pageProps} />)}</ApolloProvider>
  )
}

const outfit = Outfit({ subsets: ['latin'] })

const AppWithAuth = (props: AppPropsWithLayout) => {
  const { pageProps } = props
  return (
    <main className={outfit.className}>
      <SessionProvider session={pageProps.session} refetchInterval={REFETCH_INTERVAL}>
        <ChakraBaseProvider theme={theme}>
          <App {...props} />
        </ChakraBaseProvider>
      </SessionProvider>
    </main>
  )
}

AppWithAuth.getInitialProps = async (ctx: NextPageContext) => {
  const session = await getSession(ctx)
  return { pageProps: { session } }
}

export default AppWithAuth
