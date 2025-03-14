function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left Section (Logo + Links) */}
      <div className="flex items-center flex-grow">
        {/* Logo */}
        <a className="btn btn-ghost text-xl">
          <img src="/netflix.svg" className="w-24" alt="Netflix Logo" />
        </a>

        {/* Navigation Links (Hidden on Small Screens) */}
        <div className="hidden lg:block">
          <ul className="flex p-0 text-[110%]">
            <li className="mr-3">
              <a href="">Home</a>
            </li>
            <li className="mr-3">
              <a href="">TV Shows</a>
            </li>
            <li className="mr-3">
              <a href="">Movies</a>
            </li>
            <li className="mr-3">
              <a href="">Latest</a>
            </li>
            <li className="mr-3">
              <a href="">My List</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section (Search Icon) */}
      <div className="flex items-center">
        <img
          src="/search.svg"
          className="w-6 h-6 cursor-pointer"
          alt="Search"
        />
      </div>
    </div>
  );
}
export default Header;
