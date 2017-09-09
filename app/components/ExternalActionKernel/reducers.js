import { fromJS } from 'immutable';

const initialState = fromJS({
  switchText: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_TEXT':
      return state.merge({
        switchText: action.payload,
      });
    default:
      return state;
  }
};
