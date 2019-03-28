import React, { Component } from 'react';
import {Redirect} from 'react-router'
import {Form, Button} from 'react-bootstrap/'
import '../CSS/Queue.css'
//import Rows from './Game'
class Queue extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            redirect: false
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({redirect: true})
    }
    handleChange(value, e) {
        this.setState({[value]: e.target.value})
    }
    render() {
        if(this.state.redirect === false){
        return (
            <div style={{borderWidth: 1, borderStyle: 'solid', borderColor: 'black'}}>
            
                <Form >
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label> <br />
                        <Form.Control required type="name" name="name"placeholder="Enter name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} /><br />
                    </Form.Group>
                    <Button variant="primary"  type="submit">
                        Play
                    </Button>
                </Form>
            </div>
        );
        }else {
            return (<Redirect to="/Game" />)
        }
    }
}

export default Queue;