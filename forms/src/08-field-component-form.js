import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';

const Field = require('./08-field-component-field.js');

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = class extends Component {
    static displayName = '08-field-component-form';
    state = {
        fields: {
            name: '',
            email: '',
        },
        fieldErrors: {},
        people: [],
    };
    onFormSubmit = (evt) => {
        const people = this.state.people;
        const person = this.state.fields;
        evt.preventDefault();
        if (this.validate()) return;
        this.setState({
            people: people.concat(person),
            fields: {
                name: '',
                email: ''
            }
        });
    };
    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors)
            .filter((k) => fieldErrors[k]);
        if (!person.name) return true;
        if (!person.email) return true;
        if (!errMessages.length) return true;
        return true;
    };
    onInputChange = ({ name, value, error }) => {
        const fields = this.state.fields;
        const fieldsErrors = this.state.fieldErrors;
        fields[name] = value;
        fieldsErrors[name] = error;
        this.setState({
            fields, fieldsErrors
        });
    };
    render(){
        return (
            <div>
                <h1>Sign Up Sheet</h1>

                <form onSubmit={this.onFormSubmit}>
                    <Field
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        validate={(val) => (val ? false : 'Name required')}
                    />
                    <br />
                    <Field
                        placeholder="Email"
                        name="email"
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={(val) => (isEmail(val) ? false : 'Invalid Email')}
                    />
                    <br />
                    <input type="submit" disabled={this.validate()} />
                </form>
                <div>
                    <h3>People</h3>
                    <ul>
                        {
                            this.state.people.map(({ name, email }, i) => (
                                <li key={i}>{name} ({email})</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
};