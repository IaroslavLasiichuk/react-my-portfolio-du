import Navbar from './Navbar'
import Footer from './Footer'
import Gradient from "../components/Gradient"

const products = [
    {
      id: 1,
      name: 'Movie Tracker',
      href: '#',
      imageSrc: '',
      imageAlt: "Javascript Logo",
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: '',
      imageAlt: "Front of men's Basic Tee in black.",
     
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: '',
      imageAlt: "Front of men's Basic Tee in black.",
     
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlA2qpZZv4lq94Pm1r-Lhvyd94WddBnfV6g&usqp=CAU',
      imageAlt: "Front of men's Basic Tee in black.",
      
    },
   
  ]
  
  export default function Project() {
    return (
      <>
      <div id="blog" className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex flex-col">
      <Navbar/>
      <Gradient/>
    <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My projects</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Exploring the Power of JavaScript Frameworks and Libraries. Building
           Interactive Web Applications with JavaScript
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
      </div>
      </div>
      <div className='bg-white shadow-sm py-0'>
  <Footer/>
</div>
        </div>
        </>
    )
  }
  