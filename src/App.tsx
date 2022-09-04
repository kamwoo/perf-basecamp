import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Search = React.lazy(() => import('./pages/Search/Search'));

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
};

export default App;
