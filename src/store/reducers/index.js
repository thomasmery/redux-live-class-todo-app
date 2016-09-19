import { combineReducers } from 'redux';
import todos from './todos';

const initialState = { 
	filters: { 
		todos: {
			complete: true,
		}
	} 
}

function app (state = initialState, action) {

	switch ( action.type ) {

	    case 'FILTER_TODO_COMPLETE_ITEMS':

	    	return {
    			...state,
				filters: { 
					todos: {
						complete: !state.filters.todos.complete,
					}
				}
			};

		default:
			return state;

	}

}

export default combineReducers({ app, todos });

