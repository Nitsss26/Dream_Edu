// 'use client'
// import Image from "next/image"
// import './Hero.css'
// import image from "@/constant/Images/image"
// import Link from "next/link"
// import { motion } from 'framer-motion'


// const Home = () => {
//   return (
//     <section className="app__hero relative">
//       <div className="xs:mx-2 xs:px-5 xs:py-10 md:mx-20 xl:ms-40 max-w-7xl md:p-20 lg:px-1 z-2">
//         <div className="flex items-center justify-between= py-0 mr-4">
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 15 }}
//             transition={{ delay: 0.25 }}
//             className="flex-1">
//             <div className="w-full flex justify-center">
//               <div className="xs:w-60 md:w-96 xl:hidden mb-6">
//                 <Image src={image.webdev} alt="dm" />
//               </div>
//             </div>

//             <div className="xs:block xl:hidden"> <h1 className="text-4xl text-center lg:text-6xl text-white font-extrabold mb-5 capitalize">You speak and we help you execute it in your own way!!</h1><br />
//               <h1 className="text-4xl lg:text-6xl text-white text-center font-extrabold mb-5 capitalize"> Welcome To Dream Education!</h1>
//               <p className="text-base text-white text-center mb-4 font-bold">Dream Education have seasoned experts specialize in providing conprehensive educational solutions, including text and video tutorials, and more</p></div>

// <div className="xs:hidden xl:block"> <h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-5 capitalize">You speak and we help you execute it <br /> in your own way!!</h1><br />
//   <h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-5 capitalize"> Welcome To</h1>
//   <h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-5 capitalize"> Dream Education!</h1>
//               <p className="text-base text-white mb-4 ">Dream Education have seasoned experts specialize in providing conprehensive educational solutions, including text and video tutorials, and more</p></div>

//             <div className="absolute half-circle-animation ms-20 rounded-full animate-[spin_3s_linear_infinite] z-7">
//               <div className="half-circle-animation-child rounded-full"></div>
//             </div>
//             <div className="flex gap-5 xs:justify-center xl:justify-normal">
//               <Link href="/contact" className="primary-btn shadow-lg">Get Started</Link>
//               <Link href="/about" className="secondary-btn shadow-lg">Know More</Link>
//             </div>
//           </motion.div>
//           <div className="xl:block xs:hidden -me-8 -pr-5 pb-10 flex-1 hidden">
//             <Image src={image.webdev} alt="dm" /></div>
//         </div>
//       </div >

//       <div className="absolute circle-animation rounded-full mb-20 animate-[spin_4s_linear_infinite] z-1">
//         <div className="circle-animation-child rounded-full"></div>
//       </div>

//       <div className="absolute square-animation animate-[spin_3s_linear_infinite] z-1">
//         <div className="square-animation-child"></div>
//       </div>
//       <div className="absolute bubble-animation gap-5 flex h-3 w-3 z-1">
//         <span className="animate-[ping_1s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//         <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
//       </div>
//       <div className="absolute square-animation-2 animate-[spin_2s_linear_infinite] z-1">
//         <div className="square-animation-child-2"></div>
//       </div>
//       <div className="absolute square-animation-3 animate-[spin_3s_linear_infinite] z-1">
//         <div className="square-animation-child-3"></div>
//       </div>
//     </section >
//   )
// }

// export default Home

'use client'
import Image from "next/image"
import './Hero.css'
import image from "@/constant/Images/image"
import Link from "next/link"
import { motion } from 'framer-motion'

const Hero = ({ data }) => {

  const description1Parts = data.description1.split("It ");
  const description2Parts = data.description2.split("To ");

  return (
    <section className="app__hero relative">
      <div className="xs:mx-2 xs:px-5 xs:py-10 md:mx-20 xl:ms-40 max-w-7xl md:p-20 lg:px-1 z-2">
        <div className="flex items-center justify-between= py-0 mr-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            className="flex-1">
            <div className="w-full flex justify-center">
              <div className="xs:w-60 md:w-96 xl:hidden mb-6">
                <img src={data.image1} alt="dm" loading="lazy" />
              </div>
            </div>

            <div className="xs:block xl:hidden">
              <h1 className="text-4xl text-center lg:text-6xl text-white font-extrabold mb-5 capitalize">{data.description1}</h1><br />
              <h1 className="text-4xl lg:text-6xl text-white text-center font-extrabold mb-5 capitalize">{data.description2}</h1>
              <p className="text-base text-white text-center mb-4 font-bold">{data.description3}</p>
            </div>

            <div className="xs:hidden xl:block"> <h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-5 capitalize">{description1Parts[0]} it <br /> {description1Parts[1]}</h1><br />
              <h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-5 capitalize"> {description2Parts[0]} To</h1>
              <h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-5 capitalize"> {description2Parts[1]}</h1>
              <p className="text-base text-white mb-4 ">{data.description3}</p>
            </div>

            <div className="absolute half-circle-animation ms-20 rounded-full animate-[spin_3s_linear_infinite] z-7">
              <div className="half-circle-animation-child rounded-full"></div>
            </div>
            <div className="flex gap-5 xs:justify-center xl:justify-normal">
              <Link href="/contact" className="primary-btn shadow-lg">{data.field1}</Link>
              <Link href="/about" className="secondary-btn shadow-lg">{data.field2}</Link>
            </div>
          </motion.div>
          <div className="xl:block xs:hidden -me-8 -pr-5 pb-10 flex-1 hidden">
            <img src={data.image1} alt="dm" loading="lazy" /></div>
        </div>
      </div >

      <div className="absolute circle-animation rounded-full mb-20 animate-[spin_4s_linear_infinite] z-1">
        <div className="circle-animation-child rounded-full"></div>
      </div>

      <div className="absolute square-animation animate-[spin_3s_linear_infinite] z-1">
        <div className="square-animation-child"></div>
      </div>
      <div className="absolute bubble-animation gap-5 flex h-3 w-3 z-1">
        <span className="animate-[ping_1s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
      </div>
      <div className="absolute square-animation-2 animate-[spin_2s_linear_infinite] z-1">
        <div className="square-animation-child-2"></div>
      </div>
      <div className="absolute square-animation-3 animate-[spin_3s_linear_infinite] z-1">
        <div className="square-animation-child-3"></div>
      </div>
    </section >
  )
}

export default Hero
