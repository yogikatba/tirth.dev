import ExternalLink from "../generic/ExternalLink";

/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "5" },
];

export default function Example() {
  return (
    <div className="relative dark:text-indigo-100 py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 dark:bg-gray-900 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative h-96 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/18dc32ef-f800-424f-8897-74d62f004641/overview_diag.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210611T031536Z&X-Amz-Expires=86400&X-Amz-Signature=6f24a4c2c4e0e359ab18177d6b4a79ebb173294d773af75e84c36a00dc46bb83&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22overview_diag.jpg%22"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-6 sm:pt-4 lg:pt-8 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl text-gray-900 font-bold tracking-tight sm:text-4xl">
                <span className="mb-2 block text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
                  RAx Labs Inc.
                </span>
              </h2>
              <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  ></path>
                </svg>
                <a className="font-medium" href="https://raxter.io">
                  raxter.io
                </a>
              </div>
            </div>
            <div className="text-base dark:text-yellow-300 text-indigo-600 font-semibold tracking-wide uppercase">
              Feb 2020 - Now
            </div>

            <div className="mt-6 dark:text-indigo-100 text-gray-700  space-y-6">
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <ExternalLink
                  href="https://raxter.io"
                  getProps={() => ({
                    className: "dark:text-white font-semibold underline",
                  })}
                >
                  RAx
                </ExternalLink>{" "}
                is a web app that assists research scholars to speed up their
                information discovery, improve understanding of scholarly
                articles and organize knowledge to be more productive.
              </p>

              <div className="space-y-4">
                <div>
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-between dark:text-white text-indigo-500 font-semibold rounded-l rounded-r-full sm:text-base lg:text-sm xl:text-base hover:text-indigo-700"
                  >
                    <span className="inline-flex items-center px-3 py-0.5 rounded bg-indigo-600 text-white text-sm font-medium select-none">
                      Product Architect cum Tech Lead
                    </span>
                    {/* <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                  Product Architect
                </span> */}
                    {/* <span className="ml-4 text-sm inline-flex items-center">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span> */}
                  </a>
                </div>
                <p className="text-base">
                  As a product architect, I redesigned the architecture to
                  achieve
                  <span className="font-fancy font-medium italic text-red-500 dark:text-green-400 px-1">
                    4 nines of availability,
                  </span>
                  improved scalability and achieved costs reductions up to{" "}
                  <span className="font-fancy font-medium text-indigo-600 dark:text-yellow-400 text-lg">
                    34%
                  </span>
                  , using different AWS services and serverless-framework.
                </p>
                <p className="text-base">
                  <span className="font-fancy font-medium text-red-500 dark:text-green-400 pr-1 italic">
                    Created, led and mentored a team of 8 engineers
                  </span>
                  from 0 after filtering 500+ applications and conducting a
                  total of 100+ rounds of interviews.
                </p>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            {/* <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-gray-100 pt-6"
                >
                  <dt className="text-base font-medium text-gray-500">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl> */}
            <div className="mt-10">
              <a href="#" className="text-base font-medium text-indigo-600">
                Learn more about my work at RAx Labs{" "}
                <span aria-hidden="true">&rarr;</span>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}