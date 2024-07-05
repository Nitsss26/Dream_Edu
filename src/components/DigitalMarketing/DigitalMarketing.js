import { CheckCircleIcon } from '@heroicons/react/24/outline';

function formatDescription(description) {
  return description.split(' /endline').map((line, index) => (
    <span key={index} className="block">{line.trim()}</span>
  ));
}

function highlightText(text) {
  const wordsToHighlight = ['Writing', 'Services', 'YOUR', 'BUSINESS'];
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

export default function DigitalMarketing({ data }) {
  return (
    <section className="md:-mt-14">
      <div className="app__container relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-4xl font-extrabold mb-10">{highlightText(data.title)}</p>
                <h1 className="mt-2 primary-heading">{highlightText(data.field1)}</h1>
                <p className="mt-7 xs:text-xl lg:text-xl md:text-3xl leading-8 font-semibold text-gray-700">
                  {data.field2}
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 xs:p-6 lg:p-12 md:p-6 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <img
              className="w-full max-w-none xs:ms-5 lg:-ms-3 lg:mt-32 xl:ms-16"
              src={data.image1}
              alt=""
            />
          </div>
          <div className="-mt-2 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl lg:text-base md:text-xl font-semibold leading-7 lg:max-w-lg">
                <p className='app__text font-semibold'>
                  {formatDescription(data.description1)[0]}
                </p>
                <ul role="list" className="mt-8 space-y-8 app__text">
                  {formatDescription(data.description1).filter((line, index) => index !== 5).slice(1).map((line, index) => (
                    <li key={index} className="flex gap-x-3">
                      <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 app__text">
                  {formatDescription(data.description1)[5]}
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">{data.field3}</h2>
                <ul role="list" className="mt-8 space-y-8 app__text">
                  {formatDescription(data.description2).map((line, index) => (
                    <li key={index} className="flex gap-x-3">
                      <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// import { CheckCircleIcon } from '@heroicons/react/24/outline'

// export default function DigitalMarketing({ data }) {

//   const highlightText = (text) => {
//     const wordsToHighlight = ['Writing', 'Services', 'YOUR', 'BUSINESS'];
//     return (
//       <>
//         {text.split(' ').map((word, index) => {
//           const strippedWord = word.replace(/[.,]/g, ''); // Remove trailing punctuation
//           const trailingPunctuation = word.match(/[.,]/) ? word.match(/[.,]/)[0] : '';
//           const shouldHighlight = wordsToHighlight.includes(strippedWord);
//           return (
//             <span key={index}>
//               <span className={shouldHighlight ? 'highlight' : ''}>{strippedWord}</span>
//               {trailingPunctuation && <span>{trailingPunctuation} </span>}
//               {!trailingPunctuation && ' '}
//             </span>
//           );
//         })}
//       </>
//     );
//   };
//   return (
//     <section className="md:-mt-14">
//       <div className="app__container relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
//         <div className="absolute inset-0 -z-10 overflow-hidden">
//         </div>
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
//           <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
//             <div className="lg:pr-4">
//               <div className="lg:max-w-lg">
//                 <p className="text-4xl font-extrabold mb-10">{highlightText(data.title)}</p>
//                 <h1 className="mt-2 primary-heading">{highlightText(data.field1)}</h1>
//                 <p className="mt-7 xs:text-xl lg:text-xl md:text-3xl leading-8 font-semibold text-gray-700">
//                   {data.field2}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="-ml-12 -mt-12 xs:p-6 lg:p-12 md:p-6 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">

//             <img
//               className="w-full max-w-none xs:ms-5 lg:-ms-3 lg:mt-32 xl:ms-16"
//               src={data.image1}
//               alt=""
//             />
//           </div>
//           <div className="-mt-2 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
//             <div className="lg:pr-4">
//               <div className="max-w-xl lg:text-base md:text-xl font-semibold leading-7 lg:max-w-lg">
//                 <p className='app__text font-semibold'>
//                   Elevate your business with our expert writing services for your needs.
//                 </p>
//                 <ul role="list" className="mt-8 space-y-8 app__text">
//                   <li className="flex gap-x-3">
//                     <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                     <span>
//                       Engage a global audience and boost your online presence.
//                     </span>
//                   </li>
//                   <li className="flex gap-x-3">
//                     <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                     <span>
//                       Stay ahead of the competition with targeted marketing strategies.
//                     </span>
//                   </li>
//                   <li className="flex gap-x-3">
//                     <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                     <span>
//                       Build customer loyalty and drive engagement with compelling content.
//                     </span>
//                   </li>
//                   <li className="flex gap-x-3">
//                     <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                     <span>
//                       Measure and analyze the impact of your marketing efforts for continuous improvement.
//                     </span>
//                   </li>
//                 </ul>
//                 <p className="mt-8 app__text">
//                   Do not let your business fall behind. Take advantage of our writing services to establish a strong online presence and drive growth.
//                 </p>
//                 <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">OUR SERVICES INCLUDE:</h2>
//                 <ul role="list" className="mt-8 space-y-8 app__text">
//                   <li className="flex gap-x-3">
//                     <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                     <span>
//                       High-quality content creation tailored to your brand and audience.
//                     </span>
//                   </li>
//                   <li className="flex gap-x-3">
//                     <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                     <span>
//                       SEO optimization to improve your website visibility and search engine rankings.
//                     </span>
//                   </li>
//                   <li className="flex gap-x-3">
//                     <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                     <span>
//                       Social media management to enhance your online presence and engagement.
//                     </span>
//                   </li>
//                   <li className="flex gap-x-3">
//                     <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                     <span>
//                       Email marketing campaigns to reach and nurture your target audience.
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }