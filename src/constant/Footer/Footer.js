import Link from "next/link";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import Image from "next/image";
import image from "../Images/image";

const Footer = () => {
  return (
    <footer className="p-0 footer-bg relative ">
      <div className="mx-auto max-w-7xl p-0 lg:px-8">
        <div className="flex justify-between items-center  md:ms-4 md:items-start gap-y-8 flex-col sm:flex-row text-center md:text-start">
          <div className="flex-1">
            <h2 className="text-white mt-10 text-2xl md:text-3xl font-bold">
              Interested To Get Our Featured Service
            </h2>
          </div>
          <div>
            <a href="tel:+919536286054">
              <button className="xs:mt-4 md:mt-10 xs:-mb-20 md:mb-0 justify-center md:me-24 primary-btn shadow-lg">Call us Now</button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:ms-4 md:grid-cols-4 ld:grid-cols-4 gap-y-8 pt-20">
          <div className="lg:pr-8 text-center md:text-start ">
            <h3 className="text-white text-capital text-xl font-bold mb-6">
              About Company
            </h3>
            {/* <Image src={image.webdevWhite} alt="WebDev" className="mx-auto md:mx-0" width={150} height={150} /> */}
            <p className="text-base -mt-2 text-slate-200 font-bold sm: px-5 md:px-0 hover:text-white transition-all duration-300">With 8 years of online education &
              development skills, we have worked
              on 100+ Internet development
              projects. We are a part of BroLabs
              Innovation Pvt. Ltd., and we are 38
              people working together as a team
              with just one goal: to take your
              business to a new level.</p>
          </div>
          <div className="mx-auto text-center md:text-start md:ms-16">
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            </div>
            <ul className="list-inside list-none -mt-2 font-bold">
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/about">About Us</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/contact">Contact us</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/team">Team</Link>
              </li>
              {/* <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/portfolio">Portfolio</Link>
              </li> */}
            </ul>
          </div>
          <div className="mx-auto text-center md:text-start md:-ms-1">
            <div>
              <h3 className="text-white text-capital text-xl font-bold mb-6">
                Our Services
              </h3>
            </div>
            <ul className=" -mt-2 list-inside list-none font-bold">
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/live_tutoring-doubt_solving">Live Tutoring & Doubt Solving</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/video-creation">Educational Video Creation</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/writing-service">Solution Writing</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/seo-services">SEO Based Content</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/test-creation">Test Creation</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/k12-education">K-12 Education</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/localization-service">Localization Services</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/book-writing">Books Writing</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/higher-education">Higher Level Education</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/accessibility-services">Accessibility Services</Link>
              </li>
            </ul>
          </div>

          <div className="mx-auto text-center md:text-start ">
            <div>
              <div className="pb-50 pb-md-25 animate get-bottom sm: px-5 md:px-0">
                <h3 className="text-white text-capital text-xl font-bold mb-6">
                  Get In Touch
                </h3>
              </div>
              <div> <p className="text-sm -mt-2 text-slate-200 font-bold hover:text-white sm: px-7 md:px-0 transition-all duration-300">Dream Education, Kalpana Tower, Marris Rd, Centre Point, Gulzar Nagar, Hem Chand Compound, Aligarh, Uttar Pradesh 202001</p></div>
              <ul className="font-bold">
                <li className="mt-6 my-2 text-slate-200 hover:text-white transition-all duration-300">
                  <a
                    className="text-sm text-white font-bold text-bold flex items-center justify-center md:justify-start gap-2"
                    href="tel:+919536286054"
                  >
                    <FaPhoneSquareAlt /> +91-9536286054
                  </a>
                </li>
                <li className="my-2 text-slate-200 font-bold hover:text-white transition-all duration-300">
                  <a
                    className="text-sm text-white text-sbold flex items-center justify-center md:justify-start gap-2"
                    href="mailto:dreameducation@gmail.com"
                  >
                    <FaEnvelope className="sm: ms-1 md:ms-0" /> infodreameducation.com
                  </a>
                </li>
                <li className="mt-8 sm: ms-28 md:ms-0">
                  <ul className="flex justify-start gap-4 items-center">
                    <li className="social">
                      <a
                        className="social-icon"
                        href="#"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li className="social">
                      <a
                        className="social-icon"
                        href="#"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li className="social">
                      <a
                        className="social-icon"
                        href="#"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li className="social">
                      <a
                        className="social-icon"
                        href="https://www.linkedin.com/in/deepakkumar097?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-6 mt-4 md:mt-8 lg:mt-12 mb-[4.5rem] md:mb-0">
        <p className="text-sm text-slate-200 sm: px-14 font-bold hover:text-white transition-all duration-300">
          © Copyright <a href="#">infodreameducation.com</a> 2020. All rights reserved.
        </p>
      </div>

      {  /*  <a href="#" className="shadow-lg rounded-full p-2 bg-white absolute bottom-[5%] right-[5%] animate-[bounce_2s_ease-in-out_infinite]"><ChevronUpIcon className="h-6 w-6"/></a> */}
    </footer>
  );
};

export default Footer;
