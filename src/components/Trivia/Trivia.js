import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Trivia.module.css'
import Options from '../Options/Options';
import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button';

const Trivia = props => {
 
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

    // get actual album

    const albums = props.albums
    const validAlbum = albums.filter(album => album.strReleaseFormat === 'Album');
    
    const getRandomAlbum = (albumArr) => {
        const numAblums = albumArr.length;
        const album = albumArr[Math.floor(Math.random() * numAblums)]
        return [album.strAlbum, parseInt(album.intYearReleased)]
    }

    let [ranAlbumName, ranAlbumRelease] = getRandomAlbum(props.albums)
    
    const randomAlbumYear = 2000

    const quesAnsArr = [
                        [{'question': 'What year was the band/artist formed?'}, {'answer': props.artist.intFormedYear}], 
                        [{'question': `What year was the album ${ranAlbumName} released?`}, {'answer':ranAlbumRelease }]
    ]
   
    const TriviaArr = quesAnsArr.map((quesAns, index) => {
        let [ques, ans] = quesAns
        let questionBlockArr = []
        return (
        [{'num': index + 1,'text': ques.question}, randomGen(ans.answer)]
        )
    })

    let mapOptions = TriviaArr.map((quesOpt) => {
        let [ques, opt] = quesOpt;
        let quesNum = ques.num ;
        let quesText = ques.text;
        return (
            <div className={classes.questionBlock}>
                 {/* //show picture */}
                <div className={classes.question}>
                        {quesText}
                </div>
                <div className={classes.options}>
                    <Options 
                        ques={quesNum} 
                        options={opt} 
                        scoreClicked={props.scoreAdded} 
                        quesAnsed={quesNum === 1 ? props.ques1 : props.ques2} 
                        quesClicked={quesNum === 1 ? props.quesClicked1 : props.quesClicked2}
                    />
                </div>
            </div>
        )
    })

    if (props.loading){
        mapOptions = <Spinner/>
    }

    return (
        <div className={classes.Trivia}>
            <img src={props.artist.strArtistBanner}/>
           {mapOptions}
           <button diasbled={!(props.ques1 && props.ques2)} onClick={props.modalShow}>Submit Answer</button>
        </div>
    )

}

export default connect(null)(Trivia);