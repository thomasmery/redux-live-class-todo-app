import React from 'react';

import TodoItem from '../todo-item';

export default ({
  items = [],
  onRemove = e => console.log( 'no onRemove method defined' ),
  onToggle = e => console.log( 'no on Toggle method defined' ),
}) => {
  const nodes = items.map( ( todo, index ) => (
    <li key={index}>
      <TodoItem 
        {...todo}
        remove={() => onRemove( todo )}
        toggle={() => onToggle( index ) }
      />
    </li>
  ));

  return (
    <ul>
      { nodes }
    </ul>
  );
}

