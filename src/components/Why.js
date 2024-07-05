// import { PageWrapper } from "@/app/page-wrapper"
// import { WebEngaging } from "@/components/WebDevelopment/WebEngaging"
// import WebStats from "@/components/WebDevelopment/WebStats"


// const Why = () => {

//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/higher-education/66730ab84b95d26ec6716ffc`);
//             const result = await response.json();
//             setData(result);
//         };

//         fetchData();
//     }, []);

//     useEffect(() => {
//         // Reset scroll position to top on component mount or teamData change
//         window.scrollTo(0, 0);

//         const saveScrollPosition = () => {
//             sessionStorage.setItem('scrollPosition', window.scrollY.toString());
//         };

//         window.addEventListener('beforeunload', saveScrollPosition);
//         return () => {
//             window.removeEventListener('beforeunload', saveScrollPosition);
//         };
//     }, [data]); // Trigger reset when teamData changes

//     if (!data) return (
//         <>
//             <section className="h-screen flex justify-center items-center">
//                 <div className="lds-ripple"><div></div><div></div></div>
//             </section></>
//     );

//     const sections = [

//         {
//             section: <WebEngaging data={data}/>
//         },

//         {
//             section: <WebStats data={data} />
//         },

//     ]
//     return (
//         <>
//             {
//                 sections.map((i, k) => {
//                     return (
//                         <PageWrapper key={k}>
//                             {i.section}
//                         </PageWrapper>
//                     )
//                 })
//             }
//         </>
//     )
// }

// export default Why

"use client"
import { useEffect, useState } from "react";
import { PageWrapper } from "@/app/page-wrapper";
import { WebEngaging } from "@/components/WebDevelopment/WebEngaging";
import WebStats from "@/components/WebDevelopment/WebStats";

const Why = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/higher-education/66730ab84b95d26ec6716ffc`);
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);

        const saveScrollPosition = () => {
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        };

        window.addEventListener('beforeunload', saveScrollPosition);
        return () => {
            window.removeEventListener('beforeunload', saveScrollPosition);
        };
    }, [data]);

    if (!data) return (
        <section className="h-screen flex justify-center items-center">
            <div className="lds-ripple"><div></div><div></div></div>
        </section>
    );

    const sections = [
        { section: <WebEngaging data={data} /> },
        { section: <WebStats data={data} /> },
    ];

    return (
        <>
            {sections.map((i, k) => (
                <PageWrapper key={k}>
                    {i.section}
                </PageWrapper>
            ))}
        </>
    );
};

export default Why;
