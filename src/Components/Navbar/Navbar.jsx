import Style from "../Navbar/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav
        className={`${Style.navbarPad} navbar navbar-expand-lg bg-body-tertiary`}
      >
        <div className={`container-fluid p-4 ${Style["bg-darkblue"]}`}>
          <a
            className="navbar-brand h1 fs-2 text-white ps-5 fw-bold"
            href="home"
          >
            START FRAMEWORK
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse text-white"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto pe-5 mb-2 mb-lg-0">
              <li className="nav-item fs-5 fw-bold mx-2">
                <a
                  className={`${Style["t-white"]} nav-link`}
                  aria-current="page"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="nav-item fs-5 fw-bold mx-2">
                <a
                  className={`${Style["t-white"]} nav-link`}
                  aria-current="page"
                  href="/portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item fs-5 fw-bold mx-2">
                <a
                  className={`${Style["t-white"]} nav-link`}
                  aria-current="page"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
