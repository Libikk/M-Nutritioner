const initialState = {
  myNutritionPage: false,
  searchResult: false,
  singleItemNutrition: null,
  error: null,
};

const mainReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'GET_SEARCH_DATA':
      return Object.assign({}, state, { searchResult: action.payload });

    case 'GET_NUTRITION_DATA':
    const nutrition = action.payload.data.report.food.nutrients;
    console.log(action.payload.data.report);
      return Object.assign({}, state, {
        singleItemNutrition: {
          name: action.payload.data.report.food.name,
          id: action.payload.data.report.food.ndbno,
            nutrition: [
            { value: nutrition[1].value, nutritionName: "Kcal" },
            { value: nutrition[2].value, nutritionName: "Protein" },
            { value: nutrition[3].value, nutritionName: "Fat" },
            { value: nutrition[4].value, nutritionName: "Carbohydrates" },
            { value: nutrition[5].value, nutritionName: "Fiber" },
            { value: nutrition[21].value, nutritionName: "Vitamin A" },
            { value: nutrition[14].value, nutritionName: "Vitamin C" },
            { value: nutrition[23].value, nutritionName: "Vitamin E" },
            { value: nutrition[11].value, nutritionName: "Potassium" },
            { value: nutrition[9].value, nutritionName: "Magnesium" },
            { value: nutrition[12].value, nutritionName: "Sodium" },
            { value: nutrition[7].value, nutritionName: "Calcium" },
        ]}
      });

        case 'ADD_TO_NUTRITION_PAGE':
    const newItem = {
      name: state.singleItemNutrition.name,
      id: state.singleItemNutrition.id,
      weight: 100 * action.payload,
      nutrition: state.singleItemNutrition.nutrition.map(single => {
        return { value: single.value * action.payload, nutritionName: single.nutritionName };
      })};
    const newItemMergedWithCurrentList = state.myNutritionPage ? 
      { myNutritionPage: state.myNutritionPage.concat([newItem]) } 
    : { myNutritionPage: [newItem] };
    return Object.assign({}, state, newItemMergedWithCurrentList );

    default: return state;
  }
};
export default mainReducer;
