import Image from "next/image"
import './WebHero.css'
import image from "@/constant/Images/image"


const WebHero = () => {
  return (
    <section className="app__web-hero">
      <div className="mx-auto max-w-7xl md:-mt-20 lg:px-8">
        <div className="flex items-center justify-between flex-col lg:flex-row py-20 md:py-36">
          <div className="flex-1 xs:ms-5 md:ms-14 -mt-10" >
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 capitalize">Enhancing Education <span className="highlight">for K-12</span>!<br />Transforming <span className="highlight">Learning</span> Experiences</h1>
            <p className="text-xl extrabold mb-4 app__text font-bold">At Dream Education, we&apos;re dedicated to revolutionizing K-12 education with innovative solutions tailored to meet the needs of students and educators.</p>
            <p className="text-xl extrabold mb-4 app__text font-bold">Experience comprehensive educational services designed to elevate learning outcomes and inspire growth.</p>
          </div>
          <div className=" flex-1 -mt-3">
            <Image src={image.webdev3} alt="dm" />
          </div>
        </div>
      </div>
    </section>

  )
}

export default WebHero