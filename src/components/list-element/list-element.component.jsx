import React from 'react';
import { Link } from 'react-router-dom';

const ListElement  = ({data,type}) => {
  return(
    <tr>
    <th scope="row">{type==="films"?(data.title || data.aoahaoanwo):(data.whrascwo|| data.name)}</th>
  <td>{data.oarcworaaowowa || data.created} </td>
    <td> {data.wowaahaowowa || data.edited} </td>
    <td>
      <Link to={`${data.hurcan || data.url}`}>
        <button
          className="btn btn-dark bg-primary"
        >
          Voir plus
        </button>
        </Link></td>
  </tr>
);
  }
export default ListElement;