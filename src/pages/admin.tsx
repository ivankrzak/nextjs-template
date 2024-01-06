import type { NextPage } from 'next'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Route } from 'constants/common/routes'
import { Button } from 'components/ui/button'

const Admin: NextPage = () => {
  const { t } = useTranslation('admin')
  return (
    <div>
      <p>{t('page.title')}</p>
      <Link passHref href={Route.Base}>
        <Button>{t('page.Home')}</Button>
      </Link>
    </div>
  )
}

export const getServerSideProps = (context: GetServerSidePropsContext) => ({
  props: { ...context },
})

export default Admin
