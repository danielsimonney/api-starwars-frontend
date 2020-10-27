import React from 'react'
import { withRouter } from 'react-router-dom'
import './typeCard.styles.scss'

const TypeCard = ({title,imageUrl,history,linkUrl,match,wookie,titleWookie}) => (
  <div  className="menu-item" onClick={() =>history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image" style={{
    backgroundImage: `url(${imageUrl})`
  }} />
    <div className="content">
      <h1 className="title">{wookie?titleWookie.toUpperCase():title.toUpperCase()}</h1>
    </div>
  </div>
)

export default withRouter(TypeCard);
