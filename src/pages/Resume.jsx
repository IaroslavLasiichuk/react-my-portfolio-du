import React from 'react'
import { Link } from 'react-router-dom'
import Gradient from '../components/Gradient'
import Navbar from './Navbar'
import Footer from './Footer'

const Resume = () => {
  return (
    <div
      id="resume"
      className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex flex-col"
    >
      <Navbar />
      <Gradient />
      <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Resume
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Download my resume by clicking the button below
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <div className="text-center relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Download resume{" "}
            <Link href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Click here <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <ul className="w-96 text-center">
            <h4 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Front-end Proficiencies
            </h4>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              HTML
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              CSS
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              JavaScript
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              JQuery
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              Responsive design
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              React
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              Bootstrap
            </li>
          </ul>
          <ul className="w-96 text-center">
            <h4 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Back-end Proficiencies
            </h4>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              API's
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              Node js
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
             Express
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
             My SQL, Sequelize
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
             MongoDB, Mongoose
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              REST
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
            GraphQl
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white shadow-sm py-0">
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
