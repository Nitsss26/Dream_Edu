import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactForm from "@/components/ContactPage/ContactForm"
import SemService from "@/components/SMO/SemService"
import ServiceInclude from "@/components/SMO/ServiceInclude"
import Smo from "@/components/SMO/Smo"
import Why from "@/components/Why"

export const metadata = {
  title: 'Dream Education/ Live Tutoring & Doubt Solving',
  description: 'Personalized tutoring & doubt solving.',
}
const sections = [
  {
    section: <Smo />
  }, {
    section: <SemService />
  }, {
    section: <ServiceInclude />
  },
  {
    section: <Why />
  }, {
    section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
  }
]
const SmoService = () => {
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

export default SmoService