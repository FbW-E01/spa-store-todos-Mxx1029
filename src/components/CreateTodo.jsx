import React from 'react';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            todoText: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.createTodo({
            id: Math.ceil(Math.random() * 99999999),
            user: this.props.user.id,
            text: this.state.todoText,
            done: false
        });
    }

    render() {
        console.log("CreateTODO render function is running!");
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.todoText}
                    onChange={this.handleChange}
                />
                <button type="submit">Add TODO</button>
            </form>
        );
    }
}

export default CreateTodo;