import { CSConstants } from '../_constants';

export function customers(state = {}, action) {
  switch (action.type) {
    case CSConstants.CSSrch:
      return {
        CSSrch: action.result
      };
    default:
      return state
  }
}