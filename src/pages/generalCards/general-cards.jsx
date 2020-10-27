import React, { useEffect, useState } from 'react'
import { api, loadAuthorisationHeader } from "../../helpers/api";
import './general-cards.scss';
import {selectLangage} from "../../redux/wookie/wookie.selector";
import Table from '../../components/table/table'


const GeneralCards = ({match,wookie,searchBox}) => {
  var type = match.params.categoryType
  
  const [data, setData] = useState(undefined)
  useEffect(() => {
    console.log("useefefkezof")
    if(wookie){
      console.log("pas la")
      api
      .get("/starwars/wookie/"+type, loadAuthorisationHeader())
      .then(res => {
        setData(res.data);
        console.log(res.data)
      })
      .catch(err => console.log(err));    
    }else{
      api
      .get("/starwars/"+type, loadAuthorisationHeader())
      .then(res => {
      setData(res.data);
    })
    .catch(err => console.log(err));
    }   
  }, [wookie,match]);


  
  return(
    <div className='generalCards'>
        Voici la liste des {type} de mon application
        {data ? <Table match={match} data={data} type={type} />:<div>Loading</div>}
    </div>
  );
  }
export default GeneralCards;






