import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/StoreWorkoutsArticles.module.css"; // to style, do {styles.<name of desired class>}

export default function Home() {

  const router = useRouter();

  return (

    /* sm:<phone screens> lg:<laptop/regular screen sizes> xl:<large screens> ; essentially changes the element style with the prefixes 
    *  (use CTRL + SHIFT + M to change view type, to phone, tablet, etc
    *  to make it go from smallest>changing style in bigger sizes, leave normal styling and THEN specify large sizes with lg:<>*/
    /* margin left/right is: ml-<value> and mr-<value> */

    <div className="text-gray-600 grid md:grid-cols-8 gap-2">

      {/* start nav */}
      <div className="md:col-span-1">
        <nav className="p-1 m-1 text-left">
          <div>
            <h1 className="text-[3vh] font-light uppercase p- border-b border-gray-300">
              <a href = "/" className="hover:text-gray-900">IHFC - <span className="font-bold">Featured</span></a>
            </h1>

            <div className="px-4 cursor-pointer md:hidden flex justify-start mt-4 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7">
                <path strokeLinecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </div>

          </div>
          <ul className="m-3 lg:p-2 lg:m-">
            <li className="py-2">
              <a href = '1' className="transition-setter px-4 flex justify-end hover:text-gray-900 hover:border-r-4 border-gray-400">
                <span>Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
              </a>
            </li>
            <li className="py-2">
              <a href = '/' className="px-4 flex justify-end border-r-4 border-coolgray">
                <span className="font-bold">Featured</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
              </a>
            </li>
            <li className="py-2">
              <a href = '3' className="transition-setter px-4 flex justify-end hover:text-gray-900 hover:border-r-4 border-gray-400">
                <span>Shop</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                  </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* end nav */}

      <main className="px-7 py-7 md:col-span-7">
        <div className="flex justify-center md:justify-end">
          <a href="auth" className="button-nav text-coolgray ml-4 border-aesthetic-lightgreen sm:border-2"> Log In </a>
          <a href="auth" className="button-nav text-coolgray ml-4 border-aesthetic-lightgreen sm:border-2"> Sign Up </a>
          <a href="shop">
            <svg className="size-7 mt-1 ml-4 cursor-pointer hover:text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
          </a>
        </div>

        <div>

        <header>
            <h3 className="text-dark text-4xl font-bold">The Fitness Club</h3>
            <h3 className="text-gray-400 text-2xl">
              Give your Health Life a{" "}
              <span className="bg-gradient-to-r from-red-400 to-indigo-600 bg-clip-text text-transparent inline-block hover:animate-spin">
                360
              </span>
            </h3>
          </header>
          
          <h3 className="text-xl pb-2 mt-12 mb-5 border-b border-gray-300">Featured Products</h3>

            {/* cards with gym equipment */}
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 gap-10">
              <div className="text-moderngray">
                {/* card 1 */}
                <div className="card">
                  <img src="/images/adjustable-dumbbells.png" alt="adjustable-dumbbells" className="w-[200px] h-[200px] m-auto"></img>
                  <div>
                    <span className="text-[1.3rem] sm:text-[1.7rem] flex justify-center"> Adjustable Dumbbells </span>
                    <span className="block text-gray-500 flex justify-center">by IMFit</span>
                  </div>
                  <div className="badge">
                    <svg className="size-5 inline-block mb-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>129.99</span>
                  </div>
                </div>
              </div>
            <div className="text-moderngray">
              {/* card 2 */}
              <div className="card">
                <img src="/images/training-bicycle.png" alt="training bicycle" className="w-[200px] h-[200px] m-auto"></img>
                <div>
                  <span className="text-[1.3rem] sm:text-[1.5rem] flex justify-center"> Training Bicycle </span>
                  <span className="block text-gray-500 flex justify-center">by Bowflex</span>
                </div>
                <div className="badge">
                  <svg className="size-5 inline-block mb-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>699.99</span>
                </div>
              </div>
            </div>
            <div className="text-moderngray">
              {/* card 3 */}
              <div className="card">
              <img src="/images/tricep-machine.png" alt="tricep machine" className="w-[200px] h-[200px] m-auto"></img>
                <div>
                  <span className="text-[1.3rem] sm:text-[1.5rem] flex justify-center"> Tricep Cable </span>
                  <span className="block text-gray-500 flex justify-center">by Gear For Fit</span>
                </div>
                <div className="badge">
                  <svg className="size-5 inline-block mb-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  <span>273.99</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Latest Fitness/Health Articles */}
            <h3 className="text-xl pb-2 mt-12 border-b border-gray-300">Latest Fitness/Health Articles</h3>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 gap-10">
            {/* article 1 */}
            <a href="https://activifinder.com/blog/479/top-gyms-and-fitness-centers-in-toronto">
              <div className="card2">
                <img src="/images/gym1.png" alt="tricep machine" className=""></img>
                  <div>
                    <span className="text-gray-900 text-[1.3rem] sm:text-[1.3rem] m-auto ml-7 p-5 flex">Top 9 Gym & Fitness Centers in Toronto for Your Workout</span>
                    <span className="block text-gray-500 flex justify-center">by ActiviFinder</span>
                  </div>
                  <div className="badge2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 size-5 inline-block mb-0.5">
                    < path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>15 Minute Read</span>
                  </div>
                </div>
              </a>
              {/* article 2 */}
              <a href="https://www.everyoneactive.com/content-hub/gym/7-benefits-of-having-a-workout-partner/">
              <div className="card2">
                <img src="/images/gym2.png" alt="tricep machine" className=""></img>
                  <div>
                    <span className="text-gray-900 text-[1.3rem] sm:text-[1.3rem] m-auto ml-7 p-5 flex">7 Benefits of Having a Workout Partner</span>
                    <span className="block text-gray-500 flex justify-center">by everyone active</span>
                  </div>
                  <div className="badge2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 size-5 inline-block mb-0.5">
                    < path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>5-10 Minute Read</span>
                  </div>
                </div>
              </a>
              {/* article 3 */}
              <a href="https://goteamup.com/resources/gym-cleaning">
              <div className="card2">
                <img src="/images/gym3.png" alt="tricep machine" className=""></img>
                  <div>
                    <span className="text-gray-900 text-[1.3rem] sm:text-[1.3rem] m-auto ml-7 p-5 flex">Gym cleaning 101: Why it's important to keep your gym clean</span>
                    <span className="block text-gray-500 flex justify-center">by TeamUp</span>
                  </div>
                  <div className="badge2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 size-5 inline-block mb-0.5">
                    < path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>25 Minute Read</span>
                  </div>
                </div>
              </a>
            </div>
          
          <div className="flex justify-center">
            <div className="button-nav font-medium bg-aesthetic-lightgreen text-moderngray mt-12 p-1 uppercase hover:shadow-inner" id="load-more">Load More</div>
          </div>

        </div>

      </main>

    </div>
  )
}