import { PageWrapper } from "@/app/page-wrapper"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Feature from "@/components/Home/Feature/Feature"
import Test from "@/components/Testimonials/Test"
import Powerful from "@/components/WebDevelopment/Powerful"
import WeDev from "@/components/WebDevelopment/WeDev"
import { WebEngaging } from "@/components/WebDevelopment/WebEngaging"
import WebHero from "@/components/WebDevelopment/WebHero"
import WebStats from "@/components/WebDevelopment/WebStats"
import WebWhyUs from "@/components/WebDevelopment/WebWhyUs"

// export const metadata = {
//   title: 'Dream Education/ K-12 Education',
//   description: 'Optimizing educational resources and materials for K-12 curriculum.',
// }
const K12Education = () => {

  const sections = [
    {
      section: <WebHero />
    },
    {
      section: <WeDev />
    },
    // {
    //   section: <ContactForm heading={`We will <span class="highlight">contact you!</span>`} color={"bg-white"} />
    // },
    // {
    //   section: <WebWhyUs />
    // },

    // {
    //   section: <Powerful />
    // },
    {
      section: <WebEngaging />
    },
    // {
    //   section: <Feature content={content} mainHeading={`A Good Website Means More Business Leads, More <span class="highlight">Customers</span>`} />
    // },
    {
      section: <WebStats />
    },
    // {
    //   section: <Test />
    // },
    {
      section: <ContactForm heading={`Get in Touch: Just a few Mins <span class="highlight">conversation</span>`} color={"bg-slate-100"} />
    },
    // {
    //   section: <ContactAddress />
    // }
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

export default K12Education