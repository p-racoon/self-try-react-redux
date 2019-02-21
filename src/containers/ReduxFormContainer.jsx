import React, { Component } from 'react';
import ReduxForm from '../components/ReduxForm';

class ReduxFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleOnSubmit(e){
        
    }
    render() {
        return (
            <ReduxForm handleOnChange={this.handleOnChange} />
        )
    }
}
export default ReduxFormContainer;