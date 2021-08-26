import {React, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Button from '../components/UI/Button/Button';



const Home = props => {

    const navigatePlay = () => {
        props.history.replace('/play')
    }

    const navigateTutorial = () => {
        props.history.replace('/tutorial')
    }

    const main = props => {
        <React.Fragment>
            <Button clicked={navigatePlay}>Play</Button>
            <Button clicked={navigateTutorial}>Tutorial</Button>
        </React.Fragment>
    }

    const team = props => {
        <React.Fragment>
            {/* team members */}
        </React.Fragment>
    }   


    return (
        <React.Fragment>
            <div className='mainSection'>{main}</div>
            <div className='team'>{team}</div>
        </React.Fragment>
    )
}

export default Home;