import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent  = ({data,sentence,wookiekey,normalkey}) => (
    <>
    {(data[wookiekey] && data[wookiekey].length !== 0)  ?
     (<li className="list-group-item">
      {sentence}
      {(data[wookiekey].map((links,index) => (
      <Link key={index} to={links} className="card-link">{wookiekey} {index},</Link>
      )
      ))}
      </li>
      )
      : (data[normalkey] && data[normalkey].length !== 0) ?
      (<li className="list-group-item">
        {sentence}
      {(data[normalkey].map((links,index) => (
        <Link key={index} className="card-link" to={links}>{normalkey} {index},</Link>
      )))}
    </li>) :null
     }
   </>
);
  



export default LinkComponent;

