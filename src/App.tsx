import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import '../src/App.css'

const App: React.FC = () => {
  return (
    
    <Router>
      <div>
        {/* Menu de navegação formatado pelo Bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <Link className="navbar-brand text-light" to="/">Livros</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/">Lista de Livros</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/dados">Dados do Livro</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;