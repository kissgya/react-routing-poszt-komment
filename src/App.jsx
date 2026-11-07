import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home';
import { Posztok } from './pages/Posztok';
import { EgyKomment } from './pages/EgyKomment';
import { UjKomment } from './pages/UjKomment';
import { ModKomment } from './pages/ModKomment';
import { EgyPoszt } from './pages/EgyPoszt';
import './App.css'

export const App = () => {

  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Kommentek és posztok</NavLink>
      {/* Hamburger gomb */}
      <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
            <span className="nav-link"><i className="bi bi-text-paragraph"></i> Kommentek</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/posztok'} className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
            <span className="nav-link"><i className="bi bi-text-paragraph"></i> Posztok</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/komment-uj'} className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
            <span className="nav-link"><i className="bi bi-info-circle-fill"></i> Új komment</span>
            </NavLink>
          </li>
        </ul>
      </div>
      </div>

    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posztok" element={<Posztok />} />
      <Route path="/egyposzt/:posztId" element={<EgyPoszt />} />
      <Route path="/egykomment/:kommentId" element={<EgyKomment />} />
      <Route path="/komment-mod/:kommentId" element={<ModKomment />} />
      <Route path="/komment-uj" element={<UjKomment />} />
    </Routes>
    </>
  )
};
