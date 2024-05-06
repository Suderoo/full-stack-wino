import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Ulumulu</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/pracownicy">Pracownicy</Link>
            </li>
            <li className="nav-item ml-20">
              <Link className="nav-link" to="/magazyny">Magazyny</Link>
            </li>
          </ul>
        </div>
      </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
