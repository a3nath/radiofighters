import React, { useEffect, useState } from 'react';
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

    const [modal, setModal] = useState(false);

    const modalShowHandler = () => {
        console.log('modal show triggered')
        setModal(true);
    }

    const modalCloseHandler = () => {
        setModal(false);
    }
    const [artist, setArtist] = useState('')
    // const [albums, setAlbums] = useState([])

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
        setArtist(artistForm.value)    
    };
    
    useEffect(() => {
        props.addArtist(artist)
    }, [artist])

    const getRandomAlbum = (albumArr) => {
        const numAblums = albumArr.length;
        const album = albumArr[Math.floor(Math.random() * numAblums)]
        return album
        
        // [album.strAlbum, parseInt(album.intYearReleased)]
    }
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    const optionGen = (ranArr) => {
        const wrongOptionArr = ranArr.map((option, index) => {
            return {'num': index+1, 'value': option, 'answer': false }
        })
        return wrongOptionArr
    }
    
    const randomGen = (ans) => {
        let intAns = parseInt(ans)
        let ranArr = [];
        let optionArr = [];
        while (ranArr.length < 3) {
            let multipler = Math.random() < 0.5 ? -1 : 1;
            let ranOption = Math.floor(Math.random()* 10) * multipler + intAns
            if (ranArr.indexOf(ranOption) === -1 && ranOption !== intAns) ranArr.push(ranOption)
        }  
        optionArr.push({'num': 0, 'value': intAns, 'answer': true })
        return optionArr = [...optionArr, ...optionGen(ranArr)]
    }

    
    const radioHandler1 = event => {
        props.quesClick1(parseInt(event.target.value))
    }

    const radioHandler2 = event => {
        props.quesClick2(parseInt(event.target.value))
    }
    
    // const [albumName, setAlbum] = useState('')
    // const [albumYear, setAlbumYear] = useState('')
    // const [triviaArr, setTriviaArr] = useState([])

    let quesAnsArr = [];

    console.log('outsideSetArti')
    console.log(props.artist)
    
    // console.log(artist)

    let trivia = null
    console.log(props.albums)


    if (props.artist && props.albums) {
        
        console.log('setArti')
        console.log(props.artist)
        console.log(props.albums)
        let album = getRandomAlbum(props.albums)
        // // //sel random Album
        // // //get Album Year
        const albumName = album.strAlbum
        const albumYear = parseInt(album.intYearReleased)
        quesAnsArr = [
            [{'question': 'What year was the band/artist formed?'}, {'answer': props.artist.intFormedYear}], 
            [{'question': `What year was the album ${albumName} released?`}, {'answer':albumYear }]
        ]
        let triviaArr = quesAnsArr.map((quesAns, index) => {
            let [ques, ans] = quesAns
            let questionBlockArr = []
            return (
            [{'num': index + 1,'text': ques.question}, shuffleArray( randomGen(ans.answer))]
            )
        })
        trivia = <Trivia 
            // albums={props.albums}  
            // ques1={props.ques1} 
            // ques2={props.ques2} 
            // quesClicked1={props.quesClick1} 
            // quesClicked2={props.quesClick2} 
            // q1Opt={props.ques1Opt}
            // q2Opt={props.ques2Opt}
            artist={artist} 
            loading={props.loading}
            error={props.error}
            modalShow={modalShowHandler}
            trivArr = {triviaArr}
            radioClick1={radioHandler1}
            radioClick2={radioHandler2}
        />
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

    if (props.ques1 && props.ques2) {
        scoreSummary = 
        <Score
            q1Opt={props.ques1Opt}
            q2Opt={props.ques2Opt}
        />
    }

    //form valid
    //create dummy form
    //value gets updated once ajax call
    //then form is valid => button

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
                    modalOpen={modal}
                    modalClose={modalCloseHandler}    
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
        ques1Opt: state.questionReducer.ques1Opt,
        ques2Opt: state.questionReducer.ques2Opt,
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Game));