import { PageWrapper } from "@/app/page-wrapper"

import ContactForm from "@/components/ContactPage/ContactForm"
import Seo from "@/components/SEO/Seo"
import SeoServices from "@/components/SEO/SeoServices"
import Why from "@/components/Why"
import { Whisper } from "next/font/google"

// export const metadata = {
//   title: 'Dream Education/ SEO Based Cotent',
//   description: 'SEO-optimized content to enhance online presence.',
// }

const SeoService = () => {
  return (
    <>

      <PageWrapper>
        <Seo />
      </PageWrapper>

      <PageWrapper>
        <SeoServices />
      </PageWrapper>

      <PageWrapper>
        <Why />
        <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
      </PageWrapper>
    </>
  )
}

export default SeoService