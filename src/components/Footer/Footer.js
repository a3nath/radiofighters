import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';




const Footer = props => {
    return (
        <Box>
            <Toolbar>
                Made with 
                <IconButton>
                    <FontAwesomeIcon icon={faEllipsisV} />
                </IconButton>
                    by <a href='/https://github.com/a3nath'>Amar Nath</a>
            </Toolbar>
        </Box>
        )
}

export default Footer;