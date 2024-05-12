import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Feature2 from "./Features";
import { PageWrapper } from "@/app/page-wrapper";
import Why from "@/components/Why";
import ContactForm from "@/components/ContactPage/ContactForm";

// export const metadata = {
//     title: 'Dream Education / Accessibility Service',
//     description: 'Expand online accessibility for broader audience',
// }

const SemService = () => {

    const content = [
        {
            heading: "File Accessibility",
            description: "Enhance the accessibility of your documents with our comprehensive file accessibility services. From PDFs to Excel spreadsheets, Word documents, and PowerPoint presentations, we ensure that your content is accessible to all users, including those with disabilities. Our team meticulously optimizes your files to comply with accessibility standards, making them easier to navigate and understand for everyone."
        },
        {
            heading: "Audio Description",
            description: "Elevate your audio content with our professional audio description services. Whether it's for videos, podcasts, or other multimedia presentations, our experienced team adds descriptive narration to convey visual information to individuals who are blind or visually impaired. With our meticulous attention to detail, we ensure that your audio descriptions are accurate, engaging, and compliant with accessibility guidelines."
        },
        {
            heading: "Video Accessibility",
            description: "Make your videos accessible to a wider audience with our comprehensive video accessibility solutions. Our team specializes in adding closed captions, audio descriptions, and other accessibility features to your videos, ensuring compliance with accessibility standards such as WCAG. Whether it's for educational, promotional, or entertainment purposes, we make sure that everyone can enjoy and understand your video content."
        },
        {
            heading: "Alt Text Writing",
            description: "Enhance the accessibility of your images with our expert alt text writing services. Alt text (alternative text) provides textual descriptions of visual elements, making them accessible to individuals who use screen readers or have images disabled. Our skilled writers craft descriptive alt text that accurately conveys the content and context of your images, improving accessibility and user experience across your digital platforms."
        },
        {
            heading: "Accessibility Audit",
            description: "Ensure compliance and inclusivity with our thorough accessibility audit services. Our experienced team conducts comprehensive assessments of your digital assets, including websites, applications, and documents, to identify accessibility barriers and areas for improvement. We provide detailed reports and actionable recommendations to help you achieve and maintain accessibility standards, ensuring equal access for all users."
        },
        {
            heading: "Software Accessibility",
            description: "Optimize the accessibility of your software applications with our specialized software accessibility services. From desktop applications to mobile apps and web-based platforms, we assess and enhance the usability of your software for individuals with disabilities. Our expert team implements accessibility features and design principles to ensure that your software meets the needs of all users, enhancing usability, compliance, and user satisfaction."
        }
    ];


    return (
        <PageWrapper>
            <section className="we-are-area py-8 md:py-24  2xl:py-10 flex items-center bg-slate-50 md:px-10">
                <div className="app__container -py-40 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="my-auto order-2 md:order-1">
                        <div className="we-are-content -mt-10">
                            <div className="section-title">
                                <h2 className="pb-6 primary-heading">
                                    Why Choose Our <span className="highlight">Accessibility Solutions?</span>
                                </h2>
                            </div>

                            <p className="mt-5 app__text text-lg font-semibold">
                                <span className="font-extrabold">At our company,</span> we&apos;re dedicated to providing <span className="font-extrabold">innovative solutions</span> that <span className="font-extrabold">empower individuals with disabilities</span> to access digital content <span className="font-extrabold">seamlessly</span>. Our team specializes in creating <span className="font-extrabold">inclusive experiences</span> for all users, ensuring that no one is left behind.
                            </p>

                            <p className="mt-5 app__text text-lg font-semibold">
                                Whether it&apos;s <span className="font-extrabold">optimizing websites, applications,</span> or <span className="font-bold">multimedia content,</span> we&apos;re committed to making the digital world more <span className="font-bold">accessible</span> and <span className="font-extrabold">inclusive</span>. With our expertise in <span className="font-extrabold">accessibility standards</span> and <span className="font-extrabold">technologies,</span> we help organizations reach a broader audience and <span className="font-bold">demonstrate</span> their commitment to <span className="font-bold">diversity</span> and <span className="font-bold">inclusion.</span>
                            </p>

                            <p className="mt-5 app__text text-lg font-semibold">
                                <span className="font-extrabold">Partner with us</span> to <span className="font-extrabold">transform</span> your digital presence and make a <span className="font-extrabold">positive impact</span> on the lives of millions of users <span className="font-extrabold">worldwide.</span>
                            </p>
                        </div>
                    </div>

                    <div className="we-are-img order-1 md:order-2"> {/* Shifted to left on medium devices */}
                        <div className="we-are-banner-img xs:-mt-2 xs:-ms-3 md:ms-0 xs:mb-8 md:-mt-2 md:mb-4">
                            <Image src={image.socialMarketing} alt="Accessibility Services" />
                        </div>
                    </div>
                </div>
            </section>
            <Feature2 content={content} mainHeading={`WE ASSIST YOU WITH ACCESSIBILITY SERVICES, INCLUDING All ACCESSIBILITY, FOR OUR <span class="highlight">INCLUSIVE SERVICES</span>`} />
            <Why />
            <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"} />
        </PageWrapper>

    );
};

export default SemService;