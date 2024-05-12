import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import image from '@/constant/Images/image';

const HigherEducation = () => {
    return (
        <section className="we-are-area md:-mt-24 py-5 md:py-24 xl:py-8 flex items-center">
            <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative lg:px-5 xl:px-0">

                <div className="we-are-img md:order-1 md:mt-5 xl:mt-24">
                    <div className="section-title">
                        <h2 className="pb-12 primary-heading">
                            Empowering Your <span className="highlight">Higher Education Journey</span>
                        </h2>
                    </div>

                    <p className="app__text font-bold md:text-xl  -mt-3">
                        At Direction Educare, we&apos;re dedicated to elevating your higher education experience. Here&apos;s how we revolutionize academic support:
                    </p>
                    <div className="we-are-banner-img flex justify-center items-center">
                        <Image src={image.seoOptimization} alt="SEM Marketing" className="w-auto h-96 mt-3" />
                    </div>


                </div>

                <div className="my-auto md:order-2">
                    <div className="we-are-content">

                        <div className="xs:grid lg:flex mt-6 md:-ms-8">
                            <div className="">
                                <h1 className="ms-8 text-xl font-extrabold highlight">Comprehensive Expertise</h1>
                                <ul role="list" className="xs:mt-8 md:mt-5 space-y-8 app__text">
                                    <li className="flex gap-x-3">
                                        <CheckCircleIcon
                                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        <span className="font-semibold"> <span className="font-extrabold">Versatile Subject Support:</span> From foundational courses to advanced studies, we offer expertise across a diverse array of subjects, including <b>STEM</b> disciplines, <b>Humanities</b>, and <b>Commerce</b>.</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckCircleIcon
                                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        <span className="font-semibold"> <span className="font-extrabold">Tailored Academic Assistance:</span> Our tutors provide personalized support tailored to your unique learning needs, ensuring you excel in your academic pursuits.</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckCircleIcon
                                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        <span className="font-semibold"> <span className="font-extrabold">Holistic Learning Environment:</span> We foster a holistic learning environment that goes beyond traditional tutoring, emphasizing critical thinking, problem-solving, and creativity.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="xl:ms-7">
                                <h1 className="xs:mt-10 lg:mt-0 ms-8 text-xl font-extrabold highlight">Academic Advancement</h1>
                                <ul role="list" className="xs:mt-8 md:mt-5 space-y-8 app__text">
                                    <li className="flex gap-x-3">
                                        <CheckCircleIcon
                                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        <span className="font-semibold"> <span className="font-extrabold">Strategic Exam Preparation:</span> Prepare effectively for key entrance exams like <b>JEE</b>,<b>NEET</b>, and <b>GRE</b> with our comprehensive exam preparation courses and resources.</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckCircleIcon
                                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        <span className="font-semibold"> <span className="font-extrabold">Guidance for Academic:</span> Receive expert guidance and support for research projects, thesis writing, and academic publications, ensuring scholarly excellence.</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckCircleIcon
                                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        <span className="font-semibold"> <span className="font-extrabold">Career Development Opportunities:</span> Explore diverse career pathways, internships, and job opportunities through our comprehensive career counseling and development services.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HigherEducation;