import Link from "next/link";

export default function Cta({ data, heading, para }) {
  return (
    <div className="-mt-44 mb-10 text-2xl font-semibold">
      {data.field1}
      {/* <div className="relative isolate overflow-hidden bg-indigo-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-full text-center lg:mx-0 lg:flex-auto py-12 lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white text-center sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-50 text-center">{para}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
            <Link
              href="/contact"
              className="primary-btn shadow-lg"
            >
              Connect With Us
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white">
              Know more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  )
}
