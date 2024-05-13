"use client"
import image from "@/constant/Images/image"
import Image from "next/image"
import { useEffect, useState } from "react";

const WeCan = () => {
  const services = [
    {
      name: "Higher Level Education",
      imgUrl: image.seoOptimization,
      bgColour: "bg-green-100"
    }, {
      name: "Test Creation",
      imgUrl: image.social,
      bgColour: "bg-slate-100"
    }, {
      name: "Writing Services",
      imgUrl: image.webStrategy,
      bgColour: "bg-yellow-100"
    },
    {
      name: "K-12 Education",
      imgUrl: image.webdev3,
      bgColour: "bg-yellow-100"
    },
    {
      name: "Live Tutoring",
      imgUrl: image.semMarketing,
      bgColour: "bg-rose-100"
    }, {
      name: "SEO Based Content",
      imgUrl: image.seo,
      bgColour: "bg-purple-100"
    }, {
      name: "Localization",
      imgUrl: image.smo,
      bgColour: "bg-blue-100"
    }, {
      name: "Video Creation",
      imgUrl: image.ppcTrend,
      bgColour: "bg-pink-100"
    }, {
      name: "Books Writing",
      imgUrl: image.webStrategy,
      bgColour: "bg-yellow-100"
    },
  ]

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevState) => (prevState + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);
  return (
    <section className="xs:py-8 xs:-mt-8 md:mt-0 md:py-24 xl:-ms-64 lg:-ms-96 md:justify-center lg:-mt-7 xl:-mt-6 xl:me-16 lg:me-10">
      <div className="app__container grid grid-cols-0">
        {/* <div className="my-auto md:pr-24">
    <h1 className="primary-heading capitalize">What we can <br/>do for <span className="highlight">you?</span></h1>
    <p className="app__text mt-4">We are perfect in providing solution in certain areas of technology. We have a bunch of services that could speed up your entire business functioning.</p>
    </div> */}

        <div className="relative rounded-3xl h-[400px] w-auto p-0">
          {
            services.map((i, k) => {
              return (
                <div key={k} className={`slide flex justify-end flex-col items-center shadow-lg rounded-xl app__text ${activeSlide === k ? "activeSlider" : ""
                  }`}>
                  <Image src={i.imgUrl} height={400} width={400} alt="" />
                  <div className="py-6 bg-white w-full rounded-xl">
                    <h1 className="font-bold text-2xl text-center">{i.name}</h1>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default WeCan