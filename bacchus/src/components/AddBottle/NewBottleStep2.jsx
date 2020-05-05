import React, { useState, useEffect } from "react";
import Input from "../Input";
import Searchable from "../Searchable";
import appellations from "../../data/appellations.json";
import cepages from "../../data/cepages.json";
import regions from "../../data/regions.json";

const allApellations = appellations.map(
  (appellation) => appellation.appellation
);

const NewBottleStep2 = ({ bottle, setDetails, submit }) => {
  const [cepage, setCepage] = useState(bottle.cepage);
  const [appellation, setAppellation] = useState(bottle.appellation);
  const [region, setRegion] = useState(bottle.region);
  const [country, setCountry] = useState(bottle.country);

  useEffect(() => {
    setDetails(cepage, appellation, region, country);
  }, [cepage, appellation, region, country]);

  const findRegion = (option) => {
    let region = appellations.find(
      (appellation) => appellation.appellation === option
    ).region;
    setRegion(region);
  };

  return (
    <div>
      <div className="card">
        <div className="d-flex justify-content-center mb-4 mt-3">
          Add details
        </div>
        <Searchable
          title="Cépage"
          className="mb-3"
          placeholder="Pinot noir"
          value={cepage}
          options={cepages}
          onChange={(option) => setCepage(option)}
        />
        <Searchable
          title="Appellation"
          className="mb-3"
          placeholder="Côte de beaune"
          value={appellation}
          options={allApellations}
          onChange={(option) => {
            setAppellation(option);
            findRegion(option);
          }}
        />
        <Searchable
          title="Region"
          className="mb-3"
          placeholder="Bourgogne"
          value={region}
          options={regions}
          onChange={(option) => {
            setRegion(option);
          }}
        />

        <Input
          title="Country"
          placeholder="France"
          className="mb-3"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
      </div>
    </div>
  );
};

export default NewBottleStep2;
