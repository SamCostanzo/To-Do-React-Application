import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class AddTodo extends Component {
    
    state = {
        title: ''
    }
    



    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    };




    onChange = (e) => this.setState({ [e.target.name]: e.target.value });



    render() {
        return (
            <div>
                <form onSubmit = { this.onSubmit } style = {{ display: 'flex' }}>
                     <input 
                        type = 'text' 
                        name = 'title' 
                        style = {{ flex: '10', padding: '5px' }}
                        placeholder = 'Add...'
                        value = { this.state.title }
                        onChange = { this.onChange }
                        onFocus = { (e) => e.target.placeholder = '' }
                        onBlur = { (e) => e.target.placeholder = 'Add...' }
                    />
                    <input 
                        type = 'submit' 
                        value = 'Add'
                        className = 'btn'
                        style = {{ flex: '1' }}
                        disabled = {this.state.title === ''}
                    />
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;
