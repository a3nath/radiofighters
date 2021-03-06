import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';

import classes from './Footer.module.css'




const Footer = props => {
    return (
        <Box className={classes.Footer}>
            <Toolbar className={classes.ToolbarText}>
                Made with 
                <IconButton>
                    <FontAwesomeIcon icon={faHeart} color='maroon'/>
                </IconButton>
                    by <a href='https://www.amarnath.dev/'> Amar Nath</a>
            </Toolbar>
        </Box>
        )
}

export default Footer;