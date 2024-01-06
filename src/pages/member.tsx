import type { NextPage } from 'next'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { Route } from 'constants/common/routes'
import { Button } from 'components/ui/button'

const Member: NextPage = () => (
  <div>
    <p>page.title</p>
    <Link passHref href={Route.Base}>
      <Button>page.Home</Button>
    </Link>
  </div>
)

export const getServerSideProps = (context: GetServerSidePropsContext) => ({
  props: { ...context },
})

export default Member
