import React from 'react';
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }
    onChange(e){
        this.setState();
    }
    render() {
        return (
            <form>
                <h1>Join Our Community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign Up
                    </button>
                </div>
            </form>
        )
    }
}
export default SignupForm;