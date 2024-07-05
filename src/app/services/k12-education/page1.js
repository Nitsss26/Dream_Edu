"use client"
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
import Why from "@/components/Why"
import { useEffect, useState } from "react"

// export const metadata = {
//   title: 'Dream Education/ K-12 Education',
//   description: 'Optimizing educational resources and materials for K-12 curriculum.',
// }

const K12Education = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/k12-education/66728f23e1914ecff96b2110`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <section className="h-screen flex justify-center items-center">
          <div className="lds-ripple"><div></div><div></div></div>
        </section></>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const sections = [
    {
      section: <WebHero data={data} />
    },
    {
      section: <WeDev data={data} />
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
      section: <Why />
    },
    // {
    //   section: <Feature content={content} mainHeading={`A Good Website Means More Business Leads, More <span class="highlight">Customers</span>`} />
    // },
    // {
    //   section: <WebStats />
    // },
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