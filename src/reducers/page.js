import * as types from '../constants/ActionTypes';
import at from "lodash/at";
const initialState = {
  pageNo: 1
};

export default function page(state = initialState, action) {
  const [totalFriends, pageSize] = at(action, ["payload.totalFriends", "payload.pageSize"]);
  const totalPages = Math.ceil(totalFriends/pageSize);
  switch (action.type) {
    case types.NEXT_PAGE:
      const nextPageNo = state.pageNo>=totalPages?totalPages: state.pageNo+1;
      return {
        ...state,
          pageNo: nextPageNo
      };
    case types.PREV_PAGE:
        const prevPageNo = state.pageNo<=1?1: state.pageNo-1;
      return {
        ...state,
          pageNo: prevPageNo
      };
    default:
      return state;
  }
}
