import React from 'react';
import { connect } from 'react-redux';

import addItem from '../../store/actions/add-item';
import removeItem from '../../store/actions/remove-item';
import toggleItem from '../../store/actions/toggle-item';
import { switchItemMode, updateItem } from '../../store/actions/toggle-item';
import { filterCompleteItems } from '../../store/actions/filter-items';
import TodoItems from '../todo-items';

export class TodoList extends React.Component {
  constructor ( props ) {
    super( props )

    this.state = {
      value: '',
    };
  }

  componentDidMount () {
    this._focus();
  }

  render () {
    const {
      onAdd = e => e,
      onRemove = e => e,
      onToggle = e => e,
      onUpdate = e => e,
      onModeSwitch = e => e,
      todos = [],
      todos_filter_complete,
      onFilterComplete = e => e,
    } = this.props;

    const {
      value
    } = this.state;

    return (
      <div>
        <h1>Todo List</h1>

        <p>
          This is a very simple React+Redux demo app. Don't look - I'm hideous.
        </p>

        <form onSubmit={::this._onSubmit}>
          <label htmlFor="add-todo">Add a new item:</label>
          <input ref="input" id="add-todo" value={value} onChange={::this._onChange} />
          <button type="submit">Add</button>
        </form>

        <div>FILTER COMPLETE ITEMS: <input type="checkbox" onClick={onFilterComplete} /></div>
        
        { todos.length
          ?
          <TodoItems
            items={todos}
            filters={{ complete: todos_filter_complete}}
            onRemove={onRemove}
            onToggle={onToggle}
            onUpdate={onUpdate}
            onModeSwitch={onModeSwitch}
          />
          :
          <p>You have no todos.</p>
        }
      </div>
    );
  }

  _focus () {
    this.refs.input.focus();
  }

  _onChange ({ target: { value } }) {
    this.setState({ value });
  }

  _onSubmit ( e ) {
    e.preventDefault();

    this.props.onAdd( this.state.value );
    this.setState({ value: '' });
    this._focus();
  }
}

export const mapStateToProps = ({ app, todos }) => ({
  todos,
  todos_filter_complete: app.filters.todos.complete
});

export const mapDispatchToProps = dispatch => ({
  onAdd: v => dispatch( addItem( v ) ),
  onRemove: todo => dispatch( removeItem( todo ) ),
  onToggle: index => dispatch( toggleItem (index) ),
  onUpdate: (index, name) => dispatch( updateItem (index, name) ),
  onModeSwitch: (index, mode) => dispatch( switchItemMode (index, mode) ),
  onFilterComplete: () => dispatch( filterCompleteItems () ),
});

export default connect( mapStateToProps, mapDispatchToProps )( TodoList );

