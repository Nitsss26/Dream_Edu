import image from "@/constant/Images/image"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const Trend = () => {
  return (
    <section className="we-are-area py-16 md:py-16 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative -mt-4 lg:px-9 xl:px-0">
        <div className="we-are-img xl:-ms-12">
          <div className="we-are-banner-img">
            <Image src={image.ppcTrend} alt="PPC Trend" />
          </div>
        </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">ELEVATE YOUR BRAND WITH ENGAGING <span className="highlight">VIDEO CREATION</span> SERVICES</h2>
            </div>

            <p className="app__text text-lg font-extrabold -mt-4 mb-4">When it comes to showcasing your brand, visuals speak louder than words. At <span className="highlight">Dream Education</span>, we specialize in crafting captivating videos that resonate with your audience. From <span className="highlight">educational</span> content to dynamic 2D and 3D animations. Let’s turn your vision into reality! 🎥.</p>

            <ul role="list" className="mt-10 font-bold space-y-8 app__text">
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  Our team transforms complex ideas into engaging educational videos. Whether it’s <span className="highlight">explaining</span> a new concept or breaking down industry trends, we make learning enjoyable.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  Our animations breathe life into your <span className="highlight">brand</span>. From eye-catching 2D animations to mesmerizing 3D visuals, we’ve got you covered.

                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  Our wizards blend creativity and technology to produce mindblowing, captivating <span className="highlight">animated</span> videos. Whether it’s a brand story or a product demo, we’ll make it unforgettable.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trend