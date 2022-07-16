import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  return (
    <div className="home">
      <Link to="/beers" className="contentContainer linkAsWrapper">
        <img src={beers}></img>
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          debitis ipsum saepe expedita fugit odit hic tempora, in eaque nam.
          Soluta quaerat quas earum iusto minima ex ipsam deleniti accusamus.
        </p>
      </Link>
      <Link to="/random-beer" className="contentContainer linkAsWrapper">
        <img src={randomBeer}></img>

        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          debitis ipsum saepe expedita fugit odit hic tempora, in eaque nam.
          Soluta quaerat quas earum iusto minima ex ipsam deleniti accusamus.
        </p>
      </Link>
      <Link to="/new-beer" className="contentContainer linkAsWrapper">
        <img src={newBeer}></img>

        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          debitis ipsum saepe expedita fugit odit hic tempora, in eaque nam.
          Soluta quaerat quas earum iusto minima ex ipsam deleniti accusamus.
        </p>
      </Link>
    </div>
  );
}

export default Home;
