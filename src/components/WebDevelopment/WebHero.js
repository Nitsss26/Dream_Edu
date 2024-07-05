import Image from "next/image"
import './WebHero.css'

const WebHero = ({ data }) => {

  function highlightText(text) {
    const wordsToHighlight = ['For', 'K-12', 'Learning'];
    return (
      <>
        {text.split(' ').map((word, index) => {
          const strippedWord = word.replace(/[.,!]/g, ''); // Remove trailing punctuation
          const trailingPunctuation = word.match(/[.,!]/) ? word.match(/[.,!]/)[0] : '';
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

  const splitText = data.description1.split("/endline");

  return (
    <section className="app__web-hero">
      <div className="mx-auto max-w-7xl md:-mt-20 lg:px-8">
        <div className="flex items-center justify-between flex-col lg:flex-row py-20 md:py-36">
          <div className="flex-1 xs:ms-5 md:ms-14 -mt-10" >
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 capitalize">{highlightText(data.field1)}</h1>
            <p className="text-xl extrabold mb-4 app__text font-bold">{splitText[0]}</p>
            <p className="text-xl extrabold mb-4 app__text font-bold">{splitText[1]}</p>
          </div>
          <div className=" flex-1 -mt-3">
            <img src={data.image1} alt="dm" />
          </div>
        </div>
      </div>
    </section>

  )
}

export default WebHero