import AboutWorking from "@/components/About/AboutWorking/AboutWorking"
import Award from "@/components/About/Award/Award"
import BestFeature from "@/components/About/BestFeature/BestFeature"
import { PageWrapper } from "../page-wrapper"
import ContactForm from "@/components/ContactPage/ContactForm"
import Director from "../Director/page"

export const metadata = {
  title: 'Dream Education / About',
  description: 'Welcome To Dream Education',
}
const aboutSections = [
  {
    section: <Director />
  },
  {
    section: <Award />
  },
  {
    section: <BestFeature />
  },
  {
    section: <AboutWorking />
  },

]
const About = () => {
  return (
    <>
      {
        aboutSections.map((i) => {
          return (
            <PageWrapper key={i}>
              {i.section}
            </PageWrapper>
          )
        })
      }
    </>
  )
}

export default About