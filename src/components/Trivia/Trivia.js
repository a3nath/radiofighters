import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Trivia.module.css'
import Options from '../Options/Options';
import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import {Question1, Question2, Question3} from '../Questions/Question';
import {PrevButton, NextButton} from '../Questions/Buttons/Buttons';

const Trivia = props => {

    // const getRandomAlbum = (albumArr) => {
    //     const numAblums = albumArr.length;
    //     const album = albumArr[Math.floor(Math.random() * numAblums)]
    //     return [album.strAlbum, parseInt(album.intYearReleased)]
    // }

    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array
    // }

    // const optionGen = (ranArr) => {
    //     const wrongOptionArr = ranArr.map((option, index) => {
    //         return {'num': index+1, 'value': option, 'answer': false }
    //     })
    //     return wrongOptionArr
    // }
  
    // const randomGen = (ans) => {
    //     let intAns = parseInt(ans)
    //     let ranArr = [];
    //     let optionArr = [];
    //     while (ranArr.length < 3) {
    //         let multipler = Math.random() < 0.5 ? -1 : 1;
    //         let ranOption = Math.floor(Math.random()* 10) * multipler + intAns
    //         if (ranArr.indexOf(ranOption) === -1 && ranOption !== intAns) ranArr.push(ranOption)
    //     }  
    //     optionArr.push({'num': 0, 'value': intAns, 'answer': true })
    //     return optionArr = [...optionArr, ...optionGen(ranArr)]
    // }

    // // get actual album

    // const albums = props.albums
    // const validAlbum = albums.filter(album => album.strReleaseFormat === 'Album');

    // let [ranAlbumName, ranAlbumRelease] = getRandomAlbum(props.albums)
    
    // const quesAnsArr = [
    //                     [{'question': 'What year was the band/artist formed?'}, {'answer': props.artist.intFormedYear}], 
    //                     [{'question': `What year was the album ${ranAlbumName} released?`}, {'answer':ranAlbumRelease }]
    // ]
   
    // const TriviaArr = quesAnsArr.map((quesAns, index) => {
    //     let [ques, ans] = quesAns
    //     let questionBlockArr = []
    //     return (
    //     [{'num': index + 1,'text': ques.question}, shuffleArray( randomGen(ans.answer))]
    //     )
    // })

    // let mapOptions = props.trivArr.map((quesOpt) => {
    //     let [ques, opt] = quesOpt;
    //     let quesNum = ques.num ;
    //     let quesText = ques.text;
    //     return (
    //         <div className={classes.questionBlock}>
    //              {/* //show picture */}
    //             <div className={classes.question}>
    //                     {quesText}
    //             </div>
    //             <div className={classes.options}>
    //                 <Options 
    //                     step={props.currStep}
    //                     ques={quesNum} 
    //                     options={opt} 
    //                     //scoreClicked={props.scoreAdded} 
    //                     // quesAnsed={quesNum === 1 ? props.ques1 : props.ques2} 
    //                     // quesClicked={quesNum === 1 ? props.quesClicked1 : props.quesClicked2}
    //                     clicked={quesNum === 1 ? props.radioClick1 : props.radioClick2}
    //                 />
    //             </div>
    //         </div>
    //     )
    // })

    // const Ques1 = props => {
    //     console.log('Ques1')
    //     console.log(props.Ques1)
    //     if (props.currStep !== 1) return null
    //     return props.trivArr[0].map((quesOpt) => {
    //         let [ques, opt] = quesOpt;
    //         let quesNum = ques.num;
    //         let quesText = ques.text;
    //         return (
    //             <div className={classes.questionBlock}>
    //              {/* //show picture */}
    //                 <div className={classes.question}>
    //                     {quesText}
    //                 </div>
    //                 <div className={classes.options}>
    //                     <Options 
    //                         ques={quesNum} 
    //                         options={opt} 
    //                         //scoreClicked={props.scoreAdded} 
    //                         // quesAnsed={quesNum === 1 ? props.ques1 : props.ques2} 
    //                         // quesClicked={quesNum === 1 ? props.quesClicked1 : props.quesClicked2}
    //                         clicked={props.radioClick1}
    //                     />
    //                 </div>
    //             </div>
    //         )
    //     })
    // }

    // const Ques2 = props => {
    //     if (props.currStep !== 2) return null
    //     return props.trivArr[1].map((quesOpt) => {
    //         let [ques, opt] = quesOpt;
    //         let quesNum = ques.num;
    //         let quesText = ques.text;
    //         return (
    //             <div className={classes.questionBlock}>
    //              {/* //show picture */}
    //                 <div className={classes.question}>
    //                     {quesText}
    //                 </div>
    //                 <div className={classes.options}>
    //                     <Options 
    //                         ques={quesNum} 
    //                         options={opt} 
    //                         //scoreClicked={props.scoreAdded} 
    //                         // quesAnsed={quesNum === 1 ? props.ques1 : props.ques2} 
    //                         // quesClicked={quesNum === 1 ? props.quesClicked1 : props.quesClicked2}
    //                         clicked={props.radioClick2}
    //                     />
    //                 </div>
    //             </div>
    //         )
    //     })
    // }




    // if (props.loading){
    //     mapOptions = <Spinner/>
    // }

    const triviaHandler = event => {
        event.preventDefault();
        // console.log('props.modalShow')
        // console.log(props.modalShow)
        // props.modalShow()
        
    }
    
    let currentStep = props.currStep;
    let previousButton = null;
    let nextButton = null;
  
    if(currentStep !==1) {
        previousButton =
            <PrevButton 
                className="btn btn-secondary" 
                type="button" clicked={props.prevBtn}>
                Previous 
            </PrevButton>

    }
 
    if(currentStep !==3) {
        nextButton =
            <NextButton 
                className="btn btn-secondary" 
                type="button" clicked={props.nextBtn}>
                Next 
            </NextButton>

    }

    console.log('nextBtn')
    console.log(props.nextBtn)
    return (
        <div className={classes.Trivia}>
            <img src={props.artist.strArtistBanner}/>
            <form onSubmit={triviaHandler}>
                <Question1 quesArr1={[props.trivArr[0]]} step={props.currStep}/>
                <Question2 quesArr2={[props.trivArr[1]]} step={props.currStep}/>
                {/* //number of band memebers */}
                <Question3 quesArr3={[props.trivArr[2]]} step={props.currStep}/>
                {/*<Question4 quesArr4={[props.trivArr[3]]} step={props.currStep}/>
                <Question5 quesArr5={[props.trivArr[4]]} step={props.currStep}/> */}
                {previousButton}
                {nextButton}
                <Link to='/checkout'>
                <Button BtnType='Success'>Submit Answers</Button>
                </Link>
            </form>
           {/* <button diasbled={!(props.ques1 && props.ques2)} onClick={props.modalShow}>Submit Answer</button> */}
        </div>
    )

}

export default connect(null)(Trivia);