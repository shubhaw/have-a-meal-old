import { SEARCH_MEAL } from "../actions/actionTypes";

const initialState = {
    availableItems: [
        {
            id: 1,
            itemname: 'Non Veg Combo',
            availabletime: '07:00-11:00, 17:00-22:00',
            price: '259'
        },
        {
            id: 2,
            itemname: 'Veg Combo',
            availabletime: '12:00 PM',
            price: '249'
        },
        {
            id: 3,
            itemname: 'Fish Combo',
            availabletime: '12:00 PM',
            price: '289'
        },
        {
            id: 4,
            itemname: 'Chicken Biryani',
            availabletime: '12:00 PM',
            price: '259'
        },
        {
            id: 5,
            itemname: 'Veg Biryani',
            availabletime: '12:00 PM',
            price: '229'
        },
        {
            id: 6,
            itemname: 'Paneer Combo',
            availabletime: '12:00 PM',
            price: '249'
        }
    ],
    searchResults: [
        {
            id: 1,
            itemname: 'Non Veg Combo',
            availabletime: '12:00 PM',
            price: '259'
        },
        {
            id: 2,
            itemname: 'Veg Combo',
            availabletime: '12:00 PM',
            price: '249'
        },
        {
            id: 3,
            itemname: 'Fish Combo',
            availabletime: '12:00 PM',
            price: '289'
        },
        {
            id: 4,
            itemname: 'Chicken Biryani',
            availabletime: '12:00 PM',
            price: '259'
        },
        {
            id: 5,
            itemname: 'Veg Biryani',
            availabletime: '12:00 PM',
            price: '229'
        },
        {
            id: 6,
            itemname: 'Paneer Combo',
            availabletime: '12:00 PM',
            price: '249'
        }
    ]
}

export default function availableItemsReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MEAL: {
            if (action.name.length === 0) {
                return {
                    ...state,
                    searchResults: state.availableItems
                };
            }
            const results = state.availableItems.filter(item => item.itemname.indexOf(action.name) !== -1);
            return {
                ...state,
                searchResults: results
            };
        }
        default:
            return state;
    }
}