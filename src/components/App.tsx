import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./Home/Home";
import Layout from "./Margins/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
