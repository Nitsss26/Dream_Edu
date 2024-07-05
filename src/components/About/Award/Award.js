// "use client"
// import Stats from '@/components/Home/Stats/Stats'
// import { ClipboardDocumentListIcon, CodeBracketIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
// import React from 'react'
// import { useState } from 'react';
// import CountUp from "react-countup";
// import ScrollTrigger from 'react-scroll-trigger'

// const Award = () => {
//   const [countingOn, setCountingOn] = useState(false)
//   const stats = [
//     { id: 1, name: 'Satisfied customer', value: <CountUp start={0} end={354} duration={2} />, icon: UserGroupIcon },
//     { id: 2, name: 'Happy Business Owners', value: <CountUp start={0} end={82} duration={2} />, icon: UserIcon },
//     { id: 3, name: 'Expert Instructors', value: <CountUp start={0} end={200} duration={2} />, icon: ClipboardDocumentListIcon },
//     { id: 4, name: 'Project Done', value: <CountUp start={0} end={258} duration={2} />, icon: CodeBracketIcon },
//   ]
//   return (
//     <section className='bg-slate-100 lg:-mt-20'>
//       <div className="app__container py-16 lg:py-32">
//         <div className='app__container'>
//           <div className='grid grid-cols-1 xs:ms-5 md:ms-24 md:grid-cols-2'>
//             <div>
//               <h1 className='primary-heading mb-8'>Award Wining <br /><span className='highlight'>Digital Agency</span> We Are</h1>
//               <p className='app__text font-bold text-lg'>Dream Education specializes in providing solutions and services to drive business growth and profitability. With our expertise and commitment, we empower companies to achieve their goals and maximize profits.</p>
//             </div>
//             <div className='mt-5 md:mt-36 lg:mt-9 md:ms-8 lg:ms-44 my-auto'>
//               <ul className='list-image-[url(yes.png)] list-inside text-base font-extrabold xs:mt-5 md:mt-0  app__text'>
//                 <strong><li>Make Sharing Content Easy</li>
//                   <li>Craft Engaging Visuals</li>
//                   <li>Rewarding Loyal Followers</li>
//                   <li>Offer Exclusive Discounts</li></strong>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center flex-col gap-y-12 pt-12">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
//             <ScrollTrigger onEnter={() => setCountingOn(true)} onExit={() => setCountingOn(false)}>
//               <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4 xs:mb-8 md:mb-0">
//                 {stats.map((stat, k) => {
//                   return (
//                     <div key={k} className="single-counter-two mx-auto flex w-full flex-col gap-y-4 py-10 px-5">
//                       <div className="flex justify-center items-center text-[#ff6a00]">
//                         <stat.icon className="h-12 w-12 " aria-hidden="true" />
//                       </div>
//                       <dd className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//                         {
//                           countingOn && <>{stat.value}+</>
//                         }
//                       </dd>
//                       <dt className="text-base font-extrabold leading-7 app__text">{stat.name}</dt>
//                     </div>
//                   )
//                 })}
//               </dl>
//             </ScrollTrigger>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Award

'use client';
import Stats from '@/components/Home/Stats/Stats';
import { ClipboardDocumentListIcon, CodeBracketIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const Award = ({ aboutData }) => {
  const [countingOn, setCountingOn] = useState(false);
  const stats = [
    { id: 1, name: aboutData.field12, value: <CountUp start={0} end={parseInt(aboutData.field11)} duration={2} />, icon: UserGroupIcon },
    { id: 2, name: aboutData.field14, value: <CountUp start={0} end={parseInt(aboutData.field13)} duration={2} />, icon: UserIcon },
    { id: 3, name: aboutData.field16, value: <CountUp start={0} end={parseInt(aboutData.field15)} duration={2} />, icon: ClipboardDocumentListIcon },
    { id: 4, name: aboutData.field18, value: <CountUp start={0} end={parseInt(aboutData.field17)} duration={2} />, icon: CodeBracketIcon },
  ];

  return (
    <section className='bg-slate-100 lg:-mt-20'>
      <div className="app__container py-16 lg:py-32">
        <div className='app__container'>
          <div className='grid grid-cols-1 xs:ms-5 md:ms-24 md:grid-cols-2'>
            <div>
              <h1 className='primary-heading mb-8'>
                {aboutData.field4} <br /><span className='highlight'>{aboutData.field5}</span> {aboutData.field6}
              </h1>
              <p className='app__text font-bold text-lg'>{aboutData.description2}</p>
            </div>
            <div className='mt-5 md:mt-36 lg:mt-9 md:ms-8 lg:ms-44 my-auto'>
              <ul className='list-image-[url(yes.png)] list-inside text-base font-extrabold xs:mt-5 md:mt-0 app__text'>
                <strong>
                  <li>{aboutData.field7}</li>
                  <li>{aboutData.field8}</li>
                  <li>{aboutData.field9}</li>
                  <li>{aboutData.field10}</li>
                </strong>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-y-12 pt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
            <ScrollTrigger onEnter={() => setCountingOn(true)} onExit={() => setCountingOn(false)}>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4 xs:mb-8 md:mb-0">
                {stats.map((stat, k) => (
                  <div key={k} className="single-counter-two mx-auto flex w-full flex-col gap-y-4 py-10 px-5">
                    <div className="flex justify-center items-center text-[#ff6a00]">
                      <stat.icon className="h-12 w-12 " aria-hidden="true" />
                    </div>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {countingOn && <>{stat.value}+</>}
                    </dd>
                    <dt className="text-base font-extrabold leading-7 app__text">{stat.name}</dt>
                  </div>
                ))}
              </dl>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
