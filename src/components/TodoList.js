import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import Card from './Card/Card'
import '../styles/TodoList.css'
import '../styles/Tooltip.css'
import SearchBar from './SearchBar'
import CreateTodo from './CreateTodo'
import ViewTodo from './ViewTodo'

@inject("TodoStore")
@observer
class TodoList extends Component {
    toggleComplete(todo) {
        todo.complete = !todo.complete
    }

    filter(e) {
        this.props.TodoStore.filter = e.target.value
    }

    render() {
        const { filteredTodos } = this.props.TodoStore

        let todos = filteredTodos.map(todo =>
            <Card
                key={todo.id}
                todo={todo}
                fn={this.toggleComplete.bind(this, todo)}
            />
        )

        todos = todos.length > 0 ? todos :
            <h1 className="col-md-12 text-muted text-center" style={{marginTop: "40px", opacity: "0.5"}}>
                You don't have any todos
            </h1>

        const todoViews = filteredTodos.map(todo => <ViewTodo todo={todo} key={todo.id}/>)

        return(
            <div style={{marginTop:"30px"}}>
            {todoViews}
            <div className="container">
                    <SearchBar fn={this.filter.bind(this)}/>
                    <div className="row" style={{margin:"0px"}}>
                        {todos}
                    </div>
            </div>

            <CreateTodo />
            </div>
        )
    }
}

export default TodoList