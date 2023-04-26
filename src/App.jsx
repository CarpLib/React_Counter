import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas.faCalculator, fas.faMinus, fas.faPlus);
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="container">
        <Header />
        <Main counter={counter} setCounter={setCounter} />
        <Footer />
      </div>
    </>
  );
}

export default App;
