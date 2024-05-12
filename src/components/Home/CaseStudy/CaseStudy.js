"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import image from "@/constant/Images/image";
import Image from "next/image";

const services = [
  {
    heading: "JEE/NEET Solution",
    imgUrl: image.digitalMarketing,
    hoverBg: "pink-hover",
    iconColor: "pink-text",
  }
  ,


  {
    heading: "SEO Optimized Blogs",
    imgUrl: image.seo,
    hoverBg: "purple-hover",
    iconColor: "purple-text",
  },
  {
    heading: "Animated Videos",
    imgUrl: image.wo,
    hoverBg: "paste-hover",
    iconColor: "paste-text",
  },
  {
    heading: "Localization Service",
    imgUrl: image.smo,
    hoverBg: "yellow-hover",
    iconColor: "yellow-text",
  },
  {
    heading: "Live Tutoring & Doubt Solving",
    imgUrl: image.wd,
    hoverBg: "yellow-hover",
    iconColor: "yellow-text",
  }
  ,

  {
    heading: "Educational Video Creation",
    imgUrl: image.ppc,
    hoverBg: "paste-hover",
    iconColor: "paste-text",
  }, {
    heading: "Accessibility Service",
    imgUrl: image.socialMarketing,
    hoverBg: "pink-hover",
    iconColor: "pink-text",
  }
  ,

];

const CaseStudy = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <section className="py-24 test-center sm:py-20">
      <div className="app__container grid grid-cols-1 md:grid-cols-1 gap-y-4">
        <div className="mb-7 text-center">
          <h1 className="primary-heading">
            Any Doubt ? Just <br />
            Check Out <span className="highlight">Our Services.</span><br />
            {/* And <span className="highlight">Blogs.</span> */}
          </h1>
        </div>

        <div className="mt-10">
          <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel py-2"
            >
              {services.map((index, key) => {
                return (
                  <motion.div key={key} className="mx-2">
                    <div
                      className={`common-single-card flex flex-col py-8 md:py-12 px-16 md:px-20 ${index.hoverBg}`}
                    >
                      <div className={`mx-auto w-44 md:w-52 h-44 md:h-52 ${index.iconColor}`}>
                        <Image
                          src={index.imgUrl}
                          height={400}
                          width={400}
                          alt=""
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold mt-8 mb-4">
                          {index.heading}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
