"use client"
import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactForm from "@/components/ContactPage/ContactForm"
import SemService from "@/components/SMO/SemService"
import ServiceInclude from "@/components/SMO/ServiceInclude"
import { useEffect, useState } from "react"
import Smo from "@/components/SMO/Smo"
import Why from "@/components/Why"

// export const metadata = {
//   title: 'Dream Education/ Live Tutoring & Doubt Solving',
//   description: 'Personalized tutoring & doubt solving.',
// }


const SmoService = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/live_tutoring-doubt_solving/6672cb669fad5cc5c1f3a307`);
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
      section: <Smo data={data} />
    }, {
      section: <SemService data={data} />
    }, {
      section: <ServiceInclude data={data} />
    },
    {
      section: <Why />
    }, {
      section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
    }
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

export default SmoService