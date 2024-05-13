"use client";
import Image from "next/image";
import Link from "next/link";
import image from "../Images/image";
import {
  SpeakerWaveIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from 'framer-motion'

const subServices = {
  "Higher Level Education": [
    { name: "STEM Curriculum Development", href: "/services/higher-education" },
    { name: "Study Material Development", href: "/services/higher-education" },
    { name: "Fact Checking Services", href: "/services/higher-education" },
    { name: "Type Setting", href: "/services/higher-education" },
    { name: "Professional Proofreading", href: "/services/higher-education" },
    { name: "Curriculum Development", href: "/services/higher-education" },
    { name: "View All", href: "/services/higher-education" },
  ],
  "K-12 Education": [
    { name: "Curriculum Development", href: "/services/k12-education" },
    { name: "Educational Resources", href: "/services/k12-education" },
    { name: "Student/Teacher Guides", href: "/services/k12-education" },
    { name: "Assessment Tools", href: "/services/k12-education" },
    { name: "Assurance Services", href: "/services/k12-education" },
    { name: "Interactive Video Lessons", href: "/services/k12-education" },
    { name: "View All", href: "/services/k12-education" },
  ],
  "Writing Services": [
    { name: "Email Marketing", href: "/services/writing-service" },
    { name: "JEE/NEET Solutions", href: "/services/writing-service" },
    { name: "Social Media", href: "/services/writing-service" },
    { name: "Digital Marketing", href: "/services/writing-service" },
    { name: "View All", href: "/services/writing-service" },
  ],
  "SEO Based Content": [
    { name: "Blog SEO Service", href: "/services/seo-services" },
    { name: "Article SEO Service", href: "/services/seo-services" },
    { name: "Website Content Writing", href: "/services/seo-services" },
    { name: "View All", href: "/services/seo-services" },
  ],
  "Live Tutoring & Doubt Solving": [
    { name: "Live Doubt Solving", href: "/services/live_tutoring-doubt_solving" },
    { name: "Online Tutoring", href: "/services/live_tutoring-doubt_solving" },
    { name: "Study Material Solutions", href: "/services/live_tutoring-doubt_solving" },
    { name: "JEE/NEET Solutions", href: "/services/live_tutoring-doubt_solving" },
    { name: "View All", href: "/services/live_tutoring-doubt_solving" },
  ],
  "Educational Video Creation": [
    { name: "JEE/NEET Videos", href: "/services/video-creation" },
    { name: "2D/3D Videos", href: "/services/video-creation" },
    { name: "Animated Videos", href: "/services/video-creation" },
    { name: "View All", href: "/sub-service4" },
  ],
  "Test Creation": [
    { name: "Test Series Creation", href: "/services/test-creation" },
    { name: "Mock Test Creation", href: "/services/test-creation" },
    { name: "Assessment Creation", href: "/services/test-creation" },
    { name: "View All", href: "/sub-service4" },
  ],
  "Localization Services": [
    { name: "Translation Service", href: "/services/localization-service" },
    { name: "Subtitling Service", href: "/services/localization-service" },
    { name: "Voice Over Service", href: "/services/localization-service" },
    { name: "Dubbing Services", href: "/services/localization-service" },
    { name: "Closed Captioning", href: "/services/localization-service" },
    { name: "Storyline Translation", href: "/services/localization-service" },
    { name: "Transcription Service", href: "/services/localization-service" },
    { name: "Localization Service", href: "/services/localization-service" },
    { name: "View All", href: "/services/localization-service" },
  ],
  "Books Writing": [
    { name: "E-Book Creation", href: "/services/book-writing" },
    { name: "JEE/NEET Material", href: "/services/book-writing" },
    { name: "Teaching Study Material", href: "/services/book-writing" },
    { name: "Practice Study Material", href: "/services/book-writing" },
    { name: "Customized Curriculum", href: "/services/book-writing" },
    { name: "Books Creation", href: "/services/book-writing" },
    { name: "View All", href: "/services/book-writing" },
  ],
  "Accessibility Service": [
    { name: "File Accessibility", href: "/services/accessibility-services" },
    { name: "Audio Description", href: "/services/accessibility-services" },
    { name: "Video Accessibility", href: "/services/accessibility-services" },
    { name: "Alt Text Writing", href: "/services/accessibility-services" },
    { name: "Accessibility Audit", href: "/services/accessibility-services" },
    { name: "Software Accessibility", href: "/services/accessibility-services" },
    { name: "View All", href: "/services/accessibility-services" },
  ],
};

const products = [
  {
    name: "Higher Level Education",
    description: "Developing advanced educational resources for higher-level courses.",
    href: "/services/higher-education",
    icon: CommandLineIcon,
  },
  {
    name: "K-12 Education",
    description: "Optimizing educational resources and materials for K-12 curriculum.",
    href: "/services/k12-education",
    icon: ComputerDesktopIcon,
  }, {
    name: "Writing Services",
    description: "Providing clear & effective solutions.",
    href: "/services/writing-service",
    icon: ChartBarIcon,
  },

  {
    name: "SEO Based Content",
    description: "SEO-optimized content to enhance online presence.",
    href: "/services/seo-services",
    icon: CommandLineIcon,
  },
  {
    name: "Live Tutoring & Doubt Solving",
    description: "Personalized tutoring & doubt solving.",
    href: "/services/live_tutoring-doubt_solving",
    icon: SpeakerWaveIcon,
  },
  {
    name: "Educational Video Creation",
    description: "Engaging educational videos.",
    href: "/services/video-creation",
    icon: CurrencyDollarIcon,
  },

  {
    name: "Test Creation",
    description: "Comprehensive & reliable tests to evaluate knowledge.",
    href: "/services/test-creation",
    icon: ComputerDesktopIcon,
  },

  {
    name: "Localization Services",
    description: "Accurate and reliable localization services for all languages.",
    href: "/services/localization-service",
    icon: CodeBracketIcon,
  },
  {
    name: "Books Writing",
    description: "Professional book writing services.",
    href: "/services/book-writing",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Accessibility Service",
    description: "Expand online accessibility for broader audience.",
    href: "/services/accessibility-services",
    icon: RocketLaunchIcon,
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const segment = useSelectedLayoutSegment();
  const dropdownRef = useRef(null);

  const handleHover = () => {
    setToggle(true);
  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header
      ref={dropdownRef}
      className={`md:sticky top-0 z-50 ${segment === null ? "bg-[#065B7B]" : "bg-[#065B7B] shadow-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between md:ms-3 p-4 lg:px-8 xl:ms-24 2xl:ms-40">
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              className="h-13 w-14 md:ml-14 sm: ml-4 me-8 "
              src={segment === null ? image.logo : image.logo}
              alt=""
              width="100"
              height="100"
            />
          </Link>
        </div>

        <div className={`hidden md:flex lg:ms-24 xl:ms-28 md:ms-5 2xl:ms-0 justify-center items-center gap-0 lg:gap-4 ${segment === null ? "text-[#eeeeee]" : "text-[#eeeeee]"}`}
          style={{
            '@media (minWidth: 769px)': {
              marginLeft: '0rem',
            },
            '@media (minWidth: 1024px)': {
              marginLeft: '2rem',
            },
            '@media (minWwidth: 1280px)': {
              marginLeft: '2rem',
            }
          }}
        >

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/"
              className={`px-3 py-2 text-base font-bold ${segment === null ? "navlink-white" : "navlink"} ${segment === null ? "" : ""
                }`}
              onClick={() => setToggle(false)}
              style={{ whiteSpace: "nowrap" }}
            >
              Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/about"
              className={`px-3 py-2 text-base font-bold ${segment === null ? "navlink-white" : "navlink"} ${segment === "about" ? "" : ""
                }`}
              onClick={() => setToggle(false)}
              style={{ whiteSpace: "nowrap" }}
            >
              About Us
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <button
              className={`px-3 py-2 text-base font-bold flex items-center ${segment === null ? "navlink-white" : "navlink"}`}
              onClick={() => setToggle(!toggle)}
              onMouseEnter={handleHover}
              style={{ whiteSpace: "nowrap" }}
            >
              Our Services
              <ChevronDownIcon
                className={`h-5 w-5 flex-none ${toggle ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/team"
              className={`px-3 py-2 text-base font-bold ${segment === null ? "navlink-white" : "navlink"} ${segment === "portfolio" ? "" : ""
                }`}
              onClick={() => setToggle(false)}
              style={{ whiteSpace: "nowrap" }}
            >
              Team
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/contact"
              className={`px-3 py-2 text-base font-bold ${segment === null ? "navlink-white" : "navlink"} ${segment === "contact" ? "" : ""
                }`}
              onClick={() => setToggle(false)}
              style={{ whiteSpace: "nowrap" }}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-1 xl:ms-40 lg:ms-20 sm: ms-52 md:ms-0">
          <a href="https://wa.me/9536286054" className="navbar-btn shadow-lg">
            Join
          </a>
        </div>
      </div>

      <div
        className={`p-4 absolute z-99 top-[5.5rem] justify-center items-center mt-5 lg:left-[20%] lg:right-[20%] bg-white rounded-lg shadow-lg grid grid-cols-2 transition-all duration-300 ease-in-out ${toggle ? "opacity-100 visible mt-2" : "opacity-0 invisible"
          }`}
      >
        {products.map((item) => {
          return (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-indigo-50"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-auto">
                <div className="group">
                  <Link
                    href={item.href}
                    className="block font-semibold text-gray-900 group-hover:text-indigo-600"
                    onClick={() => setToggle(false)}
                  >
                    {item.name}
                  </Link>

                  {subServices[item.name] && (
                    <div
                      className={`absolute z-10 ${item.name === "Live Tutoring & Doubt Solving" || item.name === "Solution Writing" || item.name === "Test Creation" || item.name === "Writing Services" || item.name === "Higher Level Education" || item.name === "Books Writing" ? "right-full" : "left-full"} top-0 mt-1 xl:w-60 md:w-56 bg-white border border-indigo-300 shadow-lg rounded-lg lg:group-hover:block hidden`}
                    >
                      <ul className="py-5 px-5 gap-y-10 text-left">
                        {subServices[item.name].map((subService, index) => (
                          <li key={index} className="sm:hover:bg-indigo-50 hover:text-indigo-600">
                            <Link href={subService.href} onClick={() => setToggle(false)}>{subService.name} </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                  )}
                </div>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          );
        })}
        <button className="text-end mt-5 xs:hidden">
          <Link href="/services">
            <span className="mt-4 hover:text-indigo-600 justify-center text-sm text-gray-700 underline">View All</span>
          </Link>
        </button>

      </div>

    </header>
  );
};

export default Header;
