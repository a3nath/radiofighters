import React from 'react';
import { connect } from 'react-redux';

const Trivia = props => {

    const TriviaArr = []

    const Q1 = "What year was the band/artist formed"
    const answer1 = props.artist.intFormedYear

    //show picture

    //Q2: When was album realseased
    //filter for album form strReleaseFormat to get albums only

    //give me 3 options within 10 years

    //Q3: Which album features track
    //generate 4 albums

    console.log(props.artist)

    console.log('Trivia')
    return props.artist.intFormedYear
}

// const mapStateToProps = state => {
//     return {
//         year: state.artistReducer.artist[0]
//     };
// }
export default connect(null)(Trivia);