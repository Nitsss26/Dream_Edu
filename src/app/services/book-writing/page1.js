// 'use client'
// import { motion } from 'framer-motion'
// import { CheckBadgeIcon, MagnifyingGlassIcon, PresentationChartLineIcon, ShareIcon, SpeakerWaveIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
// import Image from "next/image"
// import image from "@/constant/Images/image"
// import { CheckCircleIcon } from "@heroicons/react/24/outline"
// import { PageWrapper } from "@/app/page-wrapper"
// import Why from '@/components/Why'
// import ContactForm from '@/components/ContactPage/ContactForm'

// export const metadata = {
//     title: 'Dream Education / Books Writing',
//     description: 'Professional book writing services.',
// }

// const variants = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.3,
//         },
//     },
// };

// const items = {
//     hidden: {
//         opacity: 0,
//         y: 20,
//     },
//     show: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 1,
//         },
//     },
// };

// const services = [
//     {
//         heading: "Study Material Creation",
//         desc: "Our study material creation service delivers meticulously crafted educational resources tailored to your needs, ensuring clarity and effectiveness in conveying complex concepts.",
//         imgUrl: SpeakerWaveIcon,
//         hoverBg: "pink-hover",
//         iconColor: "pink-text"
//     },
//     {
//         heading: "JEE/NEET Material",
//         desc: "We specialize in creating comprehensive JEE/NEET study materials, covering essential topics and providing in-depth explanations to aid students in exam preparation.",
//         imgUrl: WrenchScrewdriverIcon,
//         hoverBg: "paste-hover",
//         iconColor: "paste-text"
//     },
//     {
//         heading: "Teaching Study Material",
//         desc: "Our teaching study material service provides educators with high-quality resources to enhance classroom instruction, fostering engaging and effective learning experiences.",
//         imgUrl: PresentationChartLineIcon,
//         hoverBg: "yellow-hover",
//         iconColor: "yellow-text"
//     },
//     {
//         heading: "Practice Study Material",
//         desc: "We excel in crafting practice study material for institutes and educational organizations, offering targeted exercises and assessments to reinforce learning and improve student performance.",
//         imgUrl: CheckBadgeIcon,
//         hoverBg: "purple-hover",
//         iconColor: "purple-text"
//     },
//     {
//         heading: "Customized Curriculum",
//         desc: "We collaborate with educators to develop customized curriculum materials, aligning with educational standards and objectives to meet the unique needs of students and institutions.",
//         imgUrl: ShareIcon,
//         hoverBg: "red-hover",
//         iconColor: "red-text"
//     },
//     {
//         heading: "Educational Books",
//         desc: "Our educational book writing service delivers captivating narratives and informative content, collaborating with authors to create engaging textbooks and reference materials for academic use.",
//         imgUrl: MagnifyingGlassIcon,
//         hoverBg: "blue-hover",
//         iconColor: "blue-text"
//     },
// ];



// const BookWritingService = () => {
//     return (
//         <PageWrapper>
//             <section className="we-are-area py-16 md:py-16 flex items-center">
//                 <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative -mt-4 lg:px-9 xl:px-0">
//                     <div className="we-are-img xl:-ms-12">
//                         <div className="we-are-banner-img lg:mt-24">
//                             <Image src={image.webStrategy} alt="Book Writing Service" />
//                         </div>
//                     </div>
//                     <div className="my-auto">
//                         <div className="we-are-content">
//                             <div className="section-title">
//                                 <h2 className="pb-12 primary-heading">EXCEL YOUR <span className="highlight">EDUCATIONAL</span> MATERIAL WITH PREMIUM <span className="highlight">BOOK WRITING</span> SERVICES</h2>
//                             </div>

//                             <p className="app__text text-lg font-extrabold -mt-4 mb-4">When it comes to your educational resources, quality content is very important. At <span className="highlight">Dream Education</span>, we specialize in making perfect study materials and educational books as per your needs. From <span className="highlight">JEE/NEET</span> preparation guides to teaching study materials, we cover it all! 📚.</p>

//                             <ul className="mt-10 font-bold space-y-8 app__text">
//                                 <li className="flex gap-x-3">
//                                     <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                                     <span>
//                                         Our team creates study materials for various educational levels. Whether it&apos;s <span className="highlight">JEE/NEET</span> study guides or specialized teaching materials, we ensure comprehensive coverage and clarity.
//                                     </span>
//                                 </li>
//                                 <li className="flex gap-x-3">
//                                     <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                                     <span>
//                                         We excel in providing practice study material for institutes and educational organizations. Our <span className="highlight">materials</span>are designed to enhance learning outcomes and facilitate effective practice sessions.
//                                     </span>
//                                 </li>
//                                 <li className="flex gap-x-3">
//                                     <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                                     <span>
//                                         With our <span className="highlight">expert writers</span>, we deliver premium quality educational books tailored to your specific requirements. Whether it&apos;s curriculum-aligned textbooks or reference materials, we ensure accuracy, relevance, and clarity.
//                                     </span>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-16 md:py-16 -mt-2  bg-slate-100 ">
//                 <div className="app__container mb-12 ">
//                     <div className="row">
//                         <div className="pb-12 text-center">
//                             <h2 className='primary-heading mb-4'>Book Writing <br />We Provide
//                                 <span className='highlight'> Special For You</span></h2>
//                             <p className='app__text font-bold text-lg'>Book Writing Strategy: Our book writing strategy ensures each book serves its purpose.<br /> Our expert writers tailor content to your goals and audience.</p>

//                         </div>

//                     </div>
//                     <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-5 xl:px-0">
//                         {
//                             services.map((index, key) => {
//                                 return (
//                                     <motion.div variants={items} key={key}>
//                                         <div className={`common-single-card flex flex-col py-12 px-8 ${index.hoverBg}`}>
//                                             <div className={`common-card-icon mx-auto ${index.iconColor}`}>
//                                                 <index.imgUrl className='shadow-lg rounded-full h-16 w-16 p-4 bg-white' />
//                                             </div>
//                                             <div className="text-center">
//                                                 <h3 className="text-xl font-bold mt-8 mb-4">{index.heading}</h3>
//                                                 <p className='text-base app__text font-bold'>{index.desc}</p>
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 )
//                             })
//                         }
//                     </motion.div>
//                 </div>
//             </section>
//             <Why />
//             <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
//         </PageWrapper>
//     )
// }

// export default BookWritingService


'use client'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, MagnifyingGlassIcon, PresentationChartLineIcon, ShareIcon, SpeakerWaveIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import Image from "next/image"
import { useState, useEffect } from 'react'
import image from "@/constant/Images/image"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import { PageWrapper } from "@/app/page-wrapper"
import Why from '@/components/Why'
import ContactForm from '@/components/ContactPage/ContactForm'

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const items = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

const BookWritingService = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/book-writing/6670c315d3fef7f721387764`);
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

    const { title, description1, description2, description3, description4, description5, description6, description7, description8, description9, description10, image1, field1, field2, field3, field4, field5, field6, field7, field8, field9, field10, field11, field12, field13, field14 } = data;

    const services = [
        {
            heading: field2,
            desc: description5,
            imgUrl: SpeakerWaveIcon,
            hoverBg: "pink-hover",
            iconColor: "pink-text"
        },
        {
            heading: field3,
            desc: description6,
            imgUrl: WrenchScrewdriverIcon,
            hoverBg: "paste-hover",
            iconColor: "paste-text"
        },
        {
            heading: field4,
            desc: description7,
            imgUrl: PresentationChartLineIcon,
            hoverBg: "yellow-hover",
            iconColor: "yellow-text"
        },
        {
            heading: field5,
            desc: description8,
            imgUrl: CheckBadgeIcon,
            hoverBg: "purple-hover",
            iconColor: "purple-text"
        },
        {
            heading: field6,
            desc: description9,
            imgUrl: ShareIcon,
            hoverBg: "red-hover",
            iconColor: "red-text"
        },
        {
            heading: field7,
            desc: description10,
            imgUrl: MagnifyingGlassIcon,
            hoverBg: "blue-hover",
            iconColor: "blue-text"
        }, {
            heading: field8,
            desc: field11,
            imgUrl: SpeakerWaveIcon,
            hoverBg: "pink-hover",
            iconColor: "pink-text"
        }, {
            heading: field9,
            desc: field12,
            imgUrl: WrenchScrewdriverIcon,
            hoverBg: "paste-hover",
            iconColor: "paste-text"
        }, {
            heading: field10,
            desc: field13,
            imgUrl: PresentationChartLineIcon,
            hoverBg: "yellow-hover",
            iconColor: "yellow-text"
        },
    ];

    const highlightText = (text) => {
        const wordsToHighlight = ['EDUCATIONAL', 'BOOK', 'WRITING', 'Dream', 'Education', 'JEE/NEET', 'materials', 'expert', 'writers'];
        return (
            <>
                {text.split(' ').map((word, index) => {
                    const strippedWord = word.replace(/[.,]/g, ''); // Remove trailing punctuation
                    const trailingPunctuation = word.match(/[.,]/) ? word.match(/[.,]/)[0] : '';
                    const shouldHighlight = wordsToHighlight.includes(strippedWord);
                    return (
                        <span key={index}>
                            <span className={shouldHighlight ? 'highlight' : ''}>{strippedWord}</span>
                            {trailingPunctuation && <span>{trailingPunctuation} </span>}
                            {!trailingPunctuation && ' '}
                        </span>
                    );
                })}
            </>
        );
    };

    const highlightText2 = (text) => {
        const wordsToHighlight = ['Special', 'For', 'You'];
        return (
            <>
                {text.split(' ').map((word, index) => {
                    const strippedWord = word.replace(/[.,]/g, ''); // Remove trailing punctuation
                    const trailingPunctuation = word.match(/[.,]/) ? word.match(/[.,]/)[0] : '';
                    const shouldHighlight = wordsToHighlight.includes(strippedWord);
                    return (
                        <span key={index}>
                            <span className={shouldHighlight ? 'highlight' : ''}>{strippedWord}</span>
                            {trailingPunctuation && <span>{trailingPunctuation} </span>}
                            {!trailingPunctuation && ' '}
                        </span>
                    );
                })}
            </>
        );
    };

    const splitText = description4.split(".");
    const splitText2 = field1.split(".")

    return (
        <PageWrapper>
            <section className="we-are-area py-16 md:py-16 flex items-center">
                <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative -mt-4 lg:px-9 xl:px-0">
                    <div className="we-are-img xl:-ms-12">
                        <div className="we-are-banner-img lg:mt-24">
                            <img src={image1} alt="Book Writing Service" />
                        </div>
                    </div>
                    <div className="my-auto">
                        <div className="we-are-content">
                            <div className="section-title">
                                <h2 className="pb-12 primary-heading">{highlightText(description1)}</h2>
                            </div>

                            <p className="app__text text-lg font-extrabold -mt-4 mb-4">{highlightText(description2)}</p>

                            <ul className="mt-10 font-bold space-y-8 app__text">
                                <li className="flex gap-x-3">
                                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>{highlightText(description3.split('\n')[0])}</span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>{highlightText(description3.split('\n')[2])}</span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>{highlightText(description3.split('\n')[4])}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-16 -mt-2  bg-slate-100 ">
                <div className="app__container mb-12 ">
                    <div className="row">
                        <div className="pb-12 text-center">
                            <h2 className='primary-heading mb-4'>{splitText2[0]} <br />
                                {highlightText2(splitText2[1])}</h2>
                            <p className='app__text font-bold text-lg'>{splitText[0]}.<br /> {splitText[1]}</p>

                        </div>
                    </div>
                    <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-5 xl:px-0">
                        {services.map((service, key) => (
                            <motion.div variants={items} key={key} className={`${service.heading && service.desc ? 'visible' : 'hidden'}`}>
                                <div className={`common-single-card flex flex-col py-12 px-8 ${service.hoverBg}`}>
                                    <div className={`common-card-icon mx-auto ${service.iconColor}`}>
                                        <service.imgUrl className='shadow-lg rounded-full h-16 w-16 p-4 bg-white' />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold mt-8 mb-4">{service.heading}</h3>
                                        <p className='text-base app__text font-bold'>{service.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <Why />
            <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
        </PageWrapper>
    );
}

export default BookWritingService;
