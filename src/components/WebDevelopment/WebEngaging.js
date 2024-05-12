import image from "@/constant/Images/image"
import Image from "next/image"

export const WebEngaging = () => {
    return (
        <section className="engaging-business py-5 md:py-10 mb-32 bg-slate-50">
            <div className="app__container">
                <div className="row">
                    <div className="col-12">
                        <div className="engaging-business-heading text-center pb-50">
                            <div className="section-title pb-6">
                                <h2 className="primary-heading">Elevate Your <span className="highlight">Business</span> with<br /> Our Services for <span className="highlight">Sustainable Growth</span></h2>
                            </div>
                            <p className="app__text text-lg font-semibold">At Dream Education, we understand the importance of making informed decisions that drive revenue growth. Our team of experts is dedicated to providing tailored solutions that meet your specific needs and objectives. We work closely with you to deliver results that exceed expectations. With our professional approach and seamless project management, you can trust us to bring your vision to life.</p>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 mt-8">
                    <div className="engaging-content-wrapper relative">
                        <div className="engaging-content 0">
                            <div className="engaging-top ">
                                <div className="engaging-card-one lg:px-5 xl:px-0">
                                    <div className="yellow-hover engaging-single-card flex items-center gap-4 common-single-card">
                                        <div className="common-card-icon w-[5rem] svg-yellow">
                                            <Image src={image.decisionMaking} alt="decisionMaking" />
                                        </div>
                                        <div className="h4-card-content">
                                            <div className="card-title">
                                                <h3 className="font-medium">Project Team</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="engaging-card-two lg:px-5 xl:px-0">
                                    <div className="purple-hover engaging-single-card flex items-center gap-4 common-single-card">
                                        <div className="common-card-icon w-[5rem] svg-purple">
                                            <Image src={image.setting} alt="Customer Support Team" />
                                        </div>
                                        <div className="h4-card-content">
                                            <div className="card-title">
                                                <h3 className="font-medium">Customer Support Team</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="engaging-btm lg:px-5 xl:px-0">
                                <div className="engaging-card-three lg:px-5 xl:px-0">
                                    <div className="paste-hover engaging-single-card flex items-center gap-4 common-single-card">
                                        <div className="common-card-icon w-[5rem] svg-paste">
                                            <Image src={image.analysis} alt="Quality Testing Team" />
                                        </div>
                                        <div className="h4-card-content">
                                            <div className="card-title">
                                                <h3 className="font-medium">Quality Testing Team</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="engaging-card-four lg:px-5 xl:px-0">
                                    <div className="pink-hover engaging-single-card flex items-center gap-4 common-single-card">
                                        <div className="common-card-icon w-[5rem] svg-pink">
                                            <Image src={image.loupe} alt="Delivery Team" />
                                        </div>
                                        <div className="h4-card-content">
                                            <div className="card-title">
                                                <h3 className="font-medium">Delivery Team</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-auto hidden lg:block">
                            <div className="engaging-circle-img">
                                <Image src={image.engaging} alt="Engaging" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
