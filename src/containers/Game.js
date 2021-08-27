import React from 'react';
import Button from  '../components/UI/Button/Button';
import Input from '../components/Input/Input';
import ArtistSearch from '../components/ArtistSearch/ArtistSearch';
import ArtistList from '../components/ArtistList/ArtistList';


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
        const tempForm = {...artistForm};
        tempForm.value = event.target.value;
        tempForm.touched = true;
        setArtistForm(tempForm)
        //redux matches artists
    }   

    //list will get value from artist form value

    const artistHandler = (event) => {
        event.preventDefault();
        let artistName = event.target.value;
        const newForm = {...artistForm};
        newForm.value = artistName
        setArtistForm(newForm)
        //async operation
        //redux posts artist
        //get questions
        //runs question
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
                <form onSubmit={artistHandler}>
                    <label for='artist'>Enter artist Name</label>
                    {inputElement}
                    <Button disabled={!formValid} BtnType='Success'>Submit</Button>
                </form>
                {/* artistList gets list of artists from state*/}
                <ArtistList />
            </div>
        </div>
    )
}


export default Game;