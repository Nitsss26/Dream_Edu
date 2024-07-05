import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const SemService = ({ data }) => {
  // Function to format the description text
  const formatDescription = (text) => {
    const boldWords = ['rapid doubt-solving services', 'we prioritize quality', 'experienced tutors', 'Toppr', 'Chegg', 'Physics Wallah', 'Brainly', 'community of educators', 'earn competitive payouts'];
    const extraBoldWords = ['Timely Assistance', 'Quality Assurance', 'Trusted by Top Platforms', 'Community of Experts', 'Rewards for Expertise'];

    let formattedText = text;

    // Highlight words
    boldWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      formattedText = formattedText.replace(regex, '<b>$1</b>');
    });

    extraBoldWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      formattedText = formattedText.replace(regex, '<b class="font-extrabold">$1</b>');
    });

    // Replace /endline with <br> tags
    formattedText = formattedText.replace(/\/endline/g, '<br><br>');

    return { __html: formattedText };
  };

  const highlightText = (text) => {
    const wordsToHighlight = ['Services?'];
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
    <section className="we-are-area py-8 md:py-16 flex items-center bg-slate-50">
      <div className="app__container -py-40 grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-5 xl:px-0">
        <div className="we-are-img order-1">
          <div className="we-are-banner-img z-0">
            <img src={data.image2} alt="SEM Marketing" />
          </div>
        </div>

        <div className="my-auto order-2">
          <div className="we-are-content -mt-10">
            <div className="section-title xs:mt-16 xs:text-center md:text-start md:mt-0">
              <h2 className="pb-12 primary-heading">
                {highlightText(data.field3)}
              </h2>
            </div>

            <ul role="list" className="mt-5 space-y-8 app__text">
              {data.description4.split('/endline').map((item, index) => (
                <li key={index} className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="text-lg font-bold" dangerouslySetInnerHTML={formatDescription(item.trim().replace(/^(.*?):/, '<strong class="font-extrabold text-xl">$1:</strong>'))}></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemService;
