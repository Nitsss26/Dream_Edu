import { PageWrapper } from "@/app/page-wrapper"
import { WebEngaging } from "@/components/WebDevelopment/WebEngaging"
import WebStats from "@/components/WebDevelopment/WebStats"


const Why = () => {

    const sections = [

        {
            section: <WebEngaging />
        },

        {
            section: <WebStats />
        },

    ]
    return (
        <>
            {
                sections.map((i, k) => {
                    return (
                        <PageWrapper key={k}>
                            {i.section}
                        </PageWrapper>
                    )
                })
            }
        </>
    )
}

export default Why