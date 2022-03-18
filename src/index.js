import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Features from './components/Features';
import ContactInfo from './components/ContactInfo';
import TeamInfo from './components/TeamInfo';
  
import reportWebVitals from './reportWebVitals';
// ReactDOM.render(
//   <Router>
//     <Navbar />

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/features" element={<Features />} />
//       <Route path="/contact" element={<ContactInfo />} />
//       <Route path="/team" element={<TeamInfo />} />
//     </Routes>
//   </Router>,

//   document.getElementById("root")
// );





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
