"use client"
import { CheckBadgeIcon, ClipboardDocumentListIcon, CodeBracketIcon, PresentationChartLineIcon, UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";
import CountUp from "react-countup"
import Stats from "../Home/Stats/Stats";

const WebStats = () => {
  const stats = [
    { id: 1, name: 'Satisfied customers', value: <CountUp start={0} end={354} duration={2} />, icon: UserGroupIcon },
    { id: 2, name: 'Happy Business Owners', value: <CountUp start={0} end={82} duration={2} />, icon: UserIcon },
    { id: 3, name: 'Expert Instructors', value: <CountUp start={0} end={200} duration={2} />, icon: ClipboardDocumentListIcon },
    { id: 4, name: 'Project Done', value: <CountUp start={0} end={120} duration={2} />, icon: CodeBracketIcon },
  ]
  return (
    <>
      <Stats stats={stats} heading={"Excellent Web Development Services PLUS Free Digital Marketing @7,999 Only!"} para={"You can get a beautiful website within 4 days"} />
    </>
  )
}

export default WebStats