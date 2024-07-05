import image from "@/constant/Images/image"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const Trend = ({ data }) => {

  const highlightText = (text) => {
    const wordsToHighlight = ['VIDEO', 'CREATION'];
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
    const wordsToHighlight = ['Dream', 'Education', 'educational'];
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

  const highlightText3 = (text) => {
    const wordsToHighlight = ['explaining', 'brand', 'animated'];
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


  return (
    <section className="we-are-area py-16 md:py-16 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative -mt-4 lg:px-9 xl:px-0">
        <div className="we-are-img xl:-ms-12">
          <div className="we-are-banner-img">
            <img src={data.image1} alt="PPC Trend" />
          </div>
        </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">{highlightText(data.field1)}</h2>
            </div>

            <p className="app__text text-lg font-extrabold -mt-4 mb-4">{highlightText2(data.description1)}</p>

            <ul role="list" className="mt-10 font-bold space-y-8 app__text">
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  {highlightText3(data.description2.split('\n')[0])}
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  {highlightText3(data.description2.split('\n')[1])}
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  {highlightText3(data.description2.split('\n')[2])}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trend

// import { CheckCircleIcon } from "@heroicons/react/24/outline"
// import Image from "next/image"
// import image from "@/constant/Images/image"

// const Trend = ({ title, description1, description2 }) => {
//   return (
//     <section className="we-are-area py-16 md:py-16 flex items-center">
//       <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative -mt-4 lg:px-9 xl:px-0">
//         <div className="we-are-img xl:-ms-12">
//           <div className="we-are-banner-img">
//             <Image src={image.ppcTrend} alt="PPC Trend" />
//           </div>
//         </div>
//         <div className="my-auto">
//           <div className="we-are-content">
//             <div className="section-title">
//               <h2 className="pb-12 primary-heading">{title}</h2>
//             </div>

//             <p className="app__text text-lg font-extrabold -mt-4 mb-4" dangerouslySetInnerHTML={{ __html: description1 }} />

//             <ul role="list" className="mt-10 font-bold space-y-8 app__text">
//               <li className="flex gap-x-3">
//                 <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                 <span dangerouslySetInnerHTML={{ __html: description2 }} />
//               </li>
//               {/* Additional list items as needed */}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Trend;
