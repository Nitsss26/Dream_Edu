// "use client"
// import Stats from './Stats'
// import CountUp from "react-countup";
// import { CheckBadgeIcon, CodeBracketIcon, CursorArrowRippleIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline";

// const HomeStats = () => {
//   const stats = [
//     { id: 1, name: 'Text Solutions', value: <CountUp start={0} end={200000} duration={2} />, icon: CodeBracketIcon },
//     { id: 2, name: ' Experts ', value: <CountUp start={0} end={200} duration={2} />, icon: CheckBadgeIcon },
//     { id: 3, name: 'Video Solutions', value: <CountUp start={0} end={150000} duration={2} />, icon: CursorArrowRippleIcon },
//     { id: 4, name: 'Year Experience', value: <CountUp start={0} end={4} duration={4} />, icon: PresentationChartLineIcon },
//   ]
//   return (
//     <div>
//       <Stats stats={stats} heading={"Digital Marketing SMO & SEO Solution!"} para={"Our digital marketing solutions encompass both SMO (Social Media Optimisation) and SEO (Search Engine Optimisation) strategies, designed to maximise online visibility and engagement for businesses."} />
//     </div>
//   )
// }

// export default HomeStats

"use client"
import Stats from './Stats'
import CountUp from "react-countup";
import { CheckBadgeIcon, CodeBracketIcon, CursorArrowRippleIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from 'react';

const HomeStats = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/66702dea1f52807825bb54f9`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return (
      <>
        <section className="h-screen flex justify-center items-center">
          <div className="lds-ripple"><div></div><div></div></div>
        </section></>
    );
  }

  const stats = [
    { id: 1, name: data.field6, value: <CountUp start={0} end={parseInt(data.field2)} duration={2} />, icon: CodeBracketIcon },
    { id: 2, name: data.field7, value: <CountUp start={0} end={parseInt(data.field3)} duration={2} />, icon: CheckBadgeIcon },
    { id: 3, name: data.field8, value: <CountUp start={0} end={parseInt(data.field4)} duration={2} />, icon: CursorArrowRippleIcon },
    { id: 4, name: data.field9, value: <CountUp start={0} end={parseInt(data.field5)} duration={4} />, icon: PresentationChartLineIcon },
  ];

  return (
    <div>
      <Stats data={data} stats={stats} heading={"Digital Marketing SMO & SEO Solution!"} para={"Our digital marketing solutions encompass both SMO (Social Media Optimisation) and SEO (Search Engine Optimisation) strategies, designed to maximise online visibility and engagement for businesses."} />
    </div>
  )
}

export default HomeStats;
