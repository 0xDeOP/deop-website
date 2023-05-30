import type {ReactElement} from 'react'
import LayoutIndex from '../components/LayoutIndex'
import type {NextPageWithLayout} from './_app'
import BannerContent from '../components/IndexComponents/BannerContent'
import FeatureContent from "../components/IndexComponents/FeatureContent";
import CommonContent from "../components/IndexComponents/CommonContent";
import CategoryContent from "../components/IndexComponents/CategoryContent";
import TextMovingContent from "../components/IndexComponents/TextMovingContent";


const Page: NextPageWithLayout = () => {
    return (
        <div>
            <BannerContent></BannerContent>
            <FeatureContent></FeatureContent>
            <CommonContent></CommonContent>
            <CategoryContent></CategoryContent>
            <TextMovingContent></TextMovingContent>
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
