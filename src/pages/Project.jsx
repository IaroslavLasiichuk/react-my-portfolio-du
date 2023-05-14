import Navbar from "./Navbar";
import Footer from "./Footer";
import Gradient from "../components/Gradient";
import jslogo from "../assets/javascript-logo.webp";
import data from "../data/data";

export default function Project() {
  const { projects } = data;

  return (
    <>
      <div
        id="project"
        className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex flex-col"
      >
        <Navbar />
        <Gradient />
        <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My projects
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Exploring the Power of JavaScript Frameworks and Libraries.
              Building Interactive Web Applications with JavaScript
            </p>
          </div>
          <div className="mx-auto border-t border-gray-200 pt-10 sm:mt-16 sm:pt-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
              <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="p-6">
                    <div
                      key={index}
                      className="relative overflow-hidden bg-cover bg-no-repeat"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                       
                      <img
                        style={{ height: '150px', width: '300px' }}
                        className=""
                        src={project.imageSrc}
                        alt=""
                      />
                      <a target="blank" href={project.href}>
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                    <p className="text-center m-1 text-md leading-8 text-gray-600">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm py-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
