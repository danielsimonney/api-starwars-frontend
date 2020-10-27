import React, { useState } from 'react'
import { useEffect } from 'react';

const SearchBoxNumber = ({data,field,setFilterdData,setDefault,trigger,search,setsearch}) => {

  const [value,setValue] = useState(null)

  useEffect(() => {
    setValue(null)
  }, [trigger]);

  useEffect(() => {
    if(value===null || value===''){
      delete search[field.dataName]
      // I put a setSearch here to force the rerenering
      setsearch({...search})
    }else{
    setsearch({...search,[field.dataName]:[value,field.type]})
    }
    // setFilterdData(data.filter(data => parseInt(data[field.dataName])>value))
  }, [value]);

  return(
    <div className="input-group mb-3">
      <input type="number" className="form-control" onChange={e => setValue(e.target.value)}  value={value || ''} placeholder={field.label} aria-label={field.label} aria-describedby="basic-addon1" />
  </div>
  )
};


export default SearchBoxNumber;
