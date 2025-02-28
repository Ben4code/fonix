import React from "react";

function Index() {
  return (
    <div className="bg-pale_orange text-gray-600 flex justify-center h-screen">
      <main className="bg-white w-full max-w-sm md:max-w-4xl md:max-h-[60vh] block md:gap-4 m-10 p-3 md:p-5 md:grid md:grid-cols-2 shadow-[5px_5px_0_orange]">
        <img
          className="md:h-full md:object-cover"
          src="orange.jpg"
          alt="orange"
        />
        <div>
          <h1 className="font-title font-bold text-2xl md:text-3xl uppercase">
            A single orange
          </h1>
          <p className="font-title text-sm md:text-xl uppercase">
            with stem and leaf
          </p>
          <h2 className="text-5xl font-light font-sans my-3">
            $1<span className="text-lg">.35</span>
          </h2>
          <p className="text-gray-500">
            Experience the taste of your life with this awsome fruit.
          </p>
          <div className="flex items-center space-x-2 my-4">
            <button className="h-10 bg-gradient-to-br from-light_orange to-orange px-4 pt-1 font-sans pb-1 text-white uppercase flex-grow md:flex-none hover:bg-gradient-to-tl hover:transition-transform">
              Add to cart
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="size-6 fill-orange ml-2 hover:scale-[1.25] transition-transform duration-[300]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
          </div>
          <h2 className="uppercase font-light text-lg">Features</h2>
          <ul className="list-disc marker:text-orange text-sm text-gray-600 font-light">
            <li className="pl-2 ml-3 mb-1">
              <span className="font-bold">Lorem ipsum</span> dolor sit amet
              consectetur adipisicing elit. Voluptates, nemo.
            </li>
            <li className="pl-2 ml-3 mb-1">
              <span className="font-bold">Lorem ipsum</span> dolor sit amet
              consectetur adipisicing elit. Voluptates, nemo.
            </li>
            <li className="pl-2 ml-3 mb-1">
              <span className="font-bold">Lorem ipsum</span> dolor sit amet
              consectetur adipisicing elit. Voluptates, nemo.
            </li>
          </ul>
        </div>
      </main>
      {/* <section className="w-full h-screen">
        <div className="grid grid-cols-3 grid-rows-3 h-full gap-1">
          <div className="bg-green-100">1</div>
          <div className="bg-green-200">2</div>
          <div className="bg-green-300">3</div>
          <div className="bg-green-400">4</div>
          <div className="bg-green-500">5</div>
          <div className="bg-green-600">6</div>
          <div className="bg-green-700">7</div>
          <div className="bg-green-800 col-span-2">8</div>
        </div>
      </section> */}
    </div>
  );
}

export default Index;
