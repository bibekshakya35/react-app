import React, { Component } from 'react';

class UserForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.userName;
        const name = node.value;
        this.props.setUserName(name);
        node.value = '';
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input
                    className="form-control"
                    placeholder="Add Channel"
                    type="text"
                    ref="userName"
                />
            </form>
        )
    }
}
UserForm.propTypes = {
    setUserName: React.PropTypes.func.isRequired
}
export default UserForm;