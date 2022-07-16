import React, { useEffect } from "react";
import Beer from "../components/Beer";
import Layout from "../components/Layout";
import useFetch from "../utils/useFetch.js";

function BeersList() {
  const beers = useFetch("https://ih-beers-api2.herokuapp.com/beers");
  const renderBeers = () => {
    return beers.map((beer) => {
      return (
        <Beer
          id={beer._id}
          singleView={false}
          contributedBy={beer.contributed_by}
          name={beer.name}
          image={beer.image_url}
          description={beer.description}
          key={beer._id}
        />
      );
    });
  };
  console.log(beers);

  return (
    <Layout>
      <div className="beersList">{beers && renderBeers()}</div>
    </Layout>
  );
}

export default BeersList;
