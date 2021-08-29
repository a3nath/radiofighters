// import React from 'react';
// import { connect } from 'react-redux';

// import * as actionCreators from '../../store/actionCreators/index';

// const artistList = props => {

//     const inputValHandler = event => {

//         //when you click on list item, becomes input value

//         //but input value comes from form and whatever we type in it
//         //how can we select a list item and set input value to it
//         //how can we input.value == li value
//         //how to refer to the input value?
//         //global store value
//         //can we do a conditional
//         //input value is global value when sdme indicator
//         //otherwise its from form
//         //what about when you currently type? does it get overwritten?
//         //so I need another store of value for input 
//         //different from artist name?
//         //coz artist name gets value from whatever you type in box

//         //sets the value of input
//         //turn indicator on
//         props.enterArtist(event.taget.value);
//     }
    
//      const dataArr = []

//      const filterRes = (reg, data) => {
//          const regex = new RegExp(reg, 'ig')
//          return data.filter(artist => artist.match(regex))
//      }

//      const displayMatches = () => {
//          const newArr = filterRes(props.artist, dataArr)
//          const resultArtist = newArr.map(artist => {
//              return `<li onClick={(event) => inputValHandler(event)} name={artists}><span>${artist}</span></li>`
//          })
//          return resultArtist
//     }

//     return (
//         <ul>
//             {/* displays list of artists matches result */}
//             {displayMatches}
//         </ul>
//     )
// }

// //click on a value in list becomes input box value
// //submitting that

// const mapStateToProps = state => {
//     return {
//         //gets artist value from store
//         artist: state.artistReducer.artist
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         enterArtist: artist => dispatch(actionCreators.enterArtist(artist))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(artistList);