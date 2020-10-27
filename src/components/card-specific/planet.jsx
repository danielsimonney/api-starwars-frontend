import React from 'react';
import LinkComponent from './linkComponent';

const Planet  = ({data,match}) => {
  return(
    <div className="card" style={{width:"80vw"}}>
    <div className="card-body">
    <h5 className="card-title">Planet name : {data.whrascwo || data.name}</h5>
      <p className="card-text">
      {data.whrascwo || data.name} is a planet with a rotation period of {data.rotation_period || data.rcooaoraaoahoowh_akworcahoowa} hours , her orbital period is of {data.orbital_period || data.oorcrhahaoraan_akworcahoowa} years and her gravity is {data.gravity || data.rrrcrahoahaoro} . Her diameter is {data.diameter || data.waahrascwoaoworc} kms and she has a {data.climate || data.oaanahscraaowo } climate with {data.terrain || data.aoworcrcraahwh} . {data.rotation_period || data.rcooaoraaoahoowh_akworcahoowa} has {data.surface_water || data.churcwwraoawo_ohraaoworc}% of her surface immerged by water and {data.population || data.akooakhuanraaoahoowh} people are occuping her .
      </p>
    <ul className="list-group list-group-flush">
    <LinkComponent data={data} normalkey="residents" wookiekey="rcwocahwawowhaoc" sentence={`List of all the people we see in the movie who resid in ${data.whrascwo || data.name}  : `} />
    <LinkComponent data={data} normalkey="films" wookiekey="wwahanscc" sentence={`List of all the films where ${data.whrascwo || data.name} appeared`} />
 
    </ul>
  </div>
  </div>
);
  }
export default Planet;
// species:
// -name
// -classification
// -designation
// -average_height
// -skin_colors
// -hair_colors
// -eye_colors
// -average_lifespan
// -homeworld
// -language
// -people([link])
// -films([link])

// people:
// -name
// -height
// -mass
// -hair_color
// -hair_color
// -hair_color
// -birth_year
// -gender
// -homeworld(link)
// -films([link])
// -species([link])
// -vehicles([link])
// -starships([link])

// vehicles:
// -name
// -model
// -manufacturer
// -cost_in_credits
// -length
// -max_atmosphering_speed
// -crew
// -passengers
// -cargo_capacity
// -consumables
// -vehicle_class
// -pilots([link])
// -films([link])

// starships:
// -name
// -model
// -manufacturer
// -cost_in_credits
// -length
// -max_atmosphering_speed
// -crew
// -passengers
// -cargo_capacity
// -consumables
// -hyperdrive_rating
// -MGLT
// -starship_class
// -pilots([link])
// -films([link])

// films:
// -title
// -episode_id
// -opening_crawl
// -director
// -producer
// -release_date
// -characters([link])
// -planets([link])
// -starships([link])
// -vehicles([link])
// -species([link])

// planets:
// -name
// -rotation_period
// -orbital_period
// -diameter
// -climate
// -gravity
// -terrain
// -surface_water
// -population
// -residents([link])
// -films([link])



