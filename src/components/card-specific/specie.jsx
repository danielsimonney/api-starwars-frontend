import React, { useEffect } from 'react';
import { useState } from 'react';
import { api, loadAuthorisationHeader } from "../../helpers/api";
import LinkComponent from './linkComponent';

const Specie  = ({data,match,wookie}) => {
  const [homeworld, setHomeworld] = useState(null)
  
  useEffect(() => {
    if(wookie && data.acooscwoohoorcanwa!==null){
      api
      .get(`/starwars/wookie${data.acooscwoohoorcanwa}`, loadAuthorisationHeader())
      .then(res => {
        setHomeworld(res.data.whrascwo);
      })
      .catch(err => console.log(err));
    }else{
      if(data.homeworld !== null){
      api
      .get(`/starwars${data.homeworld}`, loadAuthorisationHeader())
      .then(res => {
        setHomeworld(res.data.name);
    })
    .catch(err => console.log(err));
  }
    }   
  }, [data,match,wookie]);
  
  return(
    <div className="card" style={{width:"80vw"}}>
    <div className="card-body">
    <h5 className="card-title">Species name : {data.whrascwo || data.name}</h5>
      <p className="card-text">
      The {data.whrascwo || data.name}s are {data.classification} . Their designation is {data.designation} ,their average heigt is {data.average_height || data.rahoworcrarrwo_acwoahrracao} , they have a skin which color is {data.skin_colors} and 
      {data.hair_colors ? data.hair_colors==="n/a" ? (" don't have any hair"):(" hairs of color "+data.hair_colors):data.acraahrc_oaooanoorcc==="wh/ra" ?(" don't have any hair"):(" hairs of color "+data.acraahrc_oaooanoorcc)} .
      They {data.eye_colors ? data.eye_colors==="n/a" ? (" don't have real eyes"):("have eyes of color "+data.eye_colors):data.worowo_oaooanoorcc==="wh/ra" ?(" don't have real eyes"):("have eyes of color "+data.worowo_oaooanoorcc)} .
      Their average lifespan is {data.average_lifespan || data.rahoworcrarrwo_anahwwwocakrawh} and {homeworld ? (`their homewold is ${homeworld}`) : ("they don't have homeworld")} ,
      {data.language ? data.language==="n/a" ? ("they don't have any langage"):("their langage is"+data.language):data.anrawhrrhurarrwo==="wh/ra" ?("they don't have any langage"):("their langage is"+data.anrawhrrhurarrwo)} .


      </p>
    <ul className="list-group list-group-flush">
    <LinkComponent data={data} normalkey="people" wookiekey="akwoooakanwo" sentence="List of all the characters of this specie : " />
    <LinkComponent data={data} normalkey="films" wookiekey="wwahanscc" sentence={`List of all the films where ${data.whrascwo || data.name} species appeared`} />
 
    </ul>
  </div>
  </div>
);
  }
export default Specie;