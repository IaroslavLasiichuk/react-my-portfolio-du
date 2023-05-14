import Gradient from "../components/Gradient";
import { Link } from "react-router-dom";
import data from "../data/data";


export default function About() {
  const { bio } = data;
  
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <Gradient />
      <div id="about" className="mx-auto max-w-2xl py-16 sm:py-16 lg:pt-28">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <div>
            {bio.map((info, index) => (
            <section key={index}>
                <h1 key={info.id} className="text-4xl py-10 font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {info.title}
                </h1>
                <p key={info.id}  className="m-6 text-lg leading-8 text-gray-600">
                  {info.content}{" "}
                </p>
                </section>
            ))}
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Download resume{" "}
              <Link href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Click here <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600"></p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Me
            </Link>
            <a
              href="https://github.com/IaroslavLasiichuk"
              target="blank"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Jump to my GitHub<span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
