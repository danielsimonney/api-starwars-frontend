import SEARCHBOX from './searchbox.data';

const INITIAL_STATE = {
  all: SEARCHBOX
};

const searchboxReducer = (state = INITIAL_STATE,action) => {
  switch(action.type){
    default:
      return state;
  }
};

export default searchboxReducer;