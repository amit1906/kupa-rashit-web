import "./App.css";
import Header from "./Components/Header";
import Fotter from "./Components/Fotter";
import { BrowserRouter as Router } from "react-router-dom";
import Notes from "./Components/Notes";

function App() {
  return (
    <Router>
      <Header />
      <Notes />
      <Fotter />
    </Router>
  );
}

export default App;
