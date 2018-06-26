export const getSearchData = searchData => ({
  type: 'GET_SEARCH_DATA',
  payload: searchData,
});

export const getNutritionData = nutritionData => ({
  type: 'GET_NUTRITION_DATA',
  payload: nutritionData,
});

export const removeItem = idItem => ({
  type: 'REMOVE_ITEM',
  payload: idItem,
});

export const changeWeightMyItem = nutritionDetails => ({
  type: 'CHANGE_WEIGHT_OF_MY_ITEM',
  payload: nutritionDetails,
});

export const clearError = () => ({
type: 'CLEAR_ERROR',
});

export const popUpError = errorMessage => ({
  type: 'POP_UP_ERROR',
  payload: errorMessage,
});

export const fetchNutritionPageContent = data => ({
  type: 'FETCH_NUTRITION_PAGE',
  payload: data,
});
