const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid mx-5">
        <a href="./" className="navbar-brand">
          Okumbe Consulting
        </a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto nav-pills nav-fill ">
            <li className="nav-item mx-3">
              <a href="#home" className="nav-link text-primary">
                Home
              </a>
            </li>
            <li className="nav-item mx-4 popup-trigger-btn">
              <a href="#my-bio" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item mx-4 popup-trigger-btn">
              <a href="#projects" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item mx-4 popup-trigger-btn">
              <a href="#certificates" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item mx-4 popup-trigger-btn">
              <a href="#certificates" className="nav-link">
                Teams
              </a>
            </li>
            <li className="nav-item mx-4 popup-trigger-btn">
              <a href="#certificates" className="nav-link active text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
