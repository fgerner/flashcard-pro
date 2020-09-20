import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button, Form, FormControl, FormGroup, FormLabel} from 'react-bootstrap';

class StackForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            cards: []
        };
    }

    addCard() {
        const {cards} = this.state;
        cards.push({id: cards.length, prompt: '', answer: ''});
        this.setState({cards});
    }

    render() {
        return (<div>
            <Link to={'/'} className={'link-home'}><h4>Home</h4></Link>
            <h4>Create a new stack</h4>
            <br/>
            <Form inline>
                <FormGroup>
                    <FormLabel>Title:</FormLabel>
                    {' '}
                    <FormControl/>
                </FormGroup>
            </Form>
            <br/>
            <Button onClick={() => this.addCard()}>Add Card</Button>
        </div>)
    }
}

export default StackForm;