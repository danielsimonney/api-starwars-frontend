import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectLangage} from '../../redux/wookie/wookie.selector'
import ListElement from '../list-element/list-element.component';
import SearchBoxMain from '../searchBox/searchBoxMain'
import {selectSearchBoxType} from '../../redux/searchbox/searchbox.selector'
const Table  = ({data,type,wookie,match}) => {
const [filterdData,setFilterdData] = useState(data)
  const [trigger, setTrigger] = useState(true)
  const searchBox = useSelector(selectSearchBoxType(match.params.categoryType))
  useEffect(() => {
    
    console.log(searchBox)
    setFilterdData(data)
    setTrigger(true)
  }, [wookie,data,match]);

  return(
    <div>
      {wookie ? null:
      <>
      <SearchBoxMain data={data} setFilterdData={setFilterdData} match={match} searchBox={searchBox} trigger={trigger} />
      <button className="btn-primary" style={{marginBottom:"25px",marginTop:"25px"}} onClick={() => setTrigger(!trigger)} >
      Reset searchfield
    </button>
      </>
      }
    <table className="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Creation date</th>
        <th scope="col">updated date</th>
        <th scope="col">See more informations</th>
      </tr>
    </thead>
    <tbody>
    {filterdData.map((data,index) => (
         <ListElement key={index} data={data} type={type} index={index} />
        ))}
    </tbody>
  </table>
  </div>
  )};

 
  const mapStateToProps = (state,ownProps) => createStructuredSelector({
    wookie:selectLangage,
  });

export default connect(mapStateToProps)(Table);