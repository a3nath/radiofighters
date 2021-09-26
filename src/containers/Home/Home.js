import {React, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Button from '@mui/material/Button';

import classes from './Home.module.css';
import '../../App.css'

const Home = props => {

    const navigatePlay = () => {
        props.history.replace('/game')
    }


    return (
        <div className={`${classes.Home} body`}>
            <h1>Welcome to RadioFighters!</h1>
            <div className='mainSection'>
                <Button variant='contained' onClick={navigatePlay}>Play</Button>
            </div>
        </div>
    )
}

export default connect()(Home);