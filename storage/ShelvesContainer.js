// import React, { Component } from 'react'
// import NavBar from '../components/NavBar'
// import Shelf from '../components/Shelf'
//
//
// class ShelvesContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       shelves: []
//     }
//   }
//
//   componentDidMount() {
//     fetch('/api/v1/shelves')
//     .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         let errorMessage = `${response.status}(${response.statusText})` ,
//         error = new Error(errorMessage);
//         throw(error);
//       }
//     })
//     .then(response => response.json())
//     .then(body => {
//       this.setState({shelves: body})
//     })
//     .catch(error => console.error(`Error in fetch: ${error.message}`));
//   }
//
//   render() {
//     let shelvesList = this.state.shelves.map(shelf => {
//       return (
//         <Shelf
//           key={shelf.id}
//           id={shelf.id}
//           name={shelf.name}
//           description={shelf.description}
//           timestamp={shelf.timestamp}
//         />
//       )
//     })
//
//     return(
//       <div>
//         <h1>These are Your Bookshelves</h1>
//         <div className="shelf-collection">
//         {shelvesList}
//         </div>
//         <div>
//         <NavBar />
//         </div>
//       </div>
//     )
//   }
// }
//
// export default ShelvesContainer
