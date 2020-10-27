import React from 'react';
import LinkComponent from './linkComponent'

const Vehicle  = ({data}) => {
  return(
    <div className="card" style={{width:"80vw"}}>
    <div className="card-body">
    <h5 className="card-title">Vehicle name : {data.whrascwo || data.name}</h5>
      <p className="card-text">
      {data.whrascwo || data.name} is a {data.model || data.scoowawoan} model of {data.length || data.anwowhrraoac} meters , he can go to maximum {data.max_atmosphering_speed || data.scrak_raaoscoocakacworcahwhrr_cakwowowa} km/h in the atmosphere . A {data.whrascwo || data.name} cost {data.cost_in_credits || data.oaoocao_ahwh_oarcwowaahaoc} credits to build and was manufactured by {data.manufacturer || data.scrawhhuwwraoaaohurcworc} , he needs {data.crew || data.oarcwooh} persons to functionn and can accept up to {data.passengers || data.akraccwowhrrworcc} passengers . His cargo capacity is {data.cargo_capacity || data.oararcrroo_oaraakraoaahaoro} and he has consumables for {data.consumables || data.oaoowhchuscrarhanwoc} . His vehicle class is {data.vehicle_class || data.howoacahoaanwo_oaanracc} .
      </p>
    <ul className="list-group list-group-flush">
    <LinkComponent data={data} normalkey="pilots" wookiekey="akahanooaoc" sentence={`List of all the people we see in the movie who pilot the ${data.whrascwo || data.name}  : `} />
    <LinkComponent data={data} normalkey="films" wookiekey="wwahanscc" sentence={`List of all the films where ${data.whrascwo || data.name} appeared : `} />
 
    </ul>
  </div>
  </div>
);
  }
export default Vehicle;