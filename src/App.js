import "./App.scss";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import BeersList from "./pages/BeersList";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";
import BeerForm from "./pages/BeerForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<BeerForm />} />
      </Routes>
    </div>
  );
}

export default App;
