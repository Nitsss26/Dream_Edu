'use client'
import { motion } from 'framer-motion'
import { ChartBarIcon, DocumentMagnifyingGlassIcon, MagnifyingGlassIcon, PresentationChartBarIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import image from '@/constant/Images/image';

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

const ServiceInclude = () => {
  const services = [
    {
      heading: "Live Doubt Solving",
      desc: "Get instant answers to your academic questions. Our experts cover topics from JEE/NEET and other exams.",
      imgUrl: UserCircleIcon,
      hoverBg: "pink-hover",
      iconColor: "pink-text",
      img: image.w
    },
    {
      heading: "Online Tutoring",
      desc: "Personalized one-on-one sessions with experienced tutors. Master concepts and boost your scores.",
      imgUrl: ChartBarIcon,
      hoverBg: "paste-hover",
      iconColor: "paste-text",
      img: image.x
    },
    {
      heading: "Study Material",
      desc: "Access curated study resources, including NCERT solutions, sample papers, and previous year exam papers.",
      imgUrl: DocumentMagnifyingGlassIcon,
      hoverBg: "yellow-hover",
      iconColor: "yellow-text",
      img: image.y
    },
    {
      heading: "Subject Diversity",
      desc: "Covering a wide range of subjects: Physics, Chemistry, Biology, Mathematics, and more.",
      imgUrl: MagnifyingGlassIcon,
      hoverBg: "purple-hover",
      iconColor: "purple-text",
      img: image.z
    }
  ];

  return (
    <section className="py-16 md:py-12">
      <div className="app__container">
        <div className="row">
          <div className="primary-heading pb-12 text-center">
            <h2>What Our <br /><span className='highlight'>Services</span> Include</h2>
          </div>
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-5 xl:px-0">
          {
            services.map((index, key) => {
              return (
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
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceInclude