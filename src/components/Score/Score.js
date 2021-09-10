import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';

const Score = props => {

    const q1Opt = props.q1Opt;
    const q2Opt = props.q2Opt;
    const scoreArr = [props.q1Opt, props.q2Opt]   

    console.log('score')
    console.log(q1Opt)
    console.log(q2Opt)
    console.log(scoreArr)

    // const score = scoreArr.filter(opt => opt===0).length * 10

    return (
        <div>
            <h1>Thank you for Playing!</h1>
            <p>Your Final Score is</p>
            {/* <p>  {score}</p> */} 
            <Button clicked={props.playClick}>Play Again</Button>
            <Link to ={'/home'}>
                <Button clicked={props.homeClick}></Button>
            </Link>
        </div>
    )
}
export default Score;