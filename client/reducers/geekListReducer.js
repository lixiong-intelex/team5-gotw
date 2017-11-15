export default function geekListReducer(state = [], action) {
    switch(action.type) {    
        // temporary because we need a reducer    
        case 'GET_GEEK_LIST':
            return state;

        default:
            return state;
    }
}