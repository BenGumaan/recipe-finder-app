import React from 'react';
import './App.css';
// react router dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
// pages
import { HomePage, MealPage, ErrorPage, CategoryPage } from "./pages/index";
// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const AppContent = () => {

  const location = useLocation(); 

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/meal/:id" element = {<MealPage />} />
        <Route path = "/meal/category/:name" element = {<CategoryPage />} />
        <Route path  = "*" element = {<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
