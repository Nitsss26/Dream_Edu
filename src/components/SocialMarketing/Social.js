import image from "@/constant/Images/image";
import Image from "next/image";

const Social = () => {
  return (
    <section className="we-are-area bg-slate-100 pt-16 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative lg:px-10 xl:px-0">
        <div className="my-auto order-2 md:order-1">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">
                TEST <span className="highlight">CREATION</span>
              </h2>
            </div>

            <p className="app__text text-lg font-bold ">
              Designing <b>effective</b> test papers demands <b className="highlight">meticulous attention</b> and specialized skill. Through our <b>Test Creation Service,</b> we pledge to produce <b className="highlight">thorough</b> and <b className="highlight">accurate</b> test materials that are <b>tailor-made </b>
              to align with your exam specifications.<br /><br />

              Whether it&apos;s <b>All India</b> type tests, <b className="highlight">online assessments</b>, or <b>offline</b> test papers, our team excels in creating <b>high-quality</b> test content that covers all <b className="highlight">relevant topics</b> and exam patterns. Trust us to deliver <b>reliable</b>
              test papers that adhere to <b>industry standards</b> and best practices.
            </p>

          </div>
        </div>

        <div className="we-are-img order-1 md:order-2">
          <div className="we-are-banner-img ms-10">
            <Image src={image.webStrategy} alt="Test Creation Service" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Social;
