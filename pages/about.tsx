import type { ReactElement } from 'react'
import LayoutIndex from '../components/LayoutIndex'
import type { NextPageWithLayout } from './_app'


const Page: NextPageWithLayout = () => {
  return (
    <div className='about-wrapper mt-5'>

    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutIndex>
      {page}
    </LayoutIndex>
  )
}

export default Page
