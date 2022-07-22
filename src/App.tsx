import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}

export default App;
