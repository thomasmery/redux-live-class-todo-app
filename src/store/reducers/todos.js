export default ( todos = [], { type, ...payload } ) => {
  switch ( type ) {

    case 'ADD_TODO_ITEM':

      let _todo_item = { 
      	...payload,
      	complete: false,
      	mode: 'read',
      };

      return [ ...todos, _todo_item ];

      break;

    case 'TOGGLE_TODO_ITEM':

    	// extracting item from state
    	// and setting complete atttribute
    	// depending on previous complete status
    	let { index } = payload;
    	_todo_item = Object.assign({}, todos[index], { complete: !todos[index].complete })

		return [].concat(
			todos.slice(0, payload.index),
			_todo_item,
			todos.slice(payload.index+1, todos.length),
		);

    break;

    case 'SWITCH_ITEM_MODE':

      const { mode } = payload;

      return [
        ...todos.slice(0, payload.index),
        {...todos[payload.index], mode },
        ...todos.slice(payload.index+1, todos.length),
      ];

    break;

    case 'UPDATE_ITEM':

      const { name } = payload;

      return [
        ...todos.slice(0, payload.index),
        { ...todos[payload.index], name, mode: 'read' },
        ...todos.slice(payload.index+1, todos.length),
      ];

    break;

    case 'REMOVE_TODO_ITEM':

      return todos.filter( t => t !== payload.todo );

    break;

  }

  return todos;
};

