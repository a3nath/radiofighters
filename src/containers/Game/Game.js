import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from  '../../components/UI/Button/Button';
import Input from '../../components/Input/Input';
import Trivia from '../../components/Trivia/Trivia';
import Modal from '../../components/UI/Modal/Modal';
import Score from '../../components/Score/Score';
import * as artistActions from '../../store/actionCreators/artistActions';
import * as scoreActions from '../../store/actionCreators/scoreActions';
import * as questionActions from '../../store/actionCreators/questionActions';
import * as modalActions from '../../store/actionCreators/modalActions';
import ArtistError from '../../components/ArtistError/ArtistError';



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
    };   

    //list will get value from artist form value

    const artistHandler = event => {
        event.preventDefault();
        console.log(artistForm.value)
        // const newForm = {...artistForm};
        // newForm.value = event.target.value;
        // setArtistForm(newForm);
        props.addArtist(artistForm.value);
    };

    const radioHandler1 = event => {
        console.log('radioHandler1')
        console.log(event.target.value)
        props.quesClick1(parseInt(event.target.value))
    }

    const radioHandler2 = event => {
        console.log('radioHandler2')
        console.log(event.target.value)
        props.quesClick2(parseInt(event.target.value))
    }
    
    const inputElement = (
            <Input 
                inputtype={artistForm.elementConfig.type}
                placeholder={artistForm.elementConfig.placeholder}
                name='artist'
                id='artist'
                changed={(event) => inputHandler(event)}
                //if indicator off (dropdown value not selected otherwise dropdown value from store)
                // value={props.artistSelected ? props.artistEnter : artistForm.value}
                value = {artistForm.value}
                valid={artistForm.valid}
                touched={artistForm.touched}
            />
    );

    let scoreSummary = null

    if (props.ques1Opt && props.ques2Opt) {
        scoreSummary = <Score
            q1Opt={props.ques1Opt}
            q2Opt={props.ques2Opt}
        />
    }

    //form valid
    //create dummy form
    //value gets updated once ajax call
    //then form is valid => button


    let trivia = null

    if (props.artist){
        trivia = <Trivia 
            artist={props.artist} 
            albums={props.albums} 
            scoreAdded={props.scoreAdd} 
            ques1={props.ques1} 
            ques2={props.ques2} 
            quesClicked1={props.quesClick1} 
            quesClicked2={props.quesClick2} 
            q1Opt={props.ques1Opt}
            q2Opt={props.ques2Opt}
            loading={props.loading}
            error={props.error}
            modalShow={props.modalShow}
            radioClick1={radioHandler1}
            radioClick2={radioHandler2}
        />
    }

    let errModal = null;

    if (props.error || props.artist === null){
        errModal = <ArtistError errMess={props.error.error}/>
        console.log('ERROR console')
        console.log(props.error)
        console.log(props.error.error)
    }

    return (
        <div>
            <h1>Hello, this is Game Page</h1>
            <p>{props.score}</p>
            <div>
                <form onSubmit={artistHandler}>
                    {inputElement}
                    <Button disabled={!formValid} BtnType='Success'>Submit</Button>
                </form>
                {trivia}
                {errModal}
                <Modal 
                    modalShow={props.modal}
                    modalCloseHandler={props.modalClose}    
                >
                    {scoreSummary}
                </Modal>
                {/* artist needs to load before sending it to Trivia component */}
                {/* <Trivia artist={props.artist}/> */}
                {/* artistList gets list of artists from state*/}
                {/* <ArtistList/> +*/}
            </div>
        </div>
    );
}



const mapStateToProps = state => {
    return {
        loading: state.artistReducer.loading,
        error: state.artistReducer.error,
        //artist object
        artist: state.artistReducer.artist[0],
        //albums object
        albums: state.artistReducer.albums,
        score: state.scoreReducer.score,
        ques1: state.questionReducer.question1,
        ques2: state.questionReducer.question2,
        ques1Opt: state.questionReducer.ques1opt,
        ques2Opt: state.questionReducer.ques2opt,
        modal: state.modalReducer.modal
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addArtist: (artist) => dispatch(artistActions.addArtistThunk(artist)),
        scoreAdd:  () => dispatch(scoreActions.addScore()),
        quesClick1: (optNum) => dispatch(questionActions.answerQuestion1(optNum)),
        quesClick2: (optNum) => dispatch(questionActions.answerQuestion2(optNum)),
        modalShow: () => dispatch(modalActions.modalShow()),
        modalClose: () => dispatch(modalActions.modalClose())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);