import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
<footer className="bg-white lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <Image
      src="/bg2.jpg"
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
      fill={true}
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs uppercase tracking-wide text-gray-500"> Call us </span>

          <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
          01101258558
          </a>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-gray-700">
          <li>Monday to Friday: 10am - 5pm</li>
          <li>Weekend: 10am - 3pm</li>
        </ul>

        <ul className="mt-8 flex gap-6">
    <li>
        <a
            href="https://www.facebook.com/profile.php?id=100063716215592&mibextid=ZbWKwL"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
        >
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        </a>
    </li>

    <li>
        <a
            href="https://www.linkedin.com/company/flourish.com/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
        >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
            </svg>
        </a>
    </li>

    <li>
        <a
            href="mailto:flourishcompany62@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
        >
            <span className="sr-only">Email</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M21.917 3H2.083A2.086 2.086 0 000 5.083v13.834C0 20.916.917 21.833 2.083 21.833h19.834A2.086 2.086 0 0024 19.917V5.083A2.086 2.086 0 0021.917 3zM12 13.308L2.8 7.75h18.4L12 13.308zM2.8 9.25l9.2 4.558 9.2-4.558H2.8z"
                />
            </svg>
        </a>
    </li>

    <li>
        <a
            href="tel:01101258558"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
        >
            <span className="sr-only">Phone</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fillRule="evenodd"
                    d="M16.57 15.03a14.77 14.77 0 01-3.54 1.8 15.1 15.1 0 01-1.8.35 1 1 0 01-1-.24l-1.39-.98a1 1 0 01-.34-.85 13.47 13.47 0 01.01-2.53l.21-1.68a13.47 13.47 0 011.15-3.52L10.35 7.9a14.6 14.6 0 01.3-1.97 14.77 14.77 0 011.79-3.54 1 1 0 01.85-.45h1.72a1 1 0 01.86.47A17.21 17.21 0 0116.1 6.8a17.21 17.21 0 01.46 1.83 1 1 0 01-.49 1.14l-1.17.78a10.1 10.1 0 00-.94.77 17.15 17.15 0 01-1.72 1.42 17.15 17.15 0 01-1.41.93 10.15 10.15 0 00-.79.51l-.79.52a1 1 0 01-1.16.09 15.1 15.1 0 01-2.53-1.17 15.1 15.1 0 01-3.53-1.79 1 1 0 01-.24-1.03l.98-1.39a1 1 0 01.82-.44h.21a15.1 15.1 0 012.53.01 15.1 15.1 0 013.54 1.8 1 1 0 01.46.85v1.72a1 1 0 01-.47.85zM12 3a9 9 0 019 9 9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9z"
                    clipRule="evenodd"
                />
            </svg>
        </a>
    </li>
</ul>

      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Company Review </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Optimisation </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer