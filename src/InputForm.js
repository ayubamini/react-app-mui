import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
    }
    handleSubmit(event) {
        alert('Assignment 1 Task 1 by: ' + this.state.firstName + ' ' + this.state.lastName);
        event.preventDefault();
    }
    render() {
        return (
            <form autoComplete="false" onSubmit={this.handleSubmit}>
                <TextField autoFocus label={'Student ID'} margin="dense" fullWidth />
                <TextField autoFocus label={'First Name'} margin="dense" name="firstName" value={this.state.firstName} onChange={this.handleChange} fullWidth/>
                <TextField autoFocus label={'Last Name'}  margin="dense" name="lastName" value={this.state.lastName} onChange={this.handleChange} fullWidth/>
                <TextField autoFocus label={'Email'} margin="dense" fullWidth/>
                <TextField autoFocus label={'Course'} margin="dense" fullWidth/>
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        );
    }
}


export default InputForm;