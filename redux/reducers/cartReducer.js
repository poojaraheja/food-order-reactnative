let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };

      if (action.payload.checkboxValue) {
        console.log("ADD TO CART");

        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items,
            {
              title: action.payload.title,
              price: action.payload.price,
              description: action.payload.description,
              image: action.payload.image,
            },
          ],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log("REMOVE FROM CART");

        newState.selectedItems = {
          items: newState.selectedItems.items.filter(
            (item) => item.title !== action.payload.title
          ),
          restaurantName: action.payload.restaurantName,
        };
      }

      console.log("New State:", JSON.stringify(newState));

      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
