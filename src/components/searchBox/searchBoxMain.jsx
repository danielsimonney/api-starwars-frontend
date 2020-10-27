import React from 'react'
import SearchBoxNumber from './searchBoxNumber'
import SearchBoxText from './searchBoxText'
import './searchBox.styles.scss'
import { useEffect } from 'react';
import { useState } from 'react';

const SearchBoxMain = ({searchBox,setFilterdData,data,trigger,match}) => {

  const [search, setsearch] = useState({})



  useEffect(() => {

    var internalData = data
    if(Object.keys(search).length === 0 && search.constructor === Object){
      setFilterdData(data)
    }
    for (const property in search) {
     if(search[property][1]==="number"){
       if(internalData[property]!=="unknown" || internalData[property]!=="n/a")
        internalData = (internalData.filter(data =>parseInt(data[property])>search[property][0]))
     }
     if(search[property][1]==="name"){
      internalData = (internalData.filter(data => data[property].toLowerCase().includes(search[property][0].toLowerCase())))  
    }
    setFilterdData(internalData)
  }
  }, [search,trigger,match]);

  return(
  <div className="searchBox-container">
    Filter by fields , all the number filter are for minimal value :
    {
      searchBox.map((info,index) => (
        <SwitchSearchBox key={index} info={info} trigger={trigger} setsearch={setsearch} search={search} setFilterdData={setFilterdData} data={data}/>
      ))
    }
  </div>
  )
};


const SwitchSearchBox = ({info,data,setFilterdData,trigger,search,setsearch}) => {
  switch (info.type) {
    case 'name':
      return <SearchBoxText field={info} data={data} setFilterdData={setFilterdData} setsearch={setsearch} search={search} trigger={trigger}/>
      break;
    case 'number':
    return <SearchBoxNumber field={info} data={data} setFilterdData={setFilterdData} setsearch={setsearch} search={search} trigger={trigger} />
      break;
    default:
      break;
  }
};


export default SearchBoxMain;