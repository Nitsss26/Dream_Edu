"use client"
import Stats from './Stats'
import CountUp from "react-countup";
import { CheckBadgeIcon, CodeBracketIcon, CursorArrowRippleIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline";

const HomeStats = () => {
  const stats = [
    { id: 1, name: 'Text Solutions', value: <CountUp start={0} end={200000} duration={2} />, icon: CodeBracketIcon },
    { id: 2, name: ' Experts ', value: <CountUp start={0} end={200} duration={2} />, icon: CheckBadgeIcon },
    { id: 3, name: 'Video Solutions', value: <CountUp start={0} end={150000} duration={2} />, icon: CursorArrowRippleIcon },
    { id: 4, name: 'Year Experience', value: <CountUp start={0} end={4} duration={4} />, icon: PresentationChartLineIcon },
  ]
  return (
    <div>
      <Stats stats={stats} heading={"Digital Marketing SMO & SEO Solution!"} para={"Our digital marketing solutions encompass both SMO (Social Media Optimisation) and SEO (Search Engine Optimisation) strategies, designed to maximise online visibility and engagement for businesses."} />
    </div>
  )
}

export default HomeStats