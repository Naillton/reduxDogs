import {  REQUEST_IMAGE, GET_IMAGE, FAILED_REQUEST } from '../reducer';

const initialState = {
    isFetching: false,
    imagePath: '',
    error: '',
};
  
export function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: action.payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
    }
}
