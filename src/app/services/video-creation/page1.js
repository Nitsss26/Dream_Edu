// import { PageWrapper } from "@/app/page-wrapper"
// import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
// import ContactForm from "@/components/ContactPage/ContactForm"
// import Ppc from "@/components/PPC/Ppc"
// import Trend from "@/components/PPC/Trend"
// import WeHelp from "@/components/PPC/WeHelp"
// import Why from "@/components/Why"

// export const metadata = {
//   title: 'Dream Education / Educational Video Creation',
//   description: 'Engaging educational videos.',
// }
// const sections = [
//   // {
//   //   section: <Ppc />
//   // },
//   {
//     section: <Trend />
//   },
//   {
//     section: <WeHelp name={"Video Creation Service"} />
//   },
//   {
//     section: <Why />
//   },
//   {
//     section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
//   }
// ]
// const PpcService = () => {
//   return (
//     <>
//       {/* <Breadcrumbs name={"PPC Services"} /> */}
//       {sections.map((i, k) => {
//         return (
//           <PageWrapper key={k}>
//             {i.section}
//           </PageWrapper>
//         )
//       })}
//     </>
//   )
// }

// export default PpcService

"use client"
import { PageWrapper } from "@/app/page-wrapper"
import { useEffect, useState } from "react"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactForm from "@/components/ContactPage/ContactForm"
import Ppc from "@/components/PPC/Ppc"
import Trend from "@/components/PPC/Trend"
import WeHelp from "@/components/PPC/WeHelp"
import Why from "@/components/Why"


const PpcService = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/video-creation/6671c4135302c4b4c458d02c`);
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
      <section className="h-screen flex justify-center items-center">
        <div className="lds-ripple"><div></div><div></div></div>
      </section>
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
      section: <Trend data={data} />
    },
    {
      section: <WeHelp name={"Video Creation Service"} data={data} />
    },
    {
      section: <Why />
    },
    {
      section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
    }
  ]

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