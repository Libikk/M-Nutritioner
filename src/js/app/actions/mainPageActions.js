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

export const clearError = () => {
    return { type: 'CLEAR_ERROR' };
};

export const popUpError = (errorMessage) => {
    return { type: 'POP_UP_ERROR',
             payload: errorMessage
    };
};

export const changeWeight = (value) => {
    return { type: 'CHANGE_ITEM_WEIGHT',
             payload: value
    };
};