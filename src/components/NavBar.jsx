function NavBar() {
  return (
    <nav className="bg-white z-50 sticky top-0" role="navigation">
      <div className="flex flex-col justify-center items-center py-9 shadow select-none sm:flex-row sm:justify-around lg:px-12 lg:py-9 lg:h-12">
        <a href="/">
          <img
            className="w-auto h-10 lg:h-8 "
            src="/src/assets/logo.png"
            alt="ghost-Blog"
            title="Ghost Blog"
          />
        </a>
        <ul className="items-center justify-center flex lg:flex-row lg:justify-between lg:items-center">
          <li className="py-3 mx-7 text-sm font-semibold cursor-pointer text-slate-700 lg:py-0">
            <a
              className="p-2 rounded transition-colors duration-150 focus:outline-none hover:bg-cyan-500 hover:text-white"
              href="#blogs"
            >
              BLOGS
            </a>
          </li>
          <li className="py-3 mx-7 text-sm font-semibold cursor-pointer text-slate-700 lg:py-0">
            <a
              className="p-2 rounded transition-colors duration-150 focus:outline-none hover:bg-cyan-500 hover:text-white"
              href="#about"
            >
              ABOUT
            </a>
          </li>

          <li className="py-3 mx-7 text-sm font-semibold cursor-pointer text-slate-700 lg:py-0">
            <a
              className="p-2 rounded transition-colors duration-150 focus:outline-none hover:bg-cyan-500 hover:text-white"
              href="#contact"
            >
              CONTACT
            </a>
          </li>
        </ul>
        <div className="flex-row flex-wrap justify-center items-stretch gap-3 flex lg:flex-nowrap lg:items-center lg:gap-2">
          <a
            className="text-center font-semibold outline-none ring-orange-200 ring-offset-1 bg-orange-400 text-white py-1 px-3 rounded transition-colors duration-200 ease-in-out cursor-pointer focus:ring hover:bg-orange-600 hover:text-white"
            href="/login"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
