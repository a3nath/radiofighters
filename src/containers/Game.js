import React from 'react';
import Button from  '../components/UI/Button/Button';
import Input from '../components/Input/Input';

const Game = props => {

    const [artistForm, setArtistForm] = useState({
            value:'',
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Artist name'
            },
            validation:{
                required:true
            },
            valid:false,
            touched:false
    })

    //checks if form valid
    const [formValid, setFormValid] = useState(false);

    const validHandler = artist => {
        //if artist exists
        //api call
    }

    //form input handler, triggers when submit form
    const inputHandler = event => {
        event.preventDefault;
        const newForm = {...artistForm};
        newForm.value = event.target.value;
        newForm.touched = true;
        //check if artist exists
        // newForm.valid = validHandler()
        setArtistForm(newForm)
        //check form valid
        // setFormValid(newForm.valid)
    }
    
    const inputElement = () => {
        <input 
            inputType={artistForm.elementConfig.type}
            placeholder={artistForm.elementConfig.placeholder}
            name='artist'
            id='artist'
            changed={(event) => inputHandler(event)}
            value={artistForm.value}
            valid={artistForm.valid}
            touched={artistForm.touched}
        />
    }

    //form valid
    //create dummy form
    //value gets updated once ajax call
    //then form is valid => button

    
    return (
        <div>
            Hello, thsis is Game Page
            <div>
                <form onSubmit={inputHandler}>
                    <label for='artist'>Enter artist Name</label>
                    {inputElement}
                    <Button disabled={!formValid} BtnType='Success'>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Game;