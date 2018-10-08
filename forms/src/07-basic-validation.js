import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = class extends Component {
    static displayName = "07-basic-validation";
    state = {
        fields: {
            name: '',
            email: '',
        },
        fieldErrors: {},
        people: []
    };
    onFormSubmit = (evt) => {
        const people = [...this.state];
        const person = this.state.fields;
        const fieldErrors = this.validate(person);
        console.log(fieldErrors);
        this.setState({ fieldErrors });
        evt.preventDefault();
        if (Object.keys(fieldErrors).length) return;
        this.setState({
            people: people.concat(person),
            fields: {
                name: '',
                email: ''
            },
        });
    };
    validate = (person) => {
        const errors = {};
        if (!person.name) errors.name = 'Name is required';
        if (!person.email) errors.email = 'Email is required';
        if (person.email && !isEmail(person.email)) errors.email = 'Invalid email';
        return errors;
    };
    onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({ fields });
    };
    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                    />
                    <span style={{ color: 'red' }}>{this.state.fieldErrors.name}</span>
                    <br />
                    <input
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                    />
                    <span style={{ color: 'red' }}>{this.state.fieldErrors.email}</span>
                    <br />
                    <input type='submit' />
                </form>
                <div>
                    <h3>People</h3>
                    <ul>
                        {this.state.people.map(({ name, email }, i) =>
                            <li key={i}>{name} ({email})</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
};
