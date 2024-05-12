"use client"
import { motion } from 'framer-motion'
import { ChartBarIcon, DocumentMagnifyingGlassIcon, MagnifyingGlassIcon, PresentationChartBarIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import image from '@/constant/Images/image';
import { PageWrapper } from '@/app/page-wrapper';
import Why from '@/components/Why';
import ContactForm from '@/components/ContactPage/ContactForm';
import Head from 'next/head';


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

const Seo = () => {
    const service = [
        {
            heading: "Translation Services",
            desc: "Utilizing a team of native speakers and industry experts to ensure the highest level of accuracy and fluency in multiple languages.",
            imgUrl: UserCircleIcon,
            hoverBg: "pink-hover",
            iconColor: "pink-text"
            , img: image.k
        },
        {
            heading: "Subtitling Services",
            desc: "Accurate and clear subtitling in over 70 languages for video content, catering to global video providers, broadcasters, individuals, and companies.",
            imgUrl: ChartBarIcon,
            hoverBg: "paste-hover",
            iconColor: "paste-text"
            , img: image.l
        },
        {
            heading: "Voice Over Services",
            desc: "Professional voiceover services by well-trained voice actors, conveying emotions and preserving the significance of the message.",
            imgUrl: DocumentMagnifyingGlassIcon,
            hoverBg: "yellow-hover",
            iconColor: "yellow-text"
            , img: image.n
        },
        {
            heading: "Dubbing Services",
            desc: "Exceptional dubbing services provided by professional voice artists, video editors, and language experts, preserving the original intent and tone.",
            imgUrl: MagnifyingGlassIcon,
            hoverBg: "purple-hover",
            iconColor: "purple-text"
            , img: image.o
        }, {
            heading: "Closed Captioning",
            desc: "Premium closed captioning services with an accuracy rate of 99%, trusted by clients globally for their captioning needs.",
            imgUrl: UserCircleIcon,
            hoverBg: "pink-hover",
            iconColor: "pink-text"
            , img: image.p
        },
        {
            heading: "Storyline Translation",
            desc: "Professional storyline translation catering to a wide range of industries and target audiences, with customized solutions in over 170 languages and dialects.",
            imgUrl: ChartBarIcon,
            hoverBg: "paste-hover",
            iconColor: "paste-text"
            , img: image.q
        },
        {
            heading: "Transcription Services",
            desc: "Professional audio and video transcription services designed to make content more searchable, scannable, and SEO-friendly.",
            imgUrl: DocumentMagnifyingGlassIcon,
            hoverBg: "yellow-hover",
            iconColor: "yellow-text"
            , img: image.r
        },
        {
            heading: "Localization Services",
            desc: "Providing unparalleled translation and localization services, committed to achieving 100% precision with ISO certifications.",
            imgUrl: MagnifyingGlassIcon,
            hoverBg: "purple-hover",
            iconColor: "purple-text"
            , img: image.s
        }
    ];

    return (
        <PageWrapper>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <section className="md:-mt-12 ">
                <div className="app__container relative isolate overflow-hidden bg-white px-6 py-24 sm:py-24 sm:mt-10 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 font-semibold">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-lg">
                                    <p className="text-4xl font-semibold highlight mb-7">Localization Services</p>
                                    <h1 className="mt-2 primary-heading text-gray-900">Why Choose Our Localization Services?</h1>
                                    <p className="mt-6 app__text font-bold">
                                        Our localization services are designed to help you reach a global audience effectively. We ensure your content is accurately translated and culturally adapted for different regions, allowing you to connect with diverse audiences around the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                            <Image
                                className="xs:ms-10 md:h-96 md:w-auto md:justify-center lg:w-full lg:h-auto md:ms-0 lg:ms-6 xl:ms-20 max-w-none"
                                src={image.smo}
                                alt=""
                            />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 -mt-20 font-semibold">
                            <div className="lg:pr-4">
                                <div className="max-w-xl lg:max-w-lg">
                                    <h2 className="mt-4 text-2xl font-bold tracking-tight lg:mt-16 text-gray-900">How Our  <span className='highlight'>Localization</span> Services Can Benefit You</h2>
                                    <p className="mt-5 app__text font-bold">
                                        Our team of expert translators and language specialists ensures that your content is accurately translated into multiple languages while preserving its original meaning and tone. With our localization services, you can expand your global reach and connect with audiences worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-12 bg-slate-100">
                <div className="app__container">
                    <div className="row">
                        <div className="primary-heading pb-12 text-center">
                            <h2>What Our <br /><span className='highlight'>Services</span> Include</h2>
                        </div>
                    </div>
                    <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-5 xl:px-0">
                        {service.map((index, key) => (
                            <motion.div variants={items} key={key}>
                                <div className={`common-single-card px-6 py-12 ${index.hoverBg}`}>
                                    <div className="we-are-banner-img -mt-2 mb-4">
                                        <Image src={index.img} alt="PPC Trend" />
                                    </div>
                                    <div className={`common-card-icon mx-auto lg:w-[4.5rem] lg:h-auto bg-white xs:w-20 xs:h-20 p-4 shadow-lg rounded-full ${index.iconColor}`}>
                                        <index.imgUrl />
                                    </div>
                                    <div className=" text-center">
                                        <div className="card-title">
                                            <h3 className="text-xl font-bold mt-6 mb-3">{index.heading}</h3>
                                        </div>
                                        <p className='app__text text-base font-bold'>{index.desc}</p>
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
    )
}

export default Seo;