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

const ServiceInclude = ({ data }) => {
  const services = [
    {
      heading: data.field5,
      desc: data.description5,
      imgUrl: UserCircleIcon,
      hoverBg: "pink-hover",
      iconColor: "pink-text",
      img: data.image3
    },
    {
      heading: data.field6,
      desc: data.description6,
      imgUrl: ChartBarIcon,
      hoverBg: "paste-hover",
      iconColor: "paste-text",
      img: data.image4
    },
    {
      heading: data.field7,
      desc: data.description7,
      imgUrl: DocumentMagnifyingGlassIcon,
      hoverBg: "yellow-hover",
      iconColor: "yellow-text",
      img: data.image5
    },
    {
      heading: data.field8,
      desc: data.description8,
      imgUrl: MagnifyingGlassIcon,
      hoverBg: "purple-hover",
      iconColor: "purple-text",
      img: data.image6
    },
    {
      heading: data.field9,
      desc: data.description9,
      imgUrl: UserCircleIcon,
      hoverBg: "pink-hover",
      iconColor: "pink-text",
      img: data.image7
    },
    {
      heading: data.field10,
      desc: data.description10,
      imgUrl: ChartBarIcon,
      hoverBg: "paste-hover",
      iconColor: "paste-text",
      img: data.image8
    },
    {
      heading: data.field11,
      desc: data.field13,
      imgUrl: DocumentMagnifyingGlassIcon,
      hoverBg: "yellow-hover",
      iconColor: "yellow-text",
      img: data.image9
    },
    {
      heading: data.field12,
      desc: data.field14,
      imgUrl: MagnifyingGlassIcon,
      hoverBg: "purple-hover",
      iconColor: "purple-text",
      img: data.image10
    }
  ];

  function highlightText(text) {
    const wordsToHighlight = ['Services'];
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
  }

  const splitText = data.field4.split("/endline");

  return (
    <section className="py-16 md:py-12">
      <div className="app__container">
        <div className="row">
          <div className="primary-heading pb-12 text-center">
            <h2>{splitText[0]} <br />{highlightText(splitText[1])}</h2>
          </div>
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-5 xl:px-0">
          {
            services.map((index, key) => {
              return (
                <motion.div variants={items} key={key}>
                  <div className={`common-single-card px-6 py-12 ${index.hoverBg} ${index.heading && index.desc && index.img ? 'visible' : 'hidden'}`}>
                    <div className="we-are-banner-img -mt-2 mb-4">
                      <img src={index.img} alt="PPC Trend" />
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