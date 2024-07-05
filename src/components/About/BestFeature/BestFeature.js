// 'use client'
// import { motion } from 'framer-motion'
// import image from "@/constant/Images/image"
// import { ComputerDesktopIcon } from "@heroicons/react/20/solid"
// import { ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
// import Image from "next/image"

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
//     y: 30,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const BestFeature = () => {
//   const feature = [{
//     name: "On Page SEO",
//     description: "Our On-Page SEO service optimizes your website's elements to enhance search engine visibility and ranking.",
//     icon: ComputerDesktopIcon
//   },
//   {
//     name: "JEE/NEET Solution",
//     description: "Our JEE NEET solution writing service delivers quality content to drive conversions and resonate with students.",
//     icon: ArrowPathIcon
//   }, {
//     name: "Live Tutoring & Doubt Solving",
//     description: "To enhance doubt-solving and tutoring, we customize our product design for adaptability and thorough coverage.",
//     icon: ArrowTrendingUpIcon
//   },]
//   return (
//     <div className="bg-slate-50">
//       <div className="app__container py-24 xl:py-20 lg:px-9 xl:px-0">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
//           <motion.div variants={variants} initial="hidden" whileInView="show" className="my-auto">
//             <h1 className="primary-heading xs:text-center md:text-justify mb-4">Our Best <span className="highlight">Services</span></h1>
//             {
//               feature.map((i, k) => {
//                 return (
//                   <motion.div variants={items} key={k} className="flex gap-4 my-6 shadow-lg py-10 px-6">
//                     <div className="flex h-16 w-16 mb-4 items-center justify-center rounded-full bg-white">
//                       <div className="absolute half-circle rounded-full animate-[spin_3s_linear_infinite] z-1">
//                         <div className="half-circle-child rounded-full"></div>
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h1 className="text-xl font-bold mb-4">{i.name}</h1>
//                       <p className='app__text font-bold'>{i.description}</p>
//                     </div>
//                   </motion.div>
//                 )
//               })
//             }
//           </motion.div>
//           <div className="xl:ms-24 my-auto">
//             <Image src={image.aboutAni} alt="about" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BestFeature


'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ComputerDesktopIcon, ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

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
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const BestFeature = () => {
  const [data, setData] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about/666ddfa3f806f21ce41b74df`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    // Restore scroll position
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 1));
    }

    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    };

    window.addEventListener('beforeunload', saveScrollPosition);
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []);

  if (!data) {
    return (
      <div className="h-screen flex justify-center items-center hidden">
        <div className="lds-ripple"><div></div><div></div></div>
      </div>
    );
  }

  const feature = [
    {
      name: data.field2,
      description: data.description1,
      icon: ComputerDesktopIcon
    },
    {
      name: data.field3,
      description: data.description2,
      icon: ArrowPathIcon
    },
    {
      name: data.field4,
      description: data.description3,
      icon: ArrowTrendingUpIcon
    },
  ];

  return (
    <div className="bg-slate-50" ref={scrollRef}>
      <div className="app__container py-24 xl:py-20 lg:px-9 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div variants={variants} initial="hidden" whileInView="show" className="my-auto">
            <h1 className="primary-heading xs:text-center md:text-justify mb-4">{data.title} <span className="highlight">{data.field1}</span></h1>
            {
              feature.map((i, k) => (
                <motion.div variants={items} key={k} className="flex gap-4 my-6 shadow-lg py-10 px-6">
                  <div className="flex h-16 w-16 mb-4 items-center justify-center rounded-full bg-white">
                    <div className="absolute half-circle rounded-full animate-[spin_3s_linear_infinite] z-1">
                      <div className="half-circle-child rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-xl font-bold mb-4">{i.name}</h1>
                    <p className='app__text font-bold'>{i.description}</p>
                  </div>
                </motion.div>
              ))
            }
          </motion.div>
          <div className="xl:ms-24 my-auto">
            <img src={data.image1} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestFeature;
