import React from 'react';
import LinkComponent from './linkComponent';

const Film  = ({data}) => {
  return(
    <div className="card" style={{width:"80vw"}}>
  <div className="card-body">
  <h5 className="card-title">Movie title : {data.aoahaoanwo || data.title} episode {data.aoahaoanwo || data.title} of the saga</h5>
    <p className="card-text">
      Resum of the movie : {data.ooakwowhahwhrr_oarcraohan || data.opening_crawl}
    </p>
  </div>
  <ul className="list-group list-group-flush">
  <li className="list-group-item">Director : {data.waahrcwooaaooorc || data.director}</li>
  <li className="list-group-item">Producer: {data.akrcoowahuoaworc || data.producer}</li>
  <li className="list-group-item">Release date: {data.rcwoanworacwo_waraaowo || data.release_date}</li>
  <LinkComponent data={data} normalkey="characters" wookiekey="oaacrarcraoaaoworcc" sentence="List of all the characters present in the movie : " />
  <LinkComponent data={data} normalkey="planets" wookiekey="akanrawhwoaoc" sentence="List of all the planets seen in this movie : " />
  <LinkComponent data={data} normalkey="starships" wookiekey="caorarccacahakc" sentence="List of all the starships who fight in the movie : " />
  <LinkComponent data={data} normalkey="vehicles" wookiekey="howoacahoaanwoc" sentence="All the vehicles that are present in this movie." />
  <LinkComponent data={data} normalkey="species" wookiekey="cakwooaahwoc" sentence="All the species that are present in this movie" />
  </ul>
</div>
);
  }
export default Film;