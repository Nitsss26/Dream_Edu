"use client"
import { PageWrapper } from "@/app/page-wrapper"

import ContactForm from "@/components/ContactPage/ContactForm"
import Seo from "@/components/SEO/Seo"
import SeoServices from "@/components/SEO/SeoServices"
import Why from "@/components/Why"
import { useState, useEffect } from "react"
import { Whisper } from "next/font/google"

const SeoService = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/seo-services/667225435d6b1d619fc3c043`);
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

  return (
    <>

      <PageWrapper>
        <Seo data={data} />
      </PageWrapper>

      <PageWrapper>
        <SeoServices data={data} />
      </PageWrapper>

      <PageWrapper>
        <Why />
        <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
      </PageWrapper>
    </>
  )
}

export default SeoService