// "use client";
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

// const Team1 = () => {
//     const [teamData, setTeamData] = useState(null);

//     useEffect(() => {
//         const fetchTeamData = async () => {
//             try {
//                 const response = await fetch('http://localhost:3001/api/team/666dbb07538fc3d03d13d8b2');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch');
//                 }
//                 const data = await response.json();
//                 setTeamData(data);
//             } catch (error) {
//                 console.error('Error fetching team data:', error);
//             }
//         };

//         fetchTeamData();
//     }, []);

//     if (!teamData) {
//         return (
//             <section className="h-screen flex justify-center items-center">
//                 <div className="lds-ripple"><div></div><div></div></div>
//             </section>
//         );
//     }

//     const teamMembers = [
//         {
//             image: teamData.image1,
//             name: teamData.field4,
//             position: teamData.field5,
//             description: teamData.description1,
//         },
//         {
//             image: teamData.image2,
//             name: teamData.field6,
//             position: teamData.field7,
//             description: teamData.description2,
//         },
//         {
//             image: teamData.image3,
//             name: teamData.field8,
//             position: teamData.field9,
//             description: teamData.description3,
//         },
//         {
//             image: teamData.image4,
//             name: teamData.field10,
//             position: teamData.field11,
//             description: teamData.description4,
//         },
//         {
//             image: teamData.image5,
//             name: teamData.field12,
//             position: teamData.field13,
//             description: teamData.description5,
//         },
//         {
//             image: teamData.image6,
//             name: teamData.field14,
//             position: teamData.field15,
//             description: teamData.description6,
//         },
//     ];

//     const renderField3 = () => {
//         const splitText = teamData.field3.split(' and ');
//         return (
//             <h2 className="mt-5 -mb-10 text-xl font-bold">
//                 {splitText[0]} and <br />{splitText[1]}
//             </h2>
//         );
//     };

//     return (
//         <section className="bg-slate-50 py-16 lg:py-32">
//             <div className="app_container">
//                 <div className="mb-16 xs:px-5 xl:mx-60 xl:-mt-16 items-center text-center">
//                     <h1 className="primary-heading">
//                         {teamData.field1} <span className="highlight">{teamData.field2}</span><br />
//                     </h1>
//                     {renderField3()}
//                 </div>

//                 <div className="grid grid-cols-1 xs:px-10 md:px-40 xl:px-28 lg:px-5 xl:mx-32 lg:grid-cols-3 gap-8">
//                     {teamMembers.map((member, index) => (
//                         <div key={index} className="col-sm-6 col-md-4">
//                             <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
//                                 <Image
//                                     src={member.image}
//                                     alt="pic"
//                                     className="team-img w-28 h-28 rounded-full mx-auto mb-4"
//                                     width={112}
//                                     height={112}
//                                 />
//                                 <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
//                                 <div className="team-info"><p>{member.position}</p></div>
//                                 <p className="font-semibold">{member.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Team1;

"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Team1 = () => {
    const [teamData, setTeamData] = useState(null);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/666dbb07538fc3d03d13d8b2`);
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await response.json();
                setTeamData(data);
            } catch (error) {
                console.error('Error fetching team data:', error);
            }
        };

        fetchTeamData();
    }, []);

    useEffect(() => {
        // Reset scroll position to top on component mount or teamData change
        window.scrollTo(0, 0);

        const saveScrollPosition = () => {
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        };

        window.addEventListener('beforeunload', saveScrollPosition);
        return () => {
            window.removeEventListener('beforeunload', saveScrollPosition);
        };
    }, [teamData]); // Trigger reset when teamData changes

    if (!teamData) {
        return (
            <section className="h-screen flex justify-center items-center">
                <div className="lds-ripple"><div></div><div></div></div>
            </section>
        );
    }

    // Define team members array
    const teamMembers = [
        {
            image: teamData.image1,
            name: teamData.field4,
            position: teamData.field5,
            description: teamData.description1,
        },
        {
            image: teamData.image2,
            name: teamData.field6,
            position: teamData.field7,
            description: teamData.description2,
        },
        {
            image: teamData.image3,
            name: teamData.field8,
            position: teamData.field9,
            description: teamData.description3,
        },
        {
            image: teamData.image4,
            name: teamData.field10,
            position: teamData.field11,
            description: teamData.description4,
        },
        {
            image: teamData.image5,
            name: teamData.field12,
            position: teamData.field13,
            description: teamData.description5,
        },
        {
            image: teamData.image6,
            name: teamData.field14,
            position: teamData.field15,
            description: teamData.description6,
        },
        {
            image: teamData.image7,
            name: teamData.title,
            position: teamData.field17,
            description: teamData.description7,
        },
        {
            image: teamData.image8,
            name: teamData.field18,
            position: teamData.field19,
            description: teamData.description8,
        },
        {
            image: teamData.image9,
            name: teamData.field20,
            position: teamData.field21,
            description: teamData.description9,
        },
    ];

    const renderField1 = () => {
        const text = `${teamData.field1} ${teamData.field2}`;
        const splitText = text.split("Team");
        return (
            <h1 className="primary-heading">
                {splitText[0]} <span className="highlight text-orange-500">Team</span>
            </h1>
        );
    };

    const renderField3 = () => {
        const splitText = teamData.field3.split(' and ');
        return (
            <h2 className="mt-5 -mb-10 text-xl font-bold">
                {splitText[0]} and <br />{splitText[1]}
            </h2>
        );
    };

    return (
        <section className="bg-slate-50 py-16 lg:py-32">
            <div className="app_container">
                <div className="mb-16 xs:px-5 xl:mx-60 xl:-mt-16 items-center text-center">
                    {renderField1()}
                    {renderField3()}
                </div>

                <div className="grid grid-cols-1 xs:px-10 md:px-40 xl:px-28 lg:px-5 xl:mx-32 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className={`col-sm-6 col-md-4 ${index === 6 ? 'col-start-2' : ''}`}>
                            {member.name && member.position && (
                                <div className="team-item bg-gray-200 text-center shadow-lg p-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="team-img w-28 h-28 rounded-full mx-auto mb-4"
                                        width={112}
                                        height={112}
                                    />
                                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                    <div className="team-info"><p>{member.position}</p></div>
                                    <p className="font-semibold">{member.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team1;
