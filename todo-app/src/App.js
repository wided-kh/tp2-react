import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-light">
        <nav className="p-4 bg-gray-800">
          <ul className="flex space-x-4">
            <li>
              <Link className="text-primary hover:underline" to="/">Accueil</Link>
            </li>
            <li>
              <Link className="text-primary hover:underline" to="/todos">Liste des tâches</Link>
            </li>
          </ul>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
