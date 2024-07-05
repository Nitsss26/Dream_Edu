"use client"
import { PageWrapper } from '@/app/page-wrapper'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Cta from '@/components/CTA/Cta'
import ContactForm from '@/components/ContactPage/ContactForm'
import DigitalMarketing from '@/components/DigitalMarketing/DigitalMarketing'
import FeaturedService from '@/components/DigitalMarketing/FeaturedService'
import Influencer from '@/components/DigitalMarketing/Influencer'
import Marketing from '@/components/DigitalMarketing/Marketing'
import Why from '@/components/Why'
import { useState, useEffect } from 'react'

const DigitalM = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/writing-service/66727dcee1914ecff96b20f2`);
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
      section: <DigitalMarketing data={data} />
    },
    {
      section: <Influencer data={data} />
    },
    // {
    //   section: <FeaturedService />
    // },
    {
      section: <Marketing data={data} />
    },
    // {
    //   section: <Cta heading={"Digital Marketing SMO & SEO Solution!"} para={"Our digital marketing solutions encompass both SMO (Social Media Optimization) and SEO (Search Engine Optimization) strategies, designed to maximize online visibility and engagement for businesses."} />
    // },
    {
      section: <Why />
    }, {
      section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
    }
  ]

  return (
    <>
      {/* <Breadcrumbs name={"Digital Marketing"}/> */}
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

export default DigitalM