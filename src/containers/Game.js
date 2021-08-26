import React from 'react';
import Button from  '../components/UI/Button/Button';
import Input from '../components/Input/Input';

const Game = props => {
    
    const inputElement = props => {
        <input 
            type='text'
            placeholder='Artist Name'
            name='artist'
            id='artist'
            onChange={props.changed}
            value={props.value}
        />
    }

    const artistHandler = event => {
        event.preventDefault;

    }

    //form valid
    //create dummy form
    //value gets updated once ajax call
    //then form is valid => button

    
    return (
        <div>
            Hello, thsis is Game Page
            <div>
                <form onSubmit={artistHandler}>
                    <label for='artist'>Enter artist Name</label>
                    {inputElement}
                    <Button disabled={!formValid} BtnType='Success'>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Game;