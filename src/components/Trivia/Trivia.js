import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Trivia.module.css'
import Option from '../Options/Options';

const Trivia = props => {
   

    const TriviaArr = []
    let optionArr = [];
    let ranArr = [];
    const Q1 = "What year was the band/artist formed?"
    const answer1 = props.artist.intFormedYear
    const correctOption = parseInt(answer1)

    optionArr.push({'num': 0, 'value': correctOption, 'answer': true })

    //show picture

    //Q2: When was album realseased
    //filter for album form strReleaseFormat to get albums only

    //give me 3 options within 10 years

    const randomGen = (ans) => {
        while (ranArr.length < 3) {
            let multipler = Math.random() < 0.5 ? -1 : 1;
            let ranOption = Math.floor(Math.random()* 10) * multipler + ans
            if (ranArr.indexOf(ranOption) === -1 && ranOption !== ans) ranArr.push(ranOption)
        }     
    }
    randomGen(parseInt(answer1))

    const optionGen = () => {
        const wrongOptionArr = ranArr.map((option, index) => {
            return {'num': index+1, 'value': option, 'answer': false }
        })
        return wrongOptionArr
    }
    optionArr = [...optionArr, ...optionGen()]


    //randomize options array

    const mapOptions = optionArr.map((option, index) => {
        return <Option value={option.value} data-answer={option.answer} key={index} clicked={props.scoreClick}/>
    })

    console.log('Trivia')
    return (
        <div>
            {Q1}
            <div className=''>
                {mapOptions}
            </div>
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