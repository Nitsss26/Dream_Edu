import image from "@/constant/Images/image";
import Image from "next/image";

const Seo = ({ data }) => {

  const highlightText = (text) => {
    const wordsToHighlight = ['SEO'];
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
    <section className="md:-mt-12 ">
      <div className="app__container relative isolate overflow-hidden bg-white px-6 py-24 sm:py-24 sm:mt-10 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 font-semibold">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-4xl font-semibold highlight mb-7">
                  {data.title}
                </p>
                <h1 className="mt-2 primary-heading text-gray-900">{data.field1}</h1>
                <p className="mt-6 app__text font-bold">{data.description1}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <img
              className="xs:ms-20 md:h-96 md:w-auto md:justify-center lg:w-full lg:h-auto md:ms-20 lg:ms-6 xl:ms-20 max-w-none"
              src={data.image1}
              alt="Seo"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 -mt-20 font-semibold">
            <div className="lg:pr-4">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="mt-4 text-2xl font-bold tracking-tight lg:mt-16 text-gray-900">
                  {highlightText(data.field2)}
                </h2>
                <p className="mt-5 app__text font-bold">{data.description2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seo;


// import image from "@/constant/Images/image"
// import Image from "next/image"

// const Seo = ({data}) => {
//   return (
//     <section className="md:-mt-12 ">
//       <div className="app__container relative isolate overflow-hidden bg-white px-6 py-24 sm:py-24 sm:mt-10 lg:overflow-visible lg:px-0">
//         <div className="absolute inset-0 -z-10 overflow-hidden">
//         </div>
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
//           <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 font-semibold">
//             <div className="lg:pr-4">
//               <div className="lg:max-w-lg">
//                 <p className="text-4xl font-semibold highlight mb-7">Search Engine Optimization</p>
//                 <h1 className="mt-2 primary-heading text-gray-900">Why Search
//                   Engine optimization?</h1>
//                 <p className="mt-6 app__text font-bold">
//                   SEO method of digital marketing works to put your website on the front page of Google for search terms that relate to your business. Search engine optimization (SEO) uses a variety of different methods to make your website rank highly on the search engine results pages (SERPs). These method works like magic:
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center items-center -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
//             <Image
//               className="xs:ms-20 md:h-96 md:w-auto md:justify-center lg:w-full lg:h-auto md:ms-20 lg:ms-6 xl:ms-20 max-w-none"
//               src={image.seo}
//               alt=""
//             />
//           </div>

//           <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 -mt-20 font-semibold">
//             <div className="lg:pr-4">
//               <div className="max-w-xl lg:max-w-lg">
//                 <h2 className="mt-4 text-2xl font-bold tracking-tight lg:mt-16 text-gray-900">The perfect <span className='highlight'>SEO</span> strategy for your business</h2>
//                 <p className="mt-5 app__text font-bold">
//                   SEO, which stands for search engine optimization, is a set of strategies and techniques that help bring more traffic to your website. SEO helps improve the visibility of your website by ranking it higher for relevant searches.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Seo