"use client"
import { motion } from 'framer-motion'
import { CheckBadgeIcon, MagnifyingGlassIcon, PresentationChartLineIcon, ShareIcon, SpeakerWaveIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
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
const services = [
  {
    heading: 'Comprehensive Curriculum Development',
    desc: 'Our comprehensive curriculum development services cater to the unique needs and requirements of K-12 education. Our team of experts designs comprehensive and engaging curriculum materials tailored to meet the diverse learning objectives of students.',
    imgUrl: PresentationChartLineIcon,
    hoverBg: 'pink-hover',
    iconColor: 'pink-text',
    img: image.a
  },

  {
    heading: 'Dynamic Student/Teacher Guides',
    desc: 'Our dynamic student and teacher guides offer comprehensive support and resources for effective teaching and learning. From lesson plans to activities, our guides provide valuable tools and strategies to enhance classroom instruction and student learning.',
    imgUrl: CheckBadgeIcon,
    hoverBg: 'yellow-hover',
    iconColor: 'yellow-text',
    img: image.b
  },
  {
    heading: 'Comprehensive Educational Resources',
    desc: 'Access a comprehensive range of educational resources curated specifically for K-12 education. From textbooks to digital materials, our resources cover various subjects and topics to support teaching and learning in the classroom.',
    imgUrl: WrenchScrewdriverIcon,
    hoverBg: 'purple-hover',
    iconColor: 'purple-text',
    img: image.c
  },
  {
    heading: 'Innovative Assessment Tools',
    desc: 'Utilize our innovative assessment tools to measure student progress and understanding across various subjects and topics. Our assessments are designed to provide valuable insights into student learning outcomes and inform instructional practices.',
    imgUrl: ShareIcon,
    hoverBg: 'yellow-hover',
    iconColor: 'yellow-text',
    img: image.d
  },
  {
    heading: 'Quality Assurance Services',
    desc: 'Our quality assurance services ensure the quality and effectiveness of educational materials and resources. Through rigorous checks and reviews, we guarantee that all content meets educational standards and aligns with curriculum objectives.',
    imgUrl: MagnifyingGlassIcon,
    hoverBg: 'pink-hover',
    iconColor: 'pink-text',
    img: image.e
  },
  {
    heading: 'Interactive Video Lessons',
    desc: 'Experience interactive learning with our engaging video lessons designed specifically for K-12 students. Our expert educators deliver dynamic and informative content that fosters student engagement and facilitates effective learning outcomes.',
    imgUrl: SpeakerWaveIcon,
    hoverBg: 'paste-hover',
    iconColor: 'paste-text',
    img: image.f
  },
];



export default function WeDev() {
  return (
    <section className="py-14 -mt-2  bg-slate-100">
      <div className="app__container mb-12">
        <div className="row">
          <div className="pb-12 text-center">
            <h2 className='primary-heading mb-4'>K-12 Education <br />We Provide
              <span className='highlight'> Special For You</span></h2>
            <p className='app__text text-xl font-extrabold'>Our services are designed to enrich the teaching and learning experience in K-12 education,<br />
              providing educators and students with the tools and resources they need to succeed</p>
          </div>

        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            services.map((index, key) => {
              return (
                <motion.div variants={items} key={key}>
                  <div className={`common-single-card flex flex-col py-12 px-8 ${index.hoverBg}`}>
                    <div className={`common-card-icon mx-auto ${index.iconColor}`}>
                      <index.imgUrl className='items-center shadow-lg mb-10 rounded-full md:h-16 md:w-16 xs:h-20 xs:w-20 p-4 bg-white' />
                    </div>
                    <Image src={index.img} alt="" />
                    <div className="text-center -mt-6">
                      <h3 className="text-xl font-bold mt-8 mb-4">{index.heading}</h3>
                      <p className='text-base font-semibold app__text'>{index.desc}</p>
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