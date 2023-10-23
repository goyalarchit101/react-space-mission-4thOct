// import './App.css';

import Nav from "./Components/Nav";
import AllMissions from "./Components/AllMissions";
import './App.css';
import Usestate from "./Components/Usestate";
import Button from "./Components/Button";
import MissionDetails from "./Components/MissionDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Router>
        <div className="container-fluid">
          <Routes>
            <Route exact path="/" element={<AllMissions/>} />
            <Route path="/:id" element={<MissionDetails/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


