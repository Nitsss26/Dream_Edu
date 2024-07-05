import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Smo = ({ data }) => {
  const formatDescription = (text) => {
    const boldWords = ['JEE', 'NEET', 'GATE', 'CAT', 'UPSC', 'GMAT', 'PSU'];
    const extraBoldWords = ['Up to Postgraduate Level:', 'Wide Range of Subjects:', 'Quick Turnaround:', 'Boost Academic Skills:', 'Personalized Learning:', 'Flexible Schedules:', 'Timely Assistance:', 'Quality Assurance:', 'Trusted by Top Platforms:', 'Community of Experts:', 'Rewards for Expertise:'];

    let formattedText = text;

    boldWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      formattedText = formattedText.replace(regex, '<b>$1</b>');
    });

    extraBoldWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      formattedText = formattedText.replace(regex, '<span class="font-extrabold">$1</span>');
    });

    formattedText = formattedText.replace(/\/endline/g, '<br><br>');

    return formattedText.split('<br>').filter(item => item.trim() !== '').map((item, index) => (
      <li key={index} className="flex gap-x-2 font-bold">
        <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
        <span dangerouslySetInnerHTML={{ __html: item.trim() }} />
      </li>
    ));
  };

  return (
    <section className="we-are-area md:-mt-24 py-8 md:py-32 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative lg:px-10 xl:px-0">

        <div className="my-auto order-2 md:order-1 md:-me-10">
          <div className="we-are-content xs:ms-2">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">
                {data.title.split(" ").map((word, index) => (
                  <>
                    {word === 'Doubt' || word === 'Solving' || word === 'Online' || word === 'Tutor' ? (
                      <span key={index} className="highlight">{word} </span>
                    ) : (
                      word + " "
                    )}
                  </>
                ))}
              </h2>
            </div>

            <p className="app__text font-bold -mt-3 text-xl">
              {data.description1}
            </p>

            <div className="md:flex xs:grid mt-6 xs:-ms-7 md:ms-0 xl:-ms-0">
              <div className="w-full md:w-1/2">
                <h1 className="xs:text-center md:text-justify lg:ms-7 text-xl font-extrabold highlight">{data.field1}</h1>
                <ul role="list" className="mt-5 space-y-8 app__text">
                  {formatDescription(data.description2)}
                </ul>
              </div>
              <div className="w-full md:w-1/2 xs:mt-7 md:mt-0">
                <h1 className="text-xl xs:text-center md:text-justify lg:ms-7 font-extrabold highlight">{data.field2}</h1>
                <ul role="list" className="mt-5 space-y-8 app__text">
                  {formatDescription(data.description3)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="we-are-img order-1 md:order-2">
          <div className="we-are-banner-img">
            <img src={data.image1} alt="SEM Marketing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smo;






// import image from "@/constant/Images/image";
// import { CheckCircleIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";

// const Smo = ({ data }) => {
//   return (
//     <section className="we-are-area md:-mt-24 py-8 md:py-32 flex items-center">
//       <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative lg:px-10 xl:px-0">

//         <div className="my-auto order-2 md:order-1 md:-me-10">
//           <div className="we-are-content xs:ms-2">
//             <div className="section-title">
//               <h2 className="pb-12 primary-heading">
//                 Your Trusted <span className="highlight">Doubt Solving</span> and <span className="highlight">Online Tutor</span> Partner
//               </h2>
//             </div>

//             <p className="app__text font-bold -mt-3 text-xl">
//               {data.description1}
//             </p>

//             <div className="md:flex xs:grid mt-6 xs:-ms-7 md:ms-0 xl:-ms-0">
//               <div className="w-full md:w-1/2">
//                 <h1 className="xs:text-center md:text-justify lg:ms-7 text-xl font-extrabold highlight">{data.field1}</h1>
//                 <ul role="list" className="mt-5 space-y-8 app__text">
//                   <li className="flex gap-x-2">
//                     <CheckCircleIcon
//                       className="mt-1 h-5 w-5 flex-none text-indigo-600"
//                       aria-hidden="true"
//                     />
//                     <span className="font-bold"> <span className="font-extrabold">Up to Postgraduate Level:</span> Whether it’s high school, undergraduate, or postgraduate level, we’ve got you covered.</span>
//                   </li>
//                   <li className="flex gap-x-2">
//                     <CheckCircleIcon
//                       className="mt-1 h-5 w-5 flex-none text-indigo-600"
//                       aria-hidden="true"
//                     />
//                     <span className="font-bold" > <span className="font-extrabold">Wide Range of Subjects:</span> Explore various subjects with us, from mathematics to literature, for your doubt solving.</span>
//                   </li>
//                   <li className="flex gap-x-2">
//                     <CheckCircleIcon
//                       className="mt-1 h-5 w-5 flex-none text-indigo-600"
//                       aria-hidden="true"
//                     />
//                     <span className="font-bold"> <span className="font-extrabold">Quick Turnaround:</span> Our team of experts can solve any doubt within 30 minutes.</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="w-full md:w-1/2 xs:mt-7 md:mt-0">
//                 <h1 className="text-xl xs:text-center md:text-justify lg:ms-7 font-extrabold highlight">{data.field2}</h1>
//                 <ul role="list" className="mt-5 space-y-8 app__text">
//                   <li className="flex gap-x-2">
//                     <CheckCircleIcon
//                       className="mt-1 h-5 w-5 flex-none text-indigo-600"
//                       aria-hidden="true"
//                     />
//                     <span className="font-bold"> <span className="font-extrabold">Boost Academic Skills:</span> Sharpen knowledge to crack competitive exams like <b>JEE, NEET, GATE, CAT, UPSC, GMAT, and PSU.</b></span>
//                   </li>
//                   <li className="flex gap-x-2">
//                     <CheckCircleIcon
//                       className="mt-1 h-5 w-5 flex-none text-indigo-600"
//                       aria-hidden="true"
//                     />
//                     <span className="font-bold"> <span className="font-extrabold">Personalized Learning:</span> Our experienced tutors provide one-on-one sessions tailored to each student&apos;s educational need.</span>
//                   </li>
//                   <li className="flex gap-x-2">
//                     <CheckCircleIcon
//                       className="mt-1 h-5 w-5 flex-none text-indigo-600"
//                       aria-hidden="true"
//                     />
//                     <span className="font-bold"> <span className="font-extrabold">Flexible Schedules:</span> No need to travel students can learn from the comfort of their homes.</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="we-are-img order-1 md:order-2">
//           <div className="we-are-banner-img">
//             <Image src={image.semMarketing} alt="SEM Marketing" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Smo;
