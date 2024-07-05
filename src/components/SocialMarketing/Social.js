import Image from "next/image";

const Social = ({ data }) => {

  const highlightText = (text) => {
    const wordsToHighlight = ['CREATION', 'meticulous attention', 'thorough', 'accurate', 'online assessments', 'relevant topics', 'reliable', 'industry standards'];
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

  // Words to highlight with <b> and <span className="highlight">
  const wordsToHighlight = ['CREATION', 'meticulous attention', 'thorough', 'accurate', 'online', 'assessments', 'relevant topics', 'reliable', 'industry standards'];

  // Function to format the description
  const formatDescription = (text) => {
    const boldWords = ['effective', 'Test Creation Service', 'tailor-made', 'All India', 'offline', 'high-quality'];
    const extraBoldWords = ['meticulous attention', 'thorough', 'accurate', 'online assessments', 'relevant topics', 'reliable', 'industry standards'];

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

    // Replace new lines with <br> tags
    formattedText = formattedText.replace(/\/endline/g, '<br><br>');

    return { __html: formattedText };
  };

  return (
    <section className="we-are-area bg-slate-100 pt-16 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative lg:px-10 xl:px-0">
        <div className="my-auto order-2 md:order-1">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">
                {highlightText(data.field2)}
              </h2>
            </div>

            <p
              className="app__text text-lg font-bold"
              dangerouslySetInnerHTML={formatDescription(data.description3)}
            />
          </div>
        </div>

        <div className="we-are-img order-1 md:order-2">
          <div className="we-are-banner-img ms-10">
            <img src={data.image2} alt="Test Creation Service" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;


// import image from "@/constant/Images/image";
// import Image from "next/image";

// const Social = ({ data }) => {

//   const highlightText = (text) => {
//     const wordsToHighlight = ['CREATION', 'meticulous', 'attention', 'thorough', 'accurate', 'online', 'assessments,', 'relevant', 'topics'];
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

//   // const splitText = data.description4.split("/endline");
//   // const splitText2 = data.description5.split("/endline")
//   // const splitText3 = data.description6.split("/endline")

//   return (
//     <section className="we-are-area bg-slate-100 pt-16 flex items-center">
//       <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative lg:px-10 xl:px-0">
//         <div className="my-auto order-2 md:order-1">
//           <div className="we-are-content">
//             <div className="section-title">
//               <h2 className="pb-12 primary-heading">
//                 {highlightText(data.field2)}
//               </h2>
//             </div>

//             <p className="app__text text-lg font-bold ">
//               Designing <b>effective</b> test papers demands <b className="highlight">meticulous attention</b> and specialized skill. Through our <b>Test Creation Service,</b> we pledge to produce <b className="highlight">thorough</b> and <b className="highlight">accurate</b> test materials that are <b>tailor-made </b>
//               to align with your exam specifications.<br /><br />

//               Whether it&apos;s <b>All India</b> type tests, <b className="highlight">online assessments</b>, or <b>offline</b> test papers, our team excels in creating <b>high-quality</b> test content that covers all <b className="highlight">relevant topics</b> and exam patterns. Trust us to deliver <b>reliable</b>
//               test papers that adhere to <b>industry standards</b> and best practices.
//             </p>

//           </div>
//         </div>

//         <div className="we-are-img order-1 md:order-2">
//           <div className="we-are-banner-img ms-10">
//             <img src={data.image2} alt="Test Creation Service" />
//           </div>
//         </div>
//       </div>
//     </section >
//   )
// }

// export default Social;
