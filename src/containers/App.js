import React, { Component } from 'react';
import Button from '../components/Button';
import CounterListContainers from './CounterListContainers';
import getRandomColor from '../lib/getRandomColor';

import { connect } from 'react-redux';
import * as actions from '../actions';


class App extends Component {

    render(){
        const { onCreate, onRemove }= this.props;
        return (
            <div className="App">
                <Button
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainers/>
            </div>
        );
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate : () => dispatch(actions.create(getRandomColor())),
    onRemove : () => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);