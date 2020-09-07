import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumboTronComponent extends Component {

    constructor(props){
        super(props);
        }

    render() {
        return (
            <div>
                <Jumbotron style={jumbo_style.edit_looks}>
                    <h1>Chrissie's world!</h1>
                    <p>This is me playing around with a component</p>
                    <p>{this.props.children}</p>
                    <p><Button variant="primary">I am actually a button</Button></p>
                </Jumbotron>
            </div>
        );
    }
}

export default JumboTronComponent;

const jumbo_style={
    edit_looks:{
        backgroundColor: 'black',
        color: 'white',
        width: '80%',
        margin: '1em auto',
        padding: '1em'
}
}
