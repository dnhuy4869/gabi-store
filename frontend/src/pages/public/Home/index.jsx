import PageLayout from "components/page-layout"
import SliderSection from "./Slider"
import CategorySection from "./category"
import BrandSection from "./brand"
import DescriptionSection from "./description"
import BestSellingSection from "./best-selling"
import SuggestionSection from "./suggestion"

import Question from "./Question"
import Story from "./Story"

export default function HomePage() {
    return (
        <PageLayout title="Trang chủ">
            <SliderSection />
            {/* <Question/> */}
            <CategorySection />
            <BrandSection />
            <BestSellingSection />
            <SuggestionSection />
            <DescriptionSection />
            <Story />
        </PageLayout>
    )
}