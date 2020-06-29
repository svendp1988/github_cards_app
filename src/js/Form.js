import React from "react";
import axios from "axios";

export class Form extends React.Component {
    state = {
        userName: "",
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
            this.props.onSubmit(response.data);
        } catch (e) {
            alert(e);
        }
        this.setState({
            userName: "",
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={this.state.userName}
                    onChange={event => this.setState( { userName: event.target.value })}
                    required
                />
                <button>Add User</button>
            </form>
        )
    }
}
