import React, { Component } from 'react'
import HeaderImage from './HeaderImage'
import Body from './Body'
import Footer from './Footer'
import { FaRegCheckCircle } from 'react-icons/fa';
import '../../styles/Card.css'
import {inject, observer} from "mobx-react";

@inject("TodoStore")
@observer
class Card extends Component {
    isFinished(){
        if(this.props.todo.complete) return (
            <div style={{position:"absolute", top:"10px", right:"10px"}} >
                <FaRegCheckCircle size="2rem" color="green"/>
            </div>
        );
        else return null
    }

    openModal() {
        this.props.todo.show = true
    }

    deleteTodo(todo) {
        this.props.TodoStore.deleteTodo(todo);
    }

    render() {
        return(
            <div className="col-sm-4 " style={{padding:"0px", maxHeight:"20rem"}}>
                <div className="card" style={{height:"100%"}}>
                    {this.isFinished()}
                    <HeaderImage image={this.props.todo.image}/>
                    <Body
                        viewTodo={this.openModal.bind(this)}
                        title={this.props.todo.title}
                        description={this.props.todo.description}
                    />
                    <Footer fn={this.props.fn} completed={this.props.todo.complete} date={this.props.todo.date} delete={this.deleteTodo.bind(this, this.props.todo)}/>
                </div>
            </div>
        )
    }
}

export default Card