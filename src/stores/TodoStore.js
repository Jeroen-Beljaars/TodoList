import {computed, observable} from 'mobx';

class Todo {
    @observable id
    @observable image
    @observable title
    @observable description
    @observable complete
    @observable date
    @observable show

    constructor(title, description, image=null) {
        this.id=Date.now()
        this.image=image
        this.title = title
        this.description = description
        this.complete=false
        this.date = new Date()
        this.show = false
    }
}

class TodoStore {
    @observable todos =[]
    @observable filter=""
    @computed get filteredTodos() {
        var searchFilter = new RegExp(this.filter, "i")
        return this.todos.filter(todo => !this.filter || searchFilter.test(todo.title))
    }

    createTodo(title, description) {
        this.todos.push(new Todo(title, description))
    }

    deleteTodo(deleteTodo) {
        const withoutRemoved = this.todos.filter(todo => todo.id != deleteTodo.id)
        this.todos = withoutRemoved
    }
}

export default new TodoStore();