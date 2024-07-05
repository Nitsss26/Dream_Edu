import { CheckCircleIcon } from "@heroicons/react/24/outline";

function formatDescription(description) {
  return description.split(' /endline').map((line, index) => (
    <span key={index} className="block">{line.trim()}</span>
  ));
}

function highlightText(text) {
  const wordsToHighlight = ['CONTENT', 'WRITING'];
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

export default function Influencer({ data }) {
  return (
    <section className="we-are-area lg:px-5 xl:px-0 xs:py-8 md:pb-0 flex items-center bg-slate-50">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="we-are-img">
          <div className="we-are-banner-img">
            <img src={data.image2} alt="" />
          </div>
        </div>
        <div>
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">{highlightText(data.field4)}</h2>
            </div>

            <p className="app__text xs:text-xl lg:text-xl font-semibold">
              {data.field5}
            </p>
            <ul role="list" className="mt-8 space-y-8 app__text lg:text-base md:text-xl font-semibold">
              {formatDescription(data.description3).map((line, index) => (
                <li key={index} className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
