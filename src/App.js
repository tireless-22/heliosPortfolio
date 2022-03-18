

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import ContactInfo from "./components/ContactInfo";
import TeamInfo from "./components/TeamInfo";

import { useState } from "react";

const App = () => {
	const [bright, setBright] = useState(false);
	const changeState = () => {
		setBright(!bright);
		console.log(bright);
	}
	return (
    <Router>
      <Navbar bright={bright} />

      <Routes>
        <Route
          path="/"
          element={<Home bright={bright} changeState={changeState} />}
        />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<ContactInfo />} />
        <Route path="/team" element={<TeamInfo />} />
      </Routes>
    </Router>
  );

	
	

};

export default App;
