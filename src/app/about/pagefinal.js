// import AboutWorking from "@/components/About/AboutWorking/AboutWorking"
// import Award from "@/components/About/Award/Award"
// import BestFeature from "@/components/About/BestFeature/BestFeature"
// import { PageWrapper } from "../page-wrapper"
// import ContactForm from "@/components/ContactPage/ContactForm"
// import Director from "../Director/page"

// export const metadata = {
//   title: 'Dream Education / About',
//   description: 'Welcome To Dream Education',
// }
// const aboutSections = [
//   {
//     section: <Director />
//   },
//   {
//     section: <Award />
//   },
//   {
//     section: <BestFeature />
//   },
//   {
//     section: <AboutWorking />
//   },

// ]
// const About = () => {
//   return (
//     <>
//       {
//         aboutSections.map((i) => {
//           return (
//             <PageWrapper key={i}>
//               {i.section}
//             </PageWrapper>
//           )
//         })
//       }
//     </>
//   )
// }

// export default About
'use client';
import { useEffect, useState } from 'react';
import AboutWorking from "@/components/About/AboutWorking/AboutWorking";
import Award from "@/components/About/Award/Award";
import BestFeature from "@/components/About/BestFeature/BestFeature";
import { PageWrapper } from "../page-wrapper";
import Director from "../Director/page";

const aboutSections = [
    {
        component: Director,
    },
    {
        component: Award,
    },
    {
        component: BestFeature,
    },
    {
        component: AboutWorking,
    },
];

const About = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about/666dde9ef806f21ce41b74d8`);
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await response.json();
                setAboutData(data);
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };

        fetchAboutData();

        // Restore scroll position
        const savedScrollPosition = sessionStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition, 1));
        }

        const saveScrollPosition = () => {
            sessionStorage.setItem('scrollPosition', window.scrollY);
        };

        window.addEventListener('beforeunload', saveScrollPosition);
        window.addEventListener('scroll', saveScrollPosition);

        return () => {
            window.removeEventListener('beforeunload', saveScrollPosition);
            window.removeEventListener('scroll', saveScrollPosition);
        };
    }, []);

    if (!aboutData) {
        return (
            <section className="h-screen flex justify-center items-center">
                <div className="lds-ripple"><div></div><div></div></div>
            </section>
        );
    }

    return (
        <>
            {aboutSections.map(({ component: Component }, index) => (
                <PageWrapper key={index}>
                    <Component aboutData={aboutData} />
                </PageWrapper>
            ))}
        </>
    );
};

export default About;
