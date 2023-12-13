function Hero() {
  return (
    <>
      <main className="bg-gray-100 h-fit max-w-full pt-20" id="top">
        <div>
          <div className=" xl:max-w-[80vw] flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-2 mx-auto">
            <div className=" xl:ml-0 2xl:ml-[0vw] lg:mt-8 ">
              <div className=" flex flex-col items-center mb-6 lg:max-w-lg lg:grid lg:grid-rows-4 lg:max-h-96 lg:ml-auto">
                <div>
                  <h6 className="text-center lg:text-left text-slate-600 text-sm font-semibold mb-2 leading-5  lg:max-w-lg">
                    EXPLORE DAILY ACTIVE BLOGS LISTINGS
                  </h6>
                </div>
                <div className="inline-flex">
                  <span className="text-center lg:text-left text-slate-600 text-5xl font-bold  mb-4 leading-tight">
                    Journey Through Words :{" "}
                    <h1 className="text-cyan-500 inline-block">Ghost Blogs</h1>
                  </span>
                </div>
                <p className="text-center pb-8 max-w-md text-slate-500 text-base lg:max-w-lg lg:text-left lg:pb-0">
                  Welcome to Ghost Blogs, where every word carries a story, and
                  every story sparks a journey of discovery.
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <img
                className="cursor-default w-auto block pb-3 h-72 sm:pb-5 sm:h-[20rem] lg:h-[30rem] lg:pb-0 select-none"
                src="/src/assets/heroImage.svg"
                alt="heroImage"
              />
            </div>
          </div>
          <svg
            className="hidden lg:flex lg:w-screen pt-5 select-none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1280 184"
            style={{ enableBackground: "new 0 0 1280 184" }}
          >
            <polygon
              className="fill-white"
              points="0,184 0,140.3 1280,0 1280,184 "
            />
          </svg>
        </div>
      </main>
    </>
  );
}

export default Hero;
