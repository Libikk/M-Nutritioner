export const getSearchData = searchData => ({
  type: 'GET_SEARCH_DATA',
  payload: searchData,
});

export const getNutritionData = nutritionData => ({
  type: 'GET_NUTRITION_DATA',
  payload: nutritionData,
});

export const clearError = () => ({
  type: 'CLEAR_ERROR',
});

export const popUpError = errorMessage => ({
  type: 'POP_UP_ERROR',
  payload: errorMessage,
});

export const changeWeight = value => ({
  type: 'CHANGE_ITEM_WEIGHT',
  payload: value,
});
