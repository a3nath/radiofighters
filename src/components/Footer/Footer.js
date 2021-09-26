import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';




const Footer = props => {
    return (
        <Box>
            <Toolbar>
                Made with 
                <IconButton>
                    <FontAwesomeIcon icon={faHeart} />
                </IconButton>
                    by <a href='https://github.com/a3nath'>Amar Nath</a>
            </Toolbar>
        </Box>
        )
}

export default Footer;