import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { api, loadAuthorisationHeader } from "../../helpers/api";
import {selectLangage} from "../../redux/wookie/wookie.selector";
import Planet from '../../components/card-specific/planet'
import Starship from '../../components/card-specific/starship'
import Film from '../../components/card-specific/film'
import Vehicle from '../../components/card-specific/vehicle'
import Specie from '../../components/card-specific/specie'
import People from '../../components/card-specific/people'
import './specific-card.styles.scss';

const SpecificCards = ({match,wookie}) => {
  var type = match.params.categoryType
  var id = match.params.id


  const [data, setData] = useState(undefined)
  useEffect(() => {
    if(wookie){

      api
      .get(`/starwars/wookie/${type}/${id}`, loadAuthorisationHeader())
      .then(res => {
        setData(res.data);
        
      })
      .catch(err => console.log(err));    
    }else{
   
      api
      .get(`/starwars/${type}/${id}`, loadAuthorisationHeader())
      .then(res => {
      setData(res.data);
    })
    .catch(err => console.log(err));
    }   
  }, [wookie,match]);
  
  return(
    <div className='SpecificCards'>
      {data ?
      (<SwitchTypeComponent data={data} match={match} type={type} wookie={wookie} />)
      :
      (<div>loading</div>)
    } 
    </div>
  );
  }



const SwitchTypeComponent = ({match,data,type,wookie}) => {
  switch (type) {
    case 'people':
      return <People match={match} data={data} type={type} wookie={wookie}/>
      break;
    case 'planets':
    return <Planet match={match} data={data} type={type}/>
      break;
      case 'species':
        return <Specie match={match} data={data} type={type}/>
        break;
      case 'starships':
      return <Starship match={match} data={data} type={type}/>
        break;
        case 'films':
          return <Film match={match} data={data} type={type}/>
          break;
        case 'vehicles':
        return <Vehicle match={match} data={data} type={type}/>
          break;
    default:
      break;
  }
};

const mapStateToProps = (state,ownProps) => createStructuredSelector({
  wookie:selectLangage,
});

export default connect(mapStateToProps)(SpecificCards);






