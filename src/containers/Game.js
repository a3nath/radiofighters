import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from  '../components/UI/Button/Button';
import Input from '../components/Input/Input';
import ArtistSearch from '../components/ArtistSearch/ArtistSearch';
import ArtistList from '../components/ArtistList/ArtistList';
import * as actionCreators from '../store/actionCreators/index';



const Game = props => {

    const [artistForm, setArtistForm] = useState({
            value:'',
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Artist name'
            },
            validation:{
                required:true
            },
            valid:false,
            touched:false
    });

    //checks if form valid
    const [formValid, setFormValid] = useState(false);

    const validHandler = artist => {
        //if artist exists
        //api call
    };

    //form input handler, triggers when submit form
    const inputHandler = event => {
        event.preventDefault();
        const tempForm = {...artistForm};
        tempForm.value = event.target.value;
        tempForm.touched = true;
        setArtistForm(tempForm)
        //dispatch input typed value to fetch
        //props.addArtist(event.target.value)
        console.log(event.target.value)
    };   

    //list will get value from artist form value

    const artistHandler = (event) => {
        event.preventDefault();
        const newForm = {...artistForm};
        newForm.value = event.target.value;
        setArtistForm(newForm);
        props.addArtist(event.target.value);
        //async operation

    };
    
    const inputElement = (
            <Input 
                inputType={artistForm.elementConfig.type}
                placeholder={artistForm.elementConfig.placeholder}
                name='artist'
                id='artist'
                changed={inputHandler}
                //if indicator off (dropdown value not selected otherwise dropdown value from store)
                // value={props.artistSelected ? props.artistEnter : artistForm.value}
                value = {artistForm.value}
                valid={artistForm.valid}
                touched={artistForm.touched}
            />
    );

    //form valid
    //create dummy form
    //value gets updated once ajax call
    //then form is valid => button

  

    return (
        <div>
            <h1>Hello, thsis is Game Page</h1>
            <div>
                <form onSubmit={artistHandler}>
                    {inputElement}
                    <Button disabled={!formValid} BtnType='Success'>Submit</Button>
                </form>
                {/* artistList gets list of artists from state*/}
                {/* <ArtistList /> */}
                <ArtistList/>
            </div>
        </div>
    );
}

// const mapStateToProps = state => {
//     return {
//         artistSel: state.artistReducer.artistSelected,
//         artistEnter: state.artistReducer.artistEnter
//     };
// }

const mapDispatchToProps = dispatch => {
    return {
        addArtist: (artist) => dispatch(actionCreators.addArtistThunk(artist)) 
    };
};

export default connect(null, mapDispatchToProps)(Game);