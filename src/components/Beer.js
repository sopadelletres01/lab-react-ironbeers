import React from "react";
import { Link } from "react-router-dom";

function Beer({
  image,
  description,
  name,
  contributedBy,
  singleView = false,
  id,
  tagLine,
  firstBrewed,
  attenuationLevel,
}) {
  return (
    <>
      {singleView ? (
        <div className="beerItemDetailed">
          <div className="beerImg">
            <img src={image}></img>
          </div>
          <div className="beerContent">
            <div className="titleWrapper">
              <h2>{name}</h2>
              <span className="lighter">{attenuationLevel}</span>
            </div>
            <div className="taglineWrapper">
              <span className="lighter">{tagLine}</span>
              <b>{firstBrewed}</b>
            </div>
            <p>{description}</p>
            <span className="lighter">{contributedBy}</span>
          </div>
        </div>
      ) : (
        <Link to={`/beers/${id}`} className="beerItem linkAsWrapper">
          <div className="beerImg">
            <img src={image}></img>
          </div>
          <div className="beerContent">
            <h2>{name}</h2>
            <p>{description}</p>
            <span>
              <b>Created by: </b>
              {contributedBy}
            </span>
          </div>
        </Link>
      )}
    </>
  );
}

export default Beer;
