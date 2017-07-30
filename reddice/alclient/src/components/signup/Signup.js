import React from 'react';
import SignupForm from './SignupForm';
class Signup extends React.Component {
    
    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <SignupForm />
                </div>
            </div>
        );
    }
}
export default Signup;