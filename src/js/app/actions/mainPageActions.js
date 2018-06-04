export const getSearchData = (searchData) => {
    return {
        type: 'GET_SEARCH_DATA',
        payload: searchData
    };
};

export const getNutritionData = (nutritionData) => {
    return {
        type: 'GET_NUTRITION_DATA',
        payload: nutritionData
    };
};