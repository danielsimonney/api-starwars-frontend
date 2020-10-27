import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { api, loadAuthorisationHeader } from "../../helpers/api";
import {selectCategoriesSections} from '../../redux/type/type.selector';
import {selectLangage} from "../../redux/wookie/wookie.selector";
import './homepage.scss';
import TypeCard from '../../components/TypeCard/type-card.component'

const Acceuil = ({types,wookie}) => {
  useEffect(() => {
    api
    .get("/starwars/species", loadAuthorisationHeader())
    .then(res => {
    })
    .catch(err => console.log(err));
  }, []);
  return(
    <div className='homepage'>
        <div className="types">
        {
          types.map(({id, ...otherProps}) => (
            <TypeCard key={id} {...otherProps} wookie={wookie}/>
          ))
        }
      </div>
    </div>
  );
  }

  const mapStateToProps = createStructuredSelector({
    types:selectCategoriesSections,
    wookie:selectLangage
  })
export default connect(mapStateToProps)(Acceuil);