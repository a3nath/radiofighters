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

    const [currentStep, setCurrentStep] = useState(1)

    const modalShowHandler = () => {
        console.log('modal show triggered')
        setModal(true);
    }

    const modalCloseHandler = () => {
        setModal(false);
    }
    const [artist, setArtist] = useState('')
    // const [albums, setAlbums] = useState([])

    console.log('artist1')
    console.log(artist)

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
        setArtist(artistForm.value)    
    };
    console.log('artist2')
    console.log(artist)
    
    useEffect(() => {
        props.addArtist(artist)
    }, [artist])

    console.log('artist3')
    console.log(artist)

    const getRandomAlbum = (albumArr) => {
        const validAlbum = albumArr.filter(album => album.strReleaseFormat === 'Album')
        const numAblums = validAlbum.length;
        const album = validAlbum[Math.floor(Math.random() * numAblums)]
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
            let ranOption = Math.floor(Math.random()* 4) * multipler + intAns
            if (ranArr.indexOf(ranOption) === -1 && ranOption !== intAns && ranOption >= 1) ranArr.push(ranOption)
        }  
        optionArr.push({'num': 0, 'value': intAns, 'answer': true })
        return optionArr = [...optionArr, ...optionGen(ranArr)]
    }

    const [radio1, setRadio1] = useState('')
    const [radio1Opt, setRadio1Opt] = useState('')

    const [radio2, setRadio2] = useState('')
    const [radio3, setRadio3] = useState('')
    
    const radioHandler1 = event => {
        console.log(event.target.value)
        props.quesClick2(parseInt(event.target.dataset.tag))
        // setRadio1(event.target.value)
        // setRadio1Opt(event.target.dataset.tag)
    }

    const radioHandler2 = event => {
        props.quesClick2(parseInt(event.target.dataset.tag))
    }

    const radioHandler3 = event => {
        props.quesClick3(parseInt(event.target.dataset.tag))
    }
    
    //need to send option num not value
    useEffect(() => {
        props.quesClick1(parseInt(radio1))}
        ,[radio1]
    )


    // const [albumName, setAlbum] = useState('')
    // const [albumYear, setAlbumYear] = useState('')
    // const [triviaArr, setTriviaArr] = useState([])

    
      
  const _next = () => {
    let currStep = currentStep
    currStep = currStep > 2 ? 3: currStep + 1
    setCurrentStep(currStep)
  }
    
  const _prev = () => {
    let currStep = currentStep
    currStep = currStep <= 1? 1: currStep - 1
    setCurrentStep(currStep)
  }

/*
* the functions for our button
*/
// const previousButton = () => {
//   let currentStep = currentStep;
//   if(currentStep !==1){
//       <Button type="button" clicked={_prev}>Previous</Button>
//   }
// }

// const nextButton = () => {
//   let currentStep = currentStep;
//   if(currentStep <2){
//     return (
//       <button 
//         className="btn btn-primary float-right" 
//         type="button" onClick={_next}>
//       Next
//       </button>        
//     )
//   }
//   return null;
// }

    // let scoreSummary = null

    // if (props.ques1 && props.ques2) {
    //     scoreSummary = 
    //     <Score
    //         q1Opt={props.ques1Opt}
    //         q2Opt={props.ques2Opt}
    //     />
    // }

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

    let quesAnsArr = [];
    let trivia = null;


    if (props.artist && props.albums) {
        let album = getRandomAlbum(props.albums)
        // // //sel random Album
        // // //get Album Year
        const albumName = album.strAlbum
        const albumYear = parseInt(album.intYearReleased)
        quesAnsArr = [
            [{'question': 'What year was the band/artist formed?'}, {'answer': props.artist.intFormedYear}], 
            [{'question': `What year was the album ${albumName} released?`}, {'answer':albumYear }],
            [{'question': 'How many members are in the band?'},{'answer': props.artist.intMembers}]
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
            // q1={props.ques1} 
            // q2={props.ques2} 
            // q3={props.ques3}
            // quesClicked1={props.quesClick1} 
            // quesClicked2={props.quesClick2} 
            // q1Opt={props.ques1Opt}
            // q2Opt={props.ques2Opt}
            artist={artist} 
            loading={props.loading}
            error={props.error}
            modalShow={modalShowHandler}
            trivArr = {triviaArr}
            radio1={radio1}
            radioClick1={radioHandler1}
            radioClick2={radioHandler2}
            radioClick3={radioHandler3}
            currStep={currentStep}
            nextBtn = {_next}
            prevBtn = {_prev}
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
                {/* <Modal 
                    modalOpen={modal}
                    modalClose={modalCloseHandler}    
                >
                    {scoreSummary}
                </Modal> */}
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
        // ques1: state.questionReducer.question1,
        // ques2: state.questionReducer.question2,
        // ques3: state.questionReducer.question3,
        // ques1Opt: state.questionReducer.ques1Opt,
        // ques2Opt: state.questionReducer.ques2Opt,
        modal: state.modalReducer.modal
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addArtist: (artist) => dispatch(artistActions.addArtistThunk(artist)),
        scoreAdd:  () => dispatch(scoreActions.addScore()),
        quesClick1: (optNum) => dispatch(questionActions.answerQuestion1(optNum)),
        quesClick2: (optNum) => dispatch(questionActions.answerQuestion2(optNum)),
        quesClick3: (optNum) => dispatch(questionActions.answerQuestion3(optNum)),        
        modalShow: () => dispatch(modalActions.modalShow()),
        modalClose: () => dispatch(modalActions.modalClose())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Game));