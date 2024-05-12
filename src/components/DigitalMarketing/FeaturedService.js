import image from '@/constant/Images/image';
import Image from 'next/image';

const FeaturedService = () => {
  return (
    <section className="we-are-area h-screen flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <p className="text-base font-semibold leading-7 highlight">Fuel Your Brand's Storytelling</p>
              <h2 className="pb-12 primary-heading">Our Featured <span className="highlight">Content <br />Writing Services</span></h2>
            </div>

            <p className='app__text'>
              Engage and inspire your audience with compelling content crafted by our expert writers. At Dream Education Private Limited, we specialize in creating captivating narratives that resonate with your target audience across digital platforms.
            </p>
          </div>
        </div>
        <div className="we-are-img">
          <div className="we-are-banner-img">
            <Image src={image.aboutAni} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
