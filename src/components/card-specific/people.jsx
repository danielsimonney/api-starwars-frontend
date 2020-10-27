import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { api, loadAuthorisationHeader } from "../../helpers/api";
import LinkComponent from './linkComponent';

const People  = ({data,wookie,match}) => {
  const switchGender = {
    "male" : ["he","his"],
    "n/a":["it","its"],
    "female":["she","her"],
    "scraanwo":["he","his"],
    "wh/ra":["it","its"],
    "wwwoscraanwo":["she","her"],
  }
  const [homeworld, setHomeworld] = useState('')
  const [specie, setSpecie] = useState('')
  const [gender, setGender] = useState(null)
  const [adj, setAdj] = useState('')
  const [pronoun, setPronoun] = useState('')
  useEffect(() => {
    if(data.species !== undefined){
    setGender(data.gender || data.rrwowhwaworc)
    setAdj(gender ? switchGender[gender][1] : '')
    setPronoun(gender ? switchGender[gender][0] : '')
    if(wookie){
      if(data.whrascwo){
      api
      .get(`/starwars/wookie${data.acooscwoohoorcanwa}`, loadAuthorisationHeader())
      .then(res => {
        setHomeworld(res.data.whrascwo);
      })
      .catch(err => console.log(err));
      if(data.cakwooaahwoc.length===1){
        api
      .get(`/starwars/wookie${data.cakwooaahwoc[0]}`, loadAuthorisationHeader())
      .then(res => {
        setSpecie(res.data.whrascwo);
      })
      .catch(err => console.log(err));
      }
    }
    }else{
      api
      .get(`/starwars${data.homeworld}`, loadAuthorisationHeader())
      .then(res => {
        setHomeworld(res.data.name);
    })
    .catch(err => console.log(err));
    if(data.species.length===1){
      api
    .get(`/starwars${data.species[0]}`, loadAuthorisationHeader())
    .then(res => {
      setSpecie(res.data.name);
    })
    .catch(err => console.log(err));
      }
    }   
  }
  }, [data,match,wookie]);

  return(
    <div className="card" style={{width:"80vw"}}>
  <div className="card-body">
  <h5 className="card-title">Personnage name : {data.whrascwo || data.name}</h5>
    <p className="card-text">
    {data.whrascwo || data.name} measure {data.height/100 || data.acwoahrracao/100} meter , {pronoun} weighs {data.mass || data.scracc} kgs .
    {data.whrascwo || data.name} has {data.hair_color || data.acraahrc_oaooanoorc} hair and {data.eye_color || data.worowo_oaooanoorc} eyes , {adj} skin is {data.skin_color || data.corahwh_oaooanoorc} and {pronoun} is born in {data.birth_year || data.rhahrcaoac_roworarc} year . {pronoun} is born in the planet {homeworld} {specie ? ("and is a "+specie):(null)}  .
    </p>
  </div>

  <ul className="list-group list-group-flush">
  <LinkComponent data={data} normalkey="starships" wookiekey="caorarccacahakc" sentence={`List of all the starships that ${data.whrascwo || data.name} piloted :`} />
  <LinkComponent data={data} normalkey="films" wookiekey="wwahanscc" sentence={`List of all the films where ${data.whrascwo || data.name} appeared`} />
  <LinkComponent data={data} normalkey="vehicles" wookiekey="howoacahoaanwoc" sentence={`List of all the vehicles that ${data.whrascwo || data.name} piloted :`} /> 
  </ul>
</div>
);
  }
export default People;