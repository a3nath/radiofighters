import {React, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Button from '../../components/UI/Button/Button'
import classes from './Home.module.css';



const Home = props => {

    const navigatePlay = () => {
        props.history.replace('/game')
    }

    const navigateTutorial = () => {
        props.history.replace('/tutorial')
    }

    const main = props => {
        <>
            <Button clicked={navigatePlay}>Play</Button>
            <Button clicked={navigateTutorial}>Tutorial</Button>
        </>
    }

    const team = props => {
        <>
            {/* team members */}
        </>
    }   


    return (
        <>
            <h1>WELCOME to the HOME Page!!!! SUCH #WOW</h1>
            <div className='mainSection'>
                <Button clicked={navigatePlay}>Play</Button>
                <Button clicked={navigateTutorial}>Tutorial</Button>
            </div>
            <div className='team'>{team}</div>
        </>
    )
}

export default connect()(Home);