import Button from '@mui/material/Button';

export const PrevButton = props => {
    return <Button variant="contained" clicked={props.clicked}>{props.children}</Button>
}

export const NextButton = props => {
    return <Button variant='contained' clicked={props.clicked}>{props.children}</Button>
}