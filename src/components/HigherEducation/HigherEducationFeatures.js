import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const HigherEducationServices = () => {
    return (
        <section className="we-are-area py-16 md:py-24 flex items-center bg-slate-50 md:px-8 xl:px-0">
            <div className="app__container -py-40 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="my-auto order-2 md:order-1">
                    <div className="we-are-content -mt-10">
                        <div className="section-title">
                            <h2 className="md:pb-12  primary-heading xs:my-10 md:my-0 xs:text-center md:ms-8">
                                Why Choose Our <span className="highlight">Higher Education Services?</span>
                            </h2>
                        </div>

                        <ul role="list" className="mt-5 space-y-8 app__text">
                            <li className="flex gap-x-3">
                                <CheckCircleIcon
                                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                    aria-hidden="true"
                                />

                                <span className="semibold"> <span className="font-extrabold text-lg">Tailored <b>STEM</b> Support:</span> Our services provide specialized support for Science, Technology, Engineering, and Mathematics (<b>STEM</b>) subjects, ensuring students excel in these crucial areas.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon
                                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                    aria-hidden="true"
                                />
                                <span className="semibold"> <span className="font-extrabold text-lg">Preparation for Competitive Exams:</span> Prepare effectively for competitive exams like <b>JEE</b> (Joint Entrance Examination) and <b>NEET</b> (National Eligibility cum Entrance Test) with our expert guidance and comprehensive study materials.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon
                                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                    aria-hidden="true"
                                />
                                <span className="semibold"> <span className="font-extrabold text-lg">Personalized Learning Pathways:</span> Benefit from personalized learning pathways tailored to your academic goals, whether it&apos;s mastering core concepts or preparing for advanced studies.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon
                                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                    aria-hidden="true"
                                />
                                <span className="semibold"> <span className="font-extrabold text-lg">Guidance for Higher Studies:</span> Receive expert guidance and mentorship for pursuing higher studies abroad or in prestigious institutions, ensuring a smooth transition to your desired academic path.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon
                                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                    aria-hidden="true"
                                />
                                <span className="semibold"> <span className="font-extrabold text-lg">Practical Skill Development:</span> Develop practical skills and competencies essential for success in higher education and the professional world, including critical thinking, problem-solving, and communication.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="we-are-img order-1 md:order-2">
                    <div className="we-are-banner-img xs:-mt-10 md:mt-36">
                        <Image src={image.semService} alt="Higher Education" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HigherEducationServices;
