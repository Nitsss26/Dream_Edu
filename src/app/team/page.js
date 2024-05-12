import React from "react";


export const metadata = {
    title: 'Dream Education / Team ',
    description: 'This Is Our Team.',
}

function Team() {

    return (
        <section className="bg-slate-50 py-16 lg:py-32  ">

            <div className="app_container ">

                <div className="mb-16 xs:px-5 xl:mx-60 xl:-mt-16 items-center text-center">
                    <h1 className="primary-heading">
                        Meet Our <span className="highlight">Team</span><br />
                    </h1>
                    <h2 className="mt-5 -mb-10 text-xl font-bold ">Our team, comprised of individuals with varied backgrounds and <br />expertise, is the driving force behind our success.</h2>
                </div>

                <div className="grid grid-cols-1 xs:px-10 md:px-40 xl:px-28 lg:px-5 xl:mx-32 lg:grid-cols-3 gap-8">


                    <div className="col-sm-6 col-md-4">
                        <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                            <img src="https://i.ibb.co/3RZv9sn/Whats-App-Image-2024-05-10-at-4-31-27-PM.jpg" className="team-img w-28 h-28 rounded-full mx-auto mb-4" alt="pic" width={112} height={112} />
                            <h3 className="text-xl font-semibold mb-1">ANKITA GAUR</h3>
                            <div className="team-info"><p>Project Manager</p></div>
                            <p className="font-semibold">As our Project Manager is the backbone of our projects, ensuring smooth execution and fostering collaboration among team members, driving us toward our goals with dedication and expertise.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                            <img src="https://i.ibb.co/X5zf1v4/download-image-1715346898787.png" className="team-img w-28 h-28 rounded-full mx-auto mb-4" alt="pic" width={112} height={112} />
                            <h3 className="text-xl font-semibold mb-1">MR. DEEPAk Kumar </h3>
                            <div className="team-info"><p>CEO Founder</p></div>
                            <p className="font-semibold">As CEO Founder, our inspirational leader directs our innovation efforts, driving our team towards substantial growth and worldwide impact through astute leadership and relentless dedication.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                            <img src="https://i.ibb.co/vctzrD1/Whats-App-Image-2024-05-10-at-4-28-36-PM-1.jpg" className="team-img w-28 h-28 rounded-full mx-auto mb-4" alt="pic" width={112} height={112} />
                            <h3 className="text-xl font-semibold mb-1">SHREYANSI KHANDELWAL</h3>
                            <div className="team-info"><p>HR Manager </p></div>
                            <p className="font-semibold">Playing a pivotal role in our organization. Our HR Manager nurtures our team, fostering a positive work environment, facilitating growth opportunities, and ensuring our people are valued and supported.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;
