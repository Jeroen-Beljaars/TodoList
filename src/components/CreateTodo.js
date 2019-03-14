import React, { Component } from 'react'
import {FaPlus} from "react-icons/fa";
import Modal from './Modal/Modal';
import {inject, observer} from "mobx-react";

@inject("TodoStore")
@observer
class CreateTodo extends Component {
    state = { show: false, validTitle: true }

    openModal = () => {
        this.setState({show: true})
    }

    closeModal = () => {
        this.setState({show: false})
        this.setState({validTitle: true});
        this.title.value = ""; this.description.value = "";
    }

    newTodo = () => {
        let valid = this.title.value !== ""
        this.setState({validTitle: valid});
        if (valid) {
            this.props.TodoStore.createTodo(this.title.value, this.description.value)
            this.title.value = ""
            this.description.value = ""
            this.closeModal()
        }
    }

    render() {
        var titleClass = this.state.validTitle ? 'form-control' : 'form-control is-invalid';
        var feedback = this.state.validTitle ? null :
            <div className="invalid-feedback">This field is required</div>
        return (
            <div>
                <Modal show={this.state.show} handleClose={this.closeModal} handleSave={this.newTodo} title="Create new todo">
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className={titleClass}  id="title" maxLength={30}
                                   placeholder="Make my homework" ref={input => this.title = input}
                            />
                            {feedback}
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea type="text" className="form-control" id="description" rows={5}
                                   placeholder="Exercise 1,2,4,9 and 10 for my maths class" ref={input => this.description = input} />
                        </div>
                    </form>
                </Modal>

                <button tooltip="Create new todo" type="button" className="btn btn-success btn-circle btn-xl" onClick={this.openModal}><FaPlus/></button>
            </div>
        )
    }
}

export default CreateTodo