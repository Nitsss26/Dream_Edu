// import React from "react";
// import Image from "next/image";
// import image from "@/constant/Images/image";

// export const metadata = {
//     title: 'Dream Education / Team ',
//     description: 'This Is Our Team.',
// }

// function Team() {

//     return (
//         <section className="bg-slate-50 py-16 lg:py-32  ">

//             <div className="app_container ">

//                 <div className="mb-16 xs:px-5 xl:mx-60 xl:-mt-16 items-center text-center">
//                     <h1 className="primary-heading">
//                         Meet Our <span className="highlight">Team</span><br />
//                     </h1>
//                     <h2 className="mt-5 -mb-10 text-xl font-bold ">Our team, comprised of individuals with varied backgrounds and <br />expertise, is the driving force behind our success.</h2>
//                 </div>

//                 <div className="grid grid-cols-1 xs:px-10 md:px-40 xl:px-28 lg:px-5 xl:mx-32 lg:grid-cols-3 gap-8">

//                     <div className="col-sm-6 col-md-4">
//                         <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
//                             <Image
//                                 src={image.aa}
//                                 alt="pic"
//                                 className="team-img w-28 h-28 rounded-full mx-auto mb-4"
//                                 width={112}
//                                 height={112}
//                             />
//                             <h3 className="text-xl font-semibold mb-1">MR. DEEPAk KUMAR </h3>
//                             <div className="team-info"><p>CEO Founder</p></div>
//                             <p className="font-semibold">As CEO Founder, our inspirational leader directs our innovation efforts, driving our team towards substantial growth and worldwide impact through astute leadership and relentless dedication.</p>
//                         </div>
//                     </div>

//                     <div className="col-sm-6 col-md-4">
//                         <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
//                             <Image
//                                 src={image.bb}
//                                 alt="pic"
//                                 className="team-img w-28 h-28 rounded-full mx-auto mb-4"
//                                 width={112}
//                                 height={112}
//                             />
//                             <h3 className="text-xl font-semibold mb-1">ANKITA GAUR</h3>
//                             <div className="team-info"><p>Project Manager</p></div>
//                             <p className="font-semibold">As our Project Manager is the backbone of our projects, ensuring smooth execution and fostering collaboration among team members, driving us toward our goals with dedication and expertise.</p>
//                         </div>
//                     </div>



//                     <div className="col-sm-6 col-md-4">
//                         <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
//                             <Image
//                                 src={image.cc}
//                                 alt="pic"
//                                 className="team-img w-28 h-28 rounded-full mx-auto mb-4"
//                                 width={112}
//                                 height={112}
//                             />
//                             <h3 className="text-xl font-semibold mb-1">SHREYANSI KHANDELWAL</h3>
//                             <div className="team-info"><p>HR Manager </p></div>
//                             <p className="font-semibold">Playing a pivotal role in our organization. Our HR Manager nurtures our team, fostering a positive work environment, facilitating growth opportunities, and ensuring our people are valued and supported.</p>
//                         </div>
//                     </div>

//                     <div className="col-sm-6 col-md-4">
//                         <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
//                             <Image
//                                 src={image.dd}
//                                 alt="pic"
//                                 className="team-img w-28 h-28 rounded-full mx-auto mb-4"
//                                 width={112}
//                                 height={112}
//                             />
//                             <h3 className="text-xl font-semibold mb-1">MIZBA Naaz</h3>
//                             <div className="team-info"><p>HR Team Leader</p></div>
//                             <p className="font-semibold">As our HR Team Leader, Mizba Naaz plays a pivotal role in overseeing our human resources department, ensuring that our team members are supported, motivated, and aligned with our company&apos;s objectives.</p>
//                         </div>
//                     </div>


//                     <div className="col-sm-6 col-md-4">
//                         <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
//                             <Image
//                                 src={image.ee}
//                                 alt="pic"
//                                 className="team-img w-28 h-28 rounded-full mx-auto mb-4"
//                                 width={112}
//                                 height={112}
//                             />
//                             <h3 className="text-xl font-semibold mb-1">SANSKRITI TRIPATHI</h3>
//                             <div className="team-info"><p>Business Development Associate</p></div>
//                             <p className="font-semibold">Our Business Development Associate from Chandler, Arizona, USA, identifies opportunities, builds client relationships, and drives growth. With a M.S degree from the USA, she brings expertise</p>
//                         </div>
//                     </div>

//                     <div className="col-sm-6 col-md-4">
//                         <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
//                             <Image
//                                 src={image.ff}
//                                 alt="pic"
//                                 className="team-img w-28 h-28 rounded-full mx-auto mb-4"
//                                 width={112}
//                                 height={112}
//                             />
//                             <h3 className="text-xl font-semibold mb-1">KAJAL PRAJAPATI</h3>
//                             <div className="team-info"><p>HR Manager</p></div>
//                             <p className="font-semibold">Our HR Manager oversees HR operations in the company, ensuring a positive work environment. With dedication and expertise, she supports team members and drives organizational goals.</p>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Team;

import Team1 from './pagefinal';

export const metadata = {
    title: 'Dream Education / Team ',
    description: 'This Is Our Team.',
}

const Team = () => {

    return (
        <Team1 />
    )
};

export default Team;
