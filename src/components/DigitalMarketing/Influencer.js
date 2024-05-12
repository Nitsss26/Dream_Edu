import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Influencer = () => {
  return (
    <section className="we-are-area lg:px-5 xl:px-0 xs:py-8 md:pb-0 flex items-center bg-slate-50">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="we-are-img">
          <div className="we-are-banner-img">
            <Image src={image.semMarketing} alt="" />
          </div>
        </div>
        <div>
          <div className="">
            <div className="we-are-content">
              <div className="section-title">
                <h2 className="pb-12 primary-heading">PROFESSIONAL <span className="highlight">CONTENT WRITING</span></h2>
              </div>

              <p className="app__text xs:text-xl lg:text-xl font-semibold">
                Elevate your brand with engaging and persuasive content tailored to your audience.
              </p>
              <ul role="list" className="mt-8 space-y-8 app__text lg:text-base md:text-xl font-semibold">
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    Craft compelling narratives to captivate your audience and drive engagement.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    Target your ideal audience with strategic keyword optimization for improved search engine visibility.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    Establish thought leadership and authority in your industry through expertly crafted content.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    Measure the effectiveness of your content marketing efforts with comprehensive analytics and reporting.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Influencer;
