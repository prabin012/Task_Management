import { useReducer } from "react";

export const Cartreducer = (state, action) =>{

    switch (action.type) {
        case "Add_To_Cart":
            const existingItemIndex = state.cartItem.findIndex(item => item.id === action.payload.id);

        if (existingItemIndex !== -1) {
            const updatedCartItems = state.cartItem.map((item, index) =>
            index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
         );

         return {
            ...state,
             cartItem: updatedCartItems,
            };
        } else {
            return {
             ...state,
             cartItem: [...state.cartItem, { ...action.payload, quantity:1 }],
            };
    }
            // return {
            //     ...state,
            //     cartItem:[...state.cartItem, action.payload]
                
                
            // }
        case "Remove_From_Cart" :
            return {
                ...state,
                cartItem :state.cartItem.filter((item) => item.id!==action.payload.id),
            }

        case "INCREMENT" :
           return {
            ...state,
            cartItem:state.cartItem.map((item)=>
            
                item.id===action.payload.id ? {...item, quentity:item.quentity+1}:item
            )
          
        }
        case "DECEREMENT":
            return {
                ...state,
                cartItem:state.cartItem.map((item)=>
                item.id===action.payload.id ? {...item, quentity:item.quentity > 1 ? item.quentity - 1 :1}:item
                )
            }
        default:
            return state;
    }   
}
