'use client';
import { motion } from 'framer-motion';
import { CheckBadgeIcon, MagnifyingGlassIcon, PresentationChartLineIcon, SpeakerWaveIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

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


const SeoServices = ({ data }) => {

  const formatDescription = (text) => {
    const boldWords = ['effective', 'test creation', 'good preparation'];
    const extraBoldWords = ['meticulous attention', 'thorough', 'accurate', 'good preparation', 'test creation', 'accuracy', 'exam specialists', 'assessments', 'relevant topics', 'reliable', 'industry standards'];

    let formattedText = text;

    // Highlight words
    boldWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      formattedText = formattedText.replace(regex, '<b>$1</b>');
    });

    extraBoldWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      formattedText = formattedText.replace(regex, '<b class="highlight">$1</b>');
    });

    // Replace /endline with <br> tags
    formattedText = formattedText.replace(/\/endline/g, '<br>');

    return { __html: formattedText };
  };

  const highlightText = (text) => {
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



  const services = [{
    heading: data.field5,
    desc: data.description4,
    imgUrl: SpeakerWaveIcon,
    hoverBg: "pink-hover",
    iconColor: "pink-text"
  },
  {
    heading: data.field6,
    desc: data.description5,
    imgUrl: WrenchScrewdriverIcon,
    hoverBg: "paste-hover",
    iconColor: "paste-text"
  },
  {
    heading: data.field7,
    desc: data.description6,
    imgUrl: PresentationChartLineIcon,
    hoverBg: "yellow-hover",
    iconColor: "yellow-text"
  }];

  const benefits = [{
    heading: data.field9,
    desc: data.description7,
    imgUrl: CheckBadgeIcon,
    hoverBg: "pink-hover",
    iconColor: "pink-text"
  },
  {
    heading: data.field10,
    desc: data.description8,
    imgUrl: PresentationChartLineIcon,
    hoverBg: "paste-hover",
    iconColor: "paste-text"
  },
  {
    heading: data.field11,
    desc: data.description9,
    imgUrl: MagnifyingGlassIcon,
    hoverBg: "yellow-hover",
    iconColor: "yellow-text"
  }];

  return (
    <section className="py-16 md:py-16 -mt-2  bg-slate-100 ">
      <div className="app__container mb-12 ">
        <div className="row">
          <div className="pb-12 text-center">
            <h2 className='primary-heading mb-4'>{data.field3} <br />{highlightText(data.field4)}
            </h2>
            <p className='app__text font-bold' dangerouslySetInnerHTML={formatDescription(data.description3)}></p>
          </div>
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-5 xl:px-0">
          {services.map((service, key) => (
            <motion.div variants={items} key={key}>
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
        <div className="text-3xl font-extrabold mb-4 pt-12 pb-8 text-center">
          <h2>{data.field8}</h2>
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-5 xl:px-0">
          {benefits.map((benefit, key) => (
            <motion.div variants={items} key={key}>
              <div className={`common-single-card flex flex-col py-12 px-8 ${benefit.hoverBg}`}>
                <div className={`common-card-icon mx-auto ${benefit.iconColor}`}>
                  <benefit.imgUrl className='shadow-lg rounded-full h-16 w-16 p-4 bg-white' />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mt-8 mb-4">{benefit.heading}</h3>
                  <p className='text-base app__text font-bold' dangerouslySetInnerHTML={formatDescription(benefit.desc)}></p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SeoServices;



// 'use client'
// import { motion } from 'framer-motion'
// import { CheckBadgeIcon, MagnifyingGlassIcon, PresentationChartLineIcon, ShareIcon, SpeakerWaveIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

// const variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const items = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const SeoServices = ({ data }) => {
//   const services = [{
//     heading: "Blog SEO Service",
//     desc: "Elevate your online presence with our Blog SEO Service. We craft engaging and keyword-optimized blog posts that rank highly on search engines, driving organic traffic to your website and establishing you as an authority in your industry.",
//     imgUrl: SpeakerWaveIcon,
//     hoverBg: "pink-hover",
//     iconColor: "pink-text"
//   },
//   {
//     heading: "Article SEO Service",
//     desc: "Boost your website's visibility with our Article SEO Service. Our expert writers create keyword-rich articles that resonate with your audience and rank well on search engine results, driving targeted traffic and increasing conversions.",
//     imgUrl: WrenchScrewdriverIcon,
//     hoverBg: "paste-hover",
//     iconColor: "paste-text"
//   },
//   {
//     heading: "Website Content Writing",
//     desc: "Transform your website with our professional Website Content Writing service. We deliver SEO-friendly content that not only engages visitors but also improves your website's search engine ranking and business growth.",
//     imgUrl: PresentationChartLineIcon,
//     hoverBg: "yellow-hover",
//     iconColor: "yellow-text"
//   }]

//   const benefits = [{
//     heading: "Brand Building",
//     desc: "SMO helps brands in regularly engaging with their audience on social media. The more the engagement on social media, the users begin to trust and recommend your brand, product or service.",
//     imgUrl: CheckBadgeIcon,
//     hoverBg: "pink-hover",
//     iconColor: "pink-text"
//   },
//   {
//     heading: "Strong Online Presence",
//     desc: "With the large percentage of online activity happening on social media platforms, social media usage is always high. A strong SEO is extremely important for building stong online presence.",
//     imgUrl: PresentationChartLineIcon,
//     hoverBg: "paste-hover",
//     iconColor: "paste-text"
//   },
//   {
//     heading: "Improve Search Engine Ranking",
//     desc: "Your social media presence complements your seo efforts. Websites that have a high number of back-links from high-quality sources are more likely to be viewed by search engines.",
//     imgUrl: MagnifyingGlassIcon,
//     hoverBg: "yellow-hover",
//     iconColor: "yellow-text"
//   }]
//   return (
//     <section className="py-16 md:py-16 -mt-2  bg-slate-100 ">
//       <div className="app__container mb-12 ">
//         <div className="row">
//           <div className="pb-12 text-center">
//             <h2 className='primary-heading mb-4'>SEO Service <br />We Provide
//               <span className='highlight'> Special For You</span></h2>
//             <p className='app__text font-semibold'>Keyword Planning: A clear keyword strategy means pages will not compete.<br />
//               With one another for the same search terms. Each page will have a specific purpose.</p>
//           </div>

//         </div>
//         <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-5 xl:px-0">
//           {
//             services.map((index, key) => {
//               return (
//                 <motion.div variants={items} key={key}>
//                   <div className={`common-single-card flex flex-col py-12 px-8 ${index.hoverBg}`}>
//                     <div className={`common-card-icon mx-auto ${index.iconColor}`}>
//                       <index.imgUrl className='shadow-lg rounded-full h-16 w-16 p-4 bg-white' />
//                     </div>
//                     <div className="text-center">
//                       <h3 className="text-xl font-bold mt-8 mb-4">{index.heading}</h3>
//                       <p className='text-base app__text'>{index.desc}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               )
//             })
//           }
//         </motion.div>
//         <div className="text-3xl font-extrabold mb-4 pt-12 pb-8 text-center">
//           <h2>Benefits</h2>
//         </div>
//         <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-5 xl:px-0">
//           {
//             benefits.map((index, key) => {
//               return (
//                 <motion.div variants={items} key={key}>
//                   <div className={`common-single-card flex flex-col py-12 px-8 ${index.hoverBg}`}>
//                     <div className={`common-card-icon mx-auto ${index.iconColor}`}>
//                       <index.imgUrl className='shadow-lg rounded-full h-16 w-16 p-4 bg-white' />
//                     </div>
//                     <div className="text-center">
//                       <h3 className="text-xl font-bold mt-8 mb-4">{index.heading}</h3>
//                       <p className='text-base app__text font-bold'>{index.desc}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               )
//             })
//           }
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default SeoServices