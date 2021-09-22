import {React, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Button from '@mui/material/Button';

import classes from './Home.module.css';



const Home = props => {

    const navigatePlay = () => {
        props.history.replace('/game')
    }

    const navigateTutorial = () => {
        props.history.replace('/tutorial')
    }

    return (
        <>
            <h1>WELCOME to the HOME Page!!!! SUCH #WOW</h1>
            <div className='mainSection'>
            <Button variant='contained' onClick={navigatePlay}>Play</Button>
            </div>
        </>
    )
}

export default connect()(Home);