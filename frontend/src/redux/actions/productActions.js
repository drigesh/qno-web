import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const setFrontPageData = (data) => {
  return {
    type: ActionTypes.SET_FRONTPAGE_DATA,
    payload:data
  }
}

export const setShopsData = (data) => {
  return {
    type: ActionTypes.SET_SHOPS_DATA,
    payload:data
  }
}