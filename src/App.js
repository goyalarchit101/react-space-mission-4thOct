// import './App.css';

import Nav from "./Components/Nav";
import AllMissions from "./Components/AllMissions";
import './App.css';
import Usestate from "./Components/Usestate";
import Button from "./Components/Button";

function App() {
  return (
    <div className="container-fluid">
      <Nav/>
      <AllMissions/>
      {/* <Usestate/> */}
      {/* <Button buttonText = {"Previous"} name ={"Archit"}/> */}
      {/* <Button buttonText = {"Next"}/>
      <Button buttonText = {"Login"}/>
      <Button buttonText = {"SignUp"}/>
      <Button buttonText = {"Previous"}/>
      <Button buttonText = {"Next"}/>
      <Button buttonText = {"Login"}/>
      <Button buttonText = {"SignUp"}/> */}
    </div>
  );
}

export default App;


