import React from 'react';

export default ({
  remove = e => console.log( 'no remove method defined' ),
  toggle = e => console.log( 'no toggle method defined' ),
  switchMode = e => console.log( 'no switchMode method defined' ),
  update = e => console.log( 'no update method defined' ),
  name,
  complete,
  mode,
}) => {

  let _markup;

  if (mode === 'update'){

    _markup = <div>
        <input 
          type="text"
          defaultValue={name}
          onKeyDown={ 
            (e) => { 
              if (e.keyCode === 13) {

                update(e.target.value)

              }
            } 
          }
        />
        <a href="#" onClick={switchMode}> &lt; </a>
      </div>;

  }
  else {

     _markup = <span>
      <span>
        <a href="#" onClick={switchMode}>{name}</a>
      </span>
        &nbsp;<input type="checkbox" value="1" checked={complete} onChange={toggle} />&nbsp;
        <a href="#" onClick={remove}>x</a>
      </span>;

  }

  return _markup;
}

