import React from 'react';

import TodoItem from '../todo-item';

export default ({
  items = [],
  onRemove = e => console.log( 'no onRemove method defined' ),
  onToggle = e => console.log( 'no on Toggle method defined' ),
  onUpdate = e => console.log( 'no on onUpdate method defined' ),
  onModeSwitch = e => console.log( 'no on onModeSwitch method defined' ),
  filters,
}) => {


  const nodes = items
    .filter( ( todo ) => filters.complete ? true : !todo.complete )
    .map( ( todo, index ) => {

      // bind first parameter (todo's index) to update function
      // we will pass the todo's name to be updated in the todo Item component
      // as we'll get it from the user input
      const _onUpdate = onUpdate.bind(null, index);

      return (
        <li key={index}>
          <TodoItem 
            {...todo}
            remove={() => onRemove( todo )}
            toggle={() => onToggle( index ) }
            update={_onUpdate}
            switchMode={() => onModeSwitch( index, todo.mode === 'read' ? 'update' : 'read' ) }
          />
        </li>
      );

    }

  );

  return (
    <ul>
      { nodes }
    </ul>
  );
}

