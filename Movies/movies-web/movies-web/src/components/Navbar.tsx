export default function Navbar() {
  return (
    <header className="sticky-top pt-3 px-3">
      <nav className="navbar navbar-expand-lg navbar-glass rounded-4 container px-3">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bolder" href="#">
          <span className="brand-icon rounded-3 d-flex align-items-center justify-content-center">▶</span>
          MovieBox
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto gap-lg-1 ms-lg-3">
            <li className="nav-item">
              <a className="nav-link active rounded-3 px-3 bg-body-secondary bg-opacity-50" href="#">Filmes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link rounded-3 px-3" href="#">Adicionar filme</a>
            </li>
          </ul>

          <form className="d-flex gap-2 py-2 py-lg-0" role="search">
            <input
              className="form-control rounded-3 bg-dark bg-opacity-50 border-secondary-subtle"
              type="search"
              placeholder="Buscar filmes…"
              aria-label="Buscar filmes"
            />
          </form>
        </div>
      </nav>
    </header>
  );
}