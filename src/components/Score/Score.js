import React from 'react';

const Score = props => {
    const q1Opt = props.q1Opt;
    const q2Opt = props.q2Opt;

    console.log('score')
    console.log(q1Opt)
    console.log(q2Opt)
    return (
        <div>
            <h1>Score</h1>
            {q1Opt}
        </div>
    )
}

export default Score;