import {createStore} from "redux";

const initialState = {
    list : []
};

    const listReducer = (state = initialState, action) =>{
        switch(action.type){
            case 'ADD_TO_LIST':
                return {list: [...state.list, action.payload] };
            case 'REMOVE_FROM_LIST':
                return {list: state.list.filter(item=>item.id!==action.payload.id)};
            case 'CLEAR_LIST':
                return {list: []};
            default:
                return state;
        }
    }
     
    const list = createStore(listReducer);
     
     
    export default list;