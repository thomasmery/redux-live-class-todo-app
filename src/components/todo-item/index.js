import React from 'react';

export default ({
  remove = e => console.log( 'no remove method defined' ),
  toggle = e => console.log( 'no toggle method defined' ),
  name,
  complete,
}) => {

  return (
    <span>
      <span>
        {name}
      </span>
      <a href="#" onClick={remove}>X</a><input type="checkbox" value="1" checked={complete} onChange={toggle} />
    </span>
  );
}

