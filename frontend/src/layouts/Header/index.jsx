function Header() {
  return (
    <>
      <header className="fixed-top bg-white text-dark rounded-0 p-3 m-0">
        <div className="navbar">
          <a href="#home" className="nav-item">
            <span className="text-dark navbar-brand mb-0 h1 fs-3">
              BusyEnglish
            </span>
          </a>
          <nav className="navbar">
            <ul className="nav justify-content-end">
              {/* <li className="nav-item">
                <a
                  href="/"
                  className="nav-link link-secondary text-dark fw-semibold"
                  aria-current="page"
                >
                  Home
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  href="#about"
                  className="nav-link link-secondary text-dark fw-semibold"
                  aria-current="page"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="p-2 m-5"></section>
    </>
  )
}

export default Header
