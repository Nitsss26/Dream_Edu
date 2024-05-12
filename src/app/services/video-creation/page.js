import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactForm from "@/components/ContactPage/ContactForm"
import Ppc from "@/components/PPC/Ppc"
import Trend from "@/components/PPC/Trend"
import WeHelp from "@/components/PPC/WeHelp"
import Why from "@/components/Why"

// export const metadata = {
//   title: 'Dream Education / Educational Video Creation',
//   description: 'Engaging educational videos.',
// }
const sections = [
  // {
  //   section: <Ppc />
  // },
  {
    section: <Trend />
  },
  {
    section: <WeHelp name={"Video Creation Service"} />
  },
  {
    section: <Why />
  },
  {
    section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
  }
]
const PpcService = () => {
  return (
    <>
      {/* <Breadcrumbs name={"PPC Services"} /> */}
      {sections.map((i, k) => {
        return (
          <PageWrapper key={k}>
            {i.section}
          </PageWrapper>
        )
      })}
    </>
  )
}

export default PpcService