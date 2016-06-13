import {INCREMENT} from 'shared/constants';

const initialState = {
  counter: 0
};

export default function dashboard(state = initialState, action) {
  const newState = {...state};

  switch(action.type) {
    case INCREMENT:
      newState.counter += 1;
      return newState;

    default:
      return newState;
  }
}
