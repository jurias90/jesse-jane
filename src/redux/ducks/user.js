import { createAction } from "redux-actions";
import update from "immutability-helper";

/*
|-------------------------------------------------------------------------------
| Action Types
|-------------------------------------------------------------------------------
*/

export const UPDATE_USER = "user/UPDATE_USER";

/*
|-------------------------------------------------------------------------------
| Standard Actions
|-------------------------------------------------------------------------------
*/
export const updateUser = createAction(UPDATE_USER);

/*
|-------------------------------------------------------------------------------
| Reducer
|-------------------------------------------------------------------------------
*/
const initialState = {
  user: {
    firstName: "",
    lastName: "",
    streetnumber: "",
    route: "",
    locality: "",
    administrative_area_level_1: "",
    postal_code: "",
    email: "",
    username: "",
    password: ""
  }
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return update(state, { user: { $merge: payload } });

    default:
      return state;
  }
};
