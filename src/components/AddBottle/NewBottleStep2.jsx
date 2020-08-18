import React, { useState, useEffect } from "react";
import Input from "../Input";
import Searchable from "../Searchable";
import appellations from "../../data/appellations.json";
import cepages from "../../data/cepages.json";
import regions from "../../data/regions.json";

const allApellations = appellations.map(
  (appellation) => appellation.appellation
);

const NewBottleStep2 = ({ bottle, setDetails }) => {
  const [cepage, setCepage] = useState(bottle.cepage);
  const [appellation, setAppellation] = useState(bottle.appellation);
  const [region, setRegion] = useState(bottle.region);
  const [country, setCountry] = useState(bottle.country);
  const [listAppellations, setListAppellations] = useState(allApellations);

  useEffect(() => {
    setDetails(cepage, appellation, region, country);
  }, [cepage, appellation, region, country, bottle, setDetails]);

  const findRegion = (option) => {
    let region = appellations.find((item) => item.appellation === option)
      ?.region;
    setRegion(region);
  };

  const findAppellations = (option) => {
    let appellationsFromRegions = appellations.reduce((acc, item) => {
      return item.region === option ? [...acc, item.appellation] : acc;
    }, []);
    setListAppellations(appellationsFromRegions);
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
          resetValue={() => setCepage("")}
        />
        <Searchable
          title="Appellation"
          className="mb-3"
          placeholder="Côte de beaune"
          value={appellation}
          options={listAppellations}
          onChange={(option) => {
            setAppellation(option);
            findRegion(option);
          }}
          resetValue={() => {
            setAppellation("");
            findRegion("");
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
            setAppellation("");
            findAppellations(option);
          }}
          resetValue={() => {
            setRegion("");
            setListAppellations(allApellations);
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
