import Hero from "@/components/Home/Hero/Hero";
import Feature from "@/components/Home/Feature/Feature";
import WeAre from "@/components/Home/WeAre/WeAre";
import WeMake from "@/components/Home/WeMake/WeMake";
import Prefer from "@/components/Home/Prefer/Prefer";
import { PageWrapper } from "./page-wrapper";
import HomeStats from "@/components/Home/Stats/HomeStats";
import Test from "@/components/Testimonials/Test";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import WeCan from "@/components/Home/WeCan/WeCan";
import ContactForm from "@/components/ContactPage/ContactForm";
import Blog from "@/components/Home/Blog/Blog";

export const metadata = {
  title: 'Dream Education ',
  description: 'Welcome To Dream Education.',
}

export default function Home() {
  const content = [{
    heading: "Solution Writing",
    description: "Our solution writing service bridges this gap, effectively conveying your brand's value in concise, compelling content.",
  }, {
    heading: "Video Solutions",
    description: "Our video solution services effectively showcase your brand's value, captivating audiences with engaging visual content."
  }, {
    heading: "Test Creation",
    description: "We excel in crafting custom test papers, enriching educational resources to elevate learning experiences for students."
  }, {
    heading: "K-12 Education",
    description: "We specialize in K-12 curriculum design, collaborating with educators to create impactful, industry-standard materials."
  }, {
    heading: "Books Writing",
    description: "We excel in book writing, crafting captivating narratives in collaboration with authors for impactful storytelling."
  }, {
    heading: "Translation",
    description: "We offer expert translation services, ensuring accurate and culturally sensitive communication across languages."
  }]



  const homeSections = [
    {
      page: <Feature content={content} mainHeading={`We Help You With Educational Solutions Like Video Tutorials, Test Creations, More For Our <span class="highlight">Popular Services</span>`} />
    },
    // {
    //   page: <WeAre />
    // },
    // {
    //   page: <WeCan />
    // },


    {
      page: <WeMake />
    },


    // {
    {
      page: <HomeStats />
    },
    //{
    //   page: <Prefer />
    // },



    {
      page: <Test />
    },


    {
      page: <CaseStudy />

    },
    // {
    //   page: <Blog />
    // },
    {
      page: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
    }
  ]
  return (
    <>
      <Hero />
      {homeSections.map((i, k) => {
        return (
          <PageWrapper key={k}>
            {i.page}
          </PageWrapper>
        )
      })}
    </>
  )
}
