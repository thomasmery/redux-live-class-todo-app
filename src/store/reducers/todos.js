export default ( todos = [], { type, ...payload } ) => {
  switch ( type ) {
    case 'ADD_TODO_ITEM':

      let _todo_item = Object.assign(payload, { complete: false });

      return [ ...todos, payload ];

      break;
    case 'TOGGLE_TODO_ITEM':

    	console.log(payload);

    	const { index } = payload;
    	_todo_item = Object.assign({}, todos[index], { complete: !todos[index].complete })

      return [].concat(
      	todos.slice(0, payload.index),
      	_todo_item,
      	todos.slice(payload.index+1, todos.length),
      );
    break;
    case 'REMOVE_TODO_ITEM':
      return todos.filter( t => t !== payload.todo );
    break;
  }

  return todos;
};

