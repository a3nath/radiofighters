import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Trivia.module.css'
import Options from '../Options/Options';

const Trivia = props => {
   
    //pass question answered as global state to option
    //that would disable an option if question anmswered
    //and will bring out new question
    //but how to separte logic for q1 and q2 and make it more genetrkic so we can reuse optionHandler
    
    // try
    const randomAlbumYear = 2000
    const quesAnsArr = [[{'question': 'What year was the band/artist formed?'}, {'answer': props.artist.intFormedYear}], [{'question': 'What year was the album released?'}, {'answer': randomAlbumYear}]]
   

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

    const TriviaArr = quesAnsArr.map((quesAns, index) => {
        let [ques, ans] = quesAns
        console.log('ans')
        let questionBlockArr = []
        console.log(questionBlockArr)
        return (
        [{'num': index,'text': ques.question}, randomGen(ans.answer)]
        )
    })

    // const Q2 = "What year was the album released"
    // const correctOption = parseInt(answer1)
    //show picture

    //Q2: When was album realseased
    //filter for album form strReleaseFormat to get albums only

    //give me 3 options within 10 years

    // const getQuesAnsArr = (q, ans) => {
    //     const Q1 = "What year was the band/artist formed?"
    //     const questionBlockArr1 = []
    //     questionBlockArr1.push({'num': ,'text': q}, randomGen(parseInt(ans1)))
    // }
    

    // const getAnswerOptions = (ans1, ans2) => {

    // questionBlockArr1.push(optionArr)


    const mapOptions = TriviaArr.map((quesOpt, index) => {
        let [ques, opt] = quesOpt;
        let quesNum = ques.num;
        let quesText = ques.text;
        return (
            <div className={classes.questionBlock}>
                <div className={classes.question}>
                        {quesText}
                </div>
                <div className={classes.options}>
                        <Options ques={quesNum} options={opt} scoreClicked={props.scoreAdded}/>
                </div>
            </div>
        )
    })

    console.log('Trivia')
    console.log(TriviaArr)


    return (
        <div className={classes.Trivia}>
           {mapOptions}
        </div>
    )

    //generate both questions
   
   
    //Q3: Which album features track
    //generate 4 albums
}

// const mapStateToProps = state => {
//     return {
//         year: state.artistReducer.artist[0]
//     };
// }
export default connect(null)(Trivia);