export const initialState = {
  basket: [],
  user: null,
  json: [ 
      { 
      "name":"Potato", 
      "id":1, 
      "price":30, 
      "available":1, 
      "vendor":"Himachal Pvt Ltd", 
      "category":"Vegetables" 
      }, 
      { 
      "name":"Banana", 
      "id":2, 
      "price":50, 
      "available":1, 
      "category":"Fruits",
      "vendor": "Organic farms"

      }, 
      { 
      "name":"Drumsticks", 
      "id":3, 
      "price":20, 
      "available":0, 
      "category":"Vegetables", 
      "vendor":"Mallikarjuna farms"
      }, 
      { 
      "name":"Orange", 
      "id":4, 
      "price":25, 
      "available":1, 
      "vendor":"Nagpur farms", 
      "category":"Fruits" 
      } 
    ]
};

export const getSubtotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      return {
        ...state,
        basket: [...state.basket, action.item],
        // json: [...state.json[action.item.id], action.item.quantity]
      };
    }

    case "EMPTY_BASKET": {
      return {
        ...state,
        basket: [],
      };
    }

    case "REMOVE_FROM_BASKET": {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product (id: ${action.id}: as it is not in basket.`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    }

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_QUANTITY":
      const quantity = action.quantity
      let newJson = [...state.json]

      newJson.forEach((ele) => {
        ele["quantity"] = quantity[ele.id]
      })
      return {
        ...state,
        json: newJson,
      }
    default:
      return state;
  }
};

export default reducer;
