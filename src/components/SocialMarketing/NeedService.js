import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

const NeedService = ({ data }) => {
  // Function to format the description text
  const formatDescription = (text) => {
    const boldWords = ['effective', 'test creation', 'good preparation'];
    const extraBoldWords = [
      'meticulous attention', 'thorough', 'accurate', 'online assessments', 'relevant topics', 'reliable', 'industry standards', 'best quality', 'accuracy', 'exam specialists'
    ];

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
    formattedText = formattedText.replace(/\/endline/g, '<br><br>');

    return { __html: formattedText };
  };

  const highlightText = (text) => {
    const wordsToHighlight = ['SERVICES'];
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
    <section className="we-are-area py-16 pt-32 flex items-center -mt-20">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative lg:px-5 xl:px-0">
        <div className="we-are-img">
          <div className="we-are-banner-img md:mt-24 xl:-ms-9">
            <img src={data.image1} alt="Test Creation Service" />
          </div>
        </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">
                {highlightText(data.field1)}
              </h2>
            </div>

            <p
              className='app__text font-bold -mt-5'
              dangerouslySetInnerHTML={formatDescription(data.description1)}
            />

            <ul role="list" className="mt-8 space-y-8 app__text">
              {data.description2.split('/endline').map((item, index) => (
                <li key={index} className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="font-bold" dangerouslySetInnerHTML={formatDescription(item.trim().replace(/^(.*?):/, '<strong class="ffont-bold text-gray-900">$1:</strong>'))}></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedService;


// import image from '@/constant/Images/image';
// import { CheckCircleIcon } from '@heroicons/react/24/outline';
// import Image from 'next/image';
// import React from 'react';

// const NeedService = ({ data }) => {
//   return (
//     <section className="we-are-area py-16 pt-32 flex items-center -mt-20">
//       <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative lg:px-5 xl:px-0">
//         <div className="we-are-img">
//           <div className="we-are-banner-img md:mt-24 xl:-ms-9">
//             <img src={data.image1} alt="Test Creation Service" />
//           </div>
//         </div>
//         <div className="my-auto">
//           <div className="we-are-content">
//             <div className="section-title">
//               <h2 className="pb-12 primary-heading">
//                 NEED FOR CUSTOMIZED TEST CREATION <span className='highlight'>SERVICES</span>
//               </h2>
//             </div>

//             <p className='app__text font-bold -mt-5'>
//               Elevate your institution or competitive exam with our <b className='highlight'>test creation </b> service designed for <b className='highlight'>good preparation</b> of your students or candidates for exams.
//             </p>

// <ul role="list" className="mt-8 space-y-8 app__text">
//   <li className="flex gap-x-3">
//     <CheckCircleIcon
//       className="mt-1 h-5 w-5 flex-none text-indigo-600"
//       aria-hidden="true"
//     />
//     <span className="font-bold"><strong className="ffont-bold text-gray-900">Customized Test Papers:</strong> We offer a wide range of test formats, including <b>All India type tests</b>, <b className='highlight'>online assessments</b>, and <b>offline test papers</b>, tailored to your specific exam requirements.</span>
//   </li>
//   <li className="flex gap-x-3">
//     <CheckCircleIcon
//       className="mt-1 h-5 w-5 flex-none text-indigo-600"
//       aria-hidden="true"
//     />
//     <span className="font-bold"><strong className="ffont-bold text-gray-900">Comprehensive Test Creation:</strong> Our service includes the creation of comprehensive test papers covering all <b className='highlight'> relevant topics </b> and exam patterns.</span>
//   </li>
//   <li className="flex gap-x-3">
//     <CheckCircleIcon
//       className="mt-1 h-5 w-5 flex-none text-indigo-600"
//       aria-hidden="true"
//     />
//     <span className="font-bold"><strong className="ffont-bold text-gray-900">Quality Assurance:</strong> We ensure the <b className='highlight'>quality</b> and <b className='highlight'>accuracy</b> of each test paper, adhering to industry standards and best practices.</span>
//   </li>
//   <li className="flex gap-x-3">
//     <CheckCircleIcon
//       className="mt-1 h-5 w-5 flex-none text-indigo-600"
//       aria-hidden="true"
//     />
//     <span className="font-bold"><strong className="ffont-bold text-gray-900">Expert Guidance:</strong> Our team of <b >experienced educators</b> and <b className='highlight'>exam specialists</b> provide valuable insights and guidance throughout the test creation process.</span>
//   </li>
// </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NeedService;
