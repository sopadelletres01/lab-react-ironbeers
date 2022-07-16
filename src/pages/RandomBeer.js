import React from "react";
import Beer from "../components/Beer";
import Layout from "../components/Layout";
import useFetch from "../utils/useFetch";

function RandomBeer() {
  const beer = useFetch("https://ih-beers-api2.herokuapp.com/beers/random");
  console.log(beer);
  return (
    <Layout>
      {beer && (
        <Beer
          singleView
          id={beer._id}
          contributedBy={beer.contributed_by}
          name={beer.name}
          image={beer.image_url}
          description={beer.description}
          tagLine={beer.tagline}
          firstBrewed={beer.first_brewed}
          attenuationLevel={beer.attenuation_level}
          key={beer._id}
        />
      )}
    </Layout>
  );
}

export default RandomBeer;
