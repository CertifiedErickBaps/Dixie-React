import React from 'react';
import {PropTypes} from 'prop-types';

import Task from './Task';

const TodoSearch = ({search, handleToggleTodo, handleDeleteTodo}) =>
    <ul className="list-group">
        {search.map((todo) => <Task
            key={todo.id}
            {...todo}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
        />)}
    </ul>;

TodoSearch.propTypes = {
    search: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        done: PropTypes.bool,
    })),
    handleToggleTodo: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired
};

export default TodoSearch;
