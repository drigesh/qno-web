import { ActionTypes } from "../constants/action-types";
// const intialState = {};

// export const productsReducer = (state = intialState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SET_PRODUCTS:
//       // return { ...state, products: payload };
//       return state;
//     default:
//       return state;
//   }
// };

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
//   console.log(type);
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCT:
//       return { ...state, ...payload };
//     case ActionTypes.REMOVE_SELECTED_PRODUCT:
//       return {};
//     default:
//       return state;
//   }
// };

export const setFrontPageDataReducer = (state = {},{type,payload}) => {
  switch(type){
    case ActionTypes.SET_FRONTPAGE_DATA:
      return { ...state, ...payload };
    default:
      return state;
  }
}

export const setShopsDataReducer = (state = {},{type,payload}) => {
  switch(type){
    case ActionTypes.SET_SHOPS_DATA:
      return { ...state, ...payload };
    default:
      return state;
  }
}