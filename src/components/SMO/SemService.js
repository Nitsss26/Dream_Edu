import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const SemService = () => {
  return (
    <section className="we-are-area py-8 md:py-16 flex items-center bg-slate-50">
      <div className="app__container -py-40 grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-5 xl:px-0">
        <div className="we-are-img order-1">
          <div className="we-are-banner-img z-0">
            <Image src={image.semService} alt="SEM Marketing" />
          </div>
        </div>

        <div className="my-auto order-2">
          <div className="we-are-content -mt-10">
            <div className="section-title xs:mt-16 xs:text-center md:text-start md:mt-0">
              <h2 className="pb-12 primary-heading">
                Why Choose Our <span className="highlight">Services?</span>
              </h2>
            </div>

            <ul role="list" className="mt-5 space-y-8 app__text">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />

                <span className="text-lg font-bold"> <span className="font-extrabold text-xl">Timely Assistance:</span> Need an answer quickly? We’ve got you covered! Our experts provide <b>rapid doubt-solving services,</b> ensuring you stay on track with your studies</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span className="text-lg font-bold"> <span className="font-extrabold text-xl">Quality Assurance:</span> At Dream Educare, <b>we prioritize quality</b>. Our team of <b>experienced tutors</b> ensures accurate and reliable solutions for all doubts and queries.</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span className="text-lg font-bold"> <span className="font-extrabold text-xl">Trusted by Top Platforms:</span> Our clients include renowned platforms like <b>Toppr, Chegg, Physics Wallah and Brainly.</b></span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span className="text-lg font-bold"> <span className="font-extrabold text-xl">Community of Experts:</span> Join a dynamic<b> community of educators</b> and learners who share a passion for knowledge.</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span className="text-lg font-bold"> <span className="font-extrabold text-xl">Rewards for Expertise:</span> Your knowledge is valuable, and we recognize that. Join us to <b>earn competitive payouts</b> based on your expertise.</span>
              </li>
              {/* <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>Rewarding loyal followers</span>
                  </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemService;

