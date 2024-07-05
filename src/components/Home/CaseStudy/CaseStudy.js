// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import image from "@/constant/Images/image";
// import Image from "next/image";

// const services = [
//   {
//     heading: "JEE/NEET Solution",
//     imgUrl: image.digitalMarketing,
//     hoverBg: "pink-hover",
//     iconColor: "pink-text",
//   }
//   ,


//   {
//     heading: "SEO Optimized Blogs",
//     imgUrl: image.seo,
//     hoverBg: "purple-hover",
//     iconColor: "purple-text",
//   },
//   {
//     heading: "Animated Videos",
//     imgUrl: image.wo,
//     hoverBg: "paste-hover",
//     iconColor: "paste-text",
//   },
//   {
//     heading: "Localization Service",
//     imgUrl: image.smo,
//     hoverBg: "yellow-hover",
//     iconColor: "yellow-text",
//   },
//   {
//     heading: "Live Tutoring & Doubt Solving",
//     imgUrl: image.wd,
//     hoverBg: "yellow-hover",
//     iconColor: "yellow-text",
//   }
//   ,

//   {
//     heading: "Educational Video Creation",
//     imgUrl: image.ppc,
//     hoverBg: "paste-hover",
//     iconColor: "paste-text",
//   }, {
//     heading: "Accessibility Service",
//     imgUrl: image.socialMarketing,
//     hoverBg: "pink-hover",
//     iconColor: "pink-text",
//   }
//   ,

// ];

// const CaseStudy = () => {
//   const [width, setWidth] = useState(0);
//   const carousel = useRef();

//   useEffect(() => {
//     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//   }, []);
//   return (
//     <section className="py-24 test-center sm:py-20">
//       <div className="app__container grid grid-cols-1 md:grid-cols-1 gap-y-4">
//         <div className="mb-7 text-center">
//           <h1 className="primary-heading">
//             Any Doubt ? Just <br />
//             Check Out <span className="highlight">Our Services.</span><br />
//             {/* And <span className="highlight">Blogs.</span> */}
//           </h1>
//         </div>

//         <div className="mt-10">
//           <motion.div
//             ref={carousel}
//             className="carousel"
//             whileTap={{ cursor: "grabbing" }}
//           >
//             <motion.div
//               drag="x"
//               dragConstraints={{ right: 0, left: -width }}
//               className="inner-carousel py-2"
//             >
//               {services.map((index, key) => {
//                 return (
//                   <motion.div key={key} className="mx-2">
//                     <div
//                       className={common-single-card flex flex-col py-8 md:py-12 px-16 md:px-20 ${index.hoverBg}}
//                     >
//                       <div className={mx-auto w-44 md:w-52 h-44 md:h-52 ${index.iconColor}}>
//                         <Image
//                           src={index.imgUrl}
//                           height={400}
//                           width={400}
//                           alt=""
//                         />
//                       </div>
//                       <div className="text-center">
//                         <h3 className="text-xl font-bold mt-8 mb-4">
//                           {index.heading}
//                         </h3>
//                       </div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>1
//     </section>
//   );
// };


"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CaseStudy = () => {
    const [data, setData] = useState(null);
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/667031e31f52807825bb54ff`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data);
                setData(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, [data]); // Update width when data changes

    if (!data) {
        return (
            <section className="h-screen flex justify-center items-center">
                <div className="lds-ripple"><div></div><div></div></div>
            </section>
        );
    }

    const description1Parts = data.description1.split("Just ");
    const description2Parts = description1Parts[1].split("Our ");

    const services = [
        {
            heading: data.field2,
            imgUrl: data.image1 || "/placeholder.png",
            hoverBg: "pink-hover",
            iconColor: "pink-text",
        },
        {
            heading: data.field3,
            imgUrl: data.image2 || "/placeholder.png",
            hoverBg: "purple-hover",
            iconColor: "purple-text",
        },
        {
            heading: data.field4,
            imgUrl: data.image3 || "/placeholder.png",
            hoverBg: "paste-hover",
            iconColor: "paste-text",
        },
        {
            heading: data.field5,
            imgUrl: data.image4 || "/placeholder.png",
            hoverBg: "yellow-hover",
            iconColor: "yellow-text",
        },
        {
            heading: data.field6,
            imgUrl: data.image5 || "/placeholder.png",
            hoverBg: "yellow-hover",
            iconColor: "yellow-text",
        },
        {
            heading: data.field7,
            imgUrl: data.image6 || "/placeholder.png",
            hoverBg: "paste-hover",
            iconColor: "paste-text",
        },
        {
            heading: data.field8,
            imgUrl: data.image7 || "/placeholder.png",
            hoverBg: "pink-hover",
            iconColor: "pink-text",
        },
    ];

    return (
        <section className="py-24 text-center sm:py-20">
            <div className="app__container grid grid-cols-1 md:grid-cols-1 gap-y-4">
                <div className="mb-7">
                    <h1 className="primary-heading">
                        {description1Parts[0]} Just <br />
                        {description2Parts[0]} <span className="highlight">Our {description2Parts[1]}</span><br />
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
                            {services.map((service, key) => (
                                <motion.div key={key} className="mx-2">
                                    <div className={`common-single-card flex flex-col py-8 md:py-12 px-16 md:px-14 ${service.hoverBg}`}>
                                        <div className={`mx-auto w-44 md:w-52 h-44 md:h-52 ${service.iconColor}`}>
                                            <Image
                                                src={service.imgUrl}
                                                height={400}
                                                width={400}
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold mt-8 mb-4">
                                                {service.heading}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
