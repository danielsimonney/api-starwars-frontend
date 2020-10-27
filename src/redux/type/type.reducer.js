const INITIAL_STATE = {
  sections : [
    {
      title: 'Planets',
      titleWookie: "akanrawhwoaoc",
      imageUrl: 'https://www.purecostumes.com/mm5/graphics/infographic/Info-Star-Wars-Planets.jpg',
      id: 1,
      linkUrl: 'type/planets'
    },
    {
      title: 'Personnage',
      titleWookie: "oaacrarcraoaaoworcc",
      imageUrl: 'https://fr.web.img3.acsta.net/r_640_360/newsv7/17/07/03/16/02/403543.jpg',
      id: 2,
      linkUrl: 'type/people'
    },
    {
      title: 'species',
      titleWookie: "cakwooaahwoc",
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91PeiOTGJwL.jpg',
      id: 3,
      linkUrl: 'type/species'
    },
    {
      title: 'starships',
      titleWookie: "caorarccacahakc",
      imageUrl: 'https://static.hitek.fr/img/42/2016/01/fb_faucon-millenium.jpg',
      id: 4,
      linkUrl: 'type/starships'
    },
    {
      title: 'films',
      titleWookie: "wwahanscc",
      imageUrl: 'https://editioncollector.fr/wp-content/uploads/2019/12/jaquette-blu-ray-2D4K-star-wars.jpg',
      id: 5,
      linkUrl: 'type/films'
    },
    {
      title: 'vehicles',
      titleWookie: "howoacahoaanwoc",
      imageUrl: 'https://i.pinimg.com/originals/15/ab/5a/15ab5a7c6315ac67bedbe49a2fb0b9a4.jpg',
      id: 6,
      linkUrl: 'type/vehicles'
    },
  ]
};

const typeReducer = (state = INITIAL_STATE,action) => {
  switch(action.type){
    default:
      return state;
  }
};

export default typeReducer;