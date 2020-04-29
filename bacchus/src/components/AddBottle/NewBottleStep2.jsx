import React, { useState, useEffect } from "react";
import Input from "../Input";
import Select from "../Select";
import Searchable from "../Searchable";

const allCepages = ["Pinot", "Cabernet"];

const NewBottleStep2 = ({ bottle, setDetails, submit }) => {
  const [cepage, setCepage] = useState(bottle.cepage);
  const [appellation, setAppellation] = useState(bottle.appellation);
  const [region, setRegion] = useState(bottle.region);
  const [country, setCountry] = useState(bottle.country);

  useEffect(() => {
    setDetails(cepage, appellation, region, country);
    console.log("cepage", cepage);
  }, [cepage, appellation, region, country]);

  return (
    <div>
      <div className="card">
        <div className="d-flex justify-content-center mb-4 mt-3">
          Add details
        </div>
        <Searchable
          className="mb-3"
          placeholder="Pinot noir"
          value={cepage}
          options={allCepages}
          onChange={(option) => setCepage(option)}
        />
        <Input
          title="Appellation"
          placeholder="Margaux"
          className="mb-3"
          onChange={(e) => setAppellation(e.target.value)}
          value={appellation}
        />
        <Input
          title="Region"
          placeholder="Bordeaux"
          className="mb-3"
          onChange={(e) => setRegion(e.target.value)}
          value={region}
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
