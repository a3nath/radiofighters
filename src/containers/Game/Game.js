import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
//import material Ui
import Button from '@mui/material/Button';

import Input from '../../components/Input/Input';
import Trivia from '../../components/Trivia/Trivia';
import * as artistActions from '../../store/actionCreators/artistActions';
import * as scoreActions from '../../store/actionCreators/scoreActions';
import * as questionActions from '../../store/actionCreators/questionActions';
import * as modalActions from '../../store/actionCreators/modalActions';
import ArtistError from '../../components/ArtistError/ArtistError';
import { Link } from 'react-router-dom';
import classes from './Game.module.css';
import '../../App.css';
import Spinner from '../../components/UI/Spinner/Spinner';



const Game = props => {

    const [artistForm, setArtistForm] = useState({
            value:'',
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Radiohead'
            },
            validation:{
                required:true
            },
            valid:false,
            touched:false
    });

    //checks if form valid
    const [currentStep, setCurrentStep] = useState(1)

    const [artist, setArtist] = useState('')

    //form input handler, triggers when submit form
    const inputHandler = event => {
        event.preventDefault();
        const tempForm = {...artistForm};
        tempForm.value = event.target.value;
        tempForm.touched = true;
        setArtistForm(tempForm)
    };   

    const artistHandler = event => {
        event.preventDefault();
        setArtist(artistForm.value)    
    };

    useEffect(() => {
        props.addArtist(artist)
    }, [artist])

    const getRandomAlbum = (albumArr) => {
        const validAlbum = albumArr.filter(album => album.strReleaseFormat === 'Album')
        const numAblums = validAlbum.length;
        const album = validAlbum[Math.floor(Math.random() * numAblums)]
        return album
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
            let ranOption = Math.floor(Math.random()* 4) * multipler + intAns
            if (ranArr.indexOf(ranOption) === -1 && ranOption !== intAns && ranOption >= 1) ranArr.push(ranOption)
        }  
        optionArr.push({'num': 0, 'value': intAns, 'answer': true })
        return optionArr = [...optionArr, ...optionGen(ranArr)]
    }

    const randomBand = ans => {
        if (ans === null) {
            return props.artErr("Artist doesn't have a label. Please type a different artist")
        }
        const ranLabels = ['XL Recordings', 'Parlophone', 
        'Dreamville', 'Def Jam Recordings', 'Aftermath Entertainment', 
        'Republic Records','EMI', 'Interscope Records', 'Anthem Records', 'Atlantic'];
        let ranArr = [];
        let bandLabel = ans;
            while(ranArr.length < 3){
                let ranOption = ranLabels[Math.floor(Math.random() * ranLabels.length)]
                if (ranArr.indexOf(ranOption) === -1 && ranOption !== bandLabel) ranArr.push(ranOption)
        }
        let optionArr = [];
        optionArr.push({'num': 0, 'value': bandLabel, 'answer': true })
        return optionArr = [...optionArr, ...optionGen(ranArr)]
    }

    const radioHandler1 = event => {
        props.quesClick1({optNum: parseInt(event.target.dataset.tag), optValue: event.target.value, ans: props.artist.intFormedYear})
    }

    const radioHandler2 = event => {
        props.quesClick2({optNum: parseInt(event.target.dataset.tag), optValue: event.target.value, ans: albumYear})
    }

    const radioHandler3 = event => {
        props.quesClick3({optNum: parseInt(event.target.dataset.tag), optValue: event.target.value, ans: artLabel})
    }

  const _next = () => {
    let currStep = currentStep
    currStep = currStep > 2 ? 3: currStep + 1
    setCurrentStep(currStep)
  }
    
    let quesAnsArr = [];
    let trivia = null;
    let album = {}
    let albumName = ''
    let albumYear = 0
    let artLabel = ''

    if (artistForm.value === ''){
        props.artLoad()
    }


    let errModal = null;

    if (artistForm.value !== '' && props.error){
        errModal = <ArtistError errMess={props.error.error}/>
    }

    if (artistForm.value !== '' && !props.error){
        trivia = <Spinner/>
    }

    

 

    if (props.artist && props.albums) {
         
        album = getRandomAlbum(props.albums)
        albumName = album.strAlbum
        albumYear = parseInt(album.intYearReleased)
        artLabel = props.artist.strLabel

        const q3 = "Who is the band's label?"

     
        quesAnsArr = [
            [{'question': `What year was ${props.artist.strArtist} formed?`}, {'answer': props.artist.intFormedYear}], 
            [{'question': `When was the album ${albumName} released?`}, {'answer':albumYear }]
        ]
        let triviaArr = quesAnsArr.map((quesAns, index) => {
            let [ques, ans] = quesAns
            let questionBlockArr = []
            return (
            [{'num': index + 1,'text': ques.question}, shuffleArray( randomGen(ans.answer))]
            )
        })

        triviaArr.push([{'num': 3,'text': q3}, shuffleArray( randomBand(artLabel))])

        trivia = <Trivia 
            artist={artist} 
            img={props.artist.strArtistClearart ? props.artist.strArtistClearart :  props.artist.strArtistBanner }
            loading={props.loading}
            error={props.error}
            trivArr = {triviaArr}
            radioClick1={radioHandler1}
            radioClick2={radioHandler2}
            radioClick3={radioHandler3}
            currStep={currentStep}
            nextBtn = {_next}
        />
    }

    const inputElement = (
            <Input 
                inputtype={artistForm.elementConfig.type}
                placeholder={artistForm.elementConfig.placeholder}
                name='artist'
                id='artist'
                changed={(event) => inputHandler(event)}
                value = {artistForm.value}
                valid={artistForm.valid}
                touched={artistForm.touched}
            />
    );

    let submit = null

    if (currentStep === 3) {
        submit = 
        <Link to='/checkout'>
            <Button variant='contained'>Submit Answers</Button>
        </Link>
    }

    return (
        <div className={classes.Game}>
            <div className={classes.Header}>
                <h1>RadioFighters</h1>     
            </div>
            <div className={classes.Search}>
                <h3>Search your favourite band</h3>
                <form onSubmit={artistHandler} className={classes.artForm}>
                    {inputElement}
                    <Button variant='contained' disabled={artistForm.value === '' } type='submit'>Submit</Button>
                </form>
                {trivia}
                {errModal}
                {submit}
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
        modal: state.modalReducer.modal
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addArtist: (artist) => dispatch(artistActions.addArtistThunk(artist)),
        artErr: (err) => dispatch(artistActions.error(err)),
        artLoad: () => dispatch(artistActions.loading()),
        scoreAdd:  () => dispatch(scoreActions.addScore()),
        quesClick1: (optNum) => dispatch(questionActions.answerQuestion1(optNum)),
        quesClick2: (optNum) => dispatch(questionActions.answerQuestion2(optNum)),
        quesClick3: (optNum) => dispatch(questionActions.answerQuestion3(optNum)),        
        modalShow: () => dispatch(modalActions.modalShow()),
        modalClose: () => dispatch(modalActions.modalClose())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Game));