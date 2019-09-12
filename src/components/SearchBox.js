import React from 'react';

// const onInputChange = (event) => {
//         this.setState({event});
//         this.props.searchChange(event);
//     }

const SearchBox = ({ searchfield, searchChange }) => {
    
	return (
	    <div className='pa2'>
	    	<input 
	    		className='pa3 ba b--green bg-lightest-blue'
	    		type="search" 
	    		placeholder="Search Gifs" 
	    		onChange={searchChange} 
                //onChange={event => this.onInputChange(event.target.value)} 
	    	/>
	    </div>
  );
}

// class SearchBox extends React.Component {
//     constructor() {
//         super();
//         this.state = { event: '' }
//     }

//     onInputChange(event) {
//         this.setState({event});
//         this.props.searchChange(event);
//     }

//     render() {
//         return (
//         	<div className='pa2'>
// 		    	<input 
// 		    		className='pa3 ba b--green bg-lightest-blue'
// 	    			type="search" 
// 	    			placeholder="Search Gifs" 
// 		    		onChange={event => this.onInputChange(event.target.value)} 
// 		    	/>
// 	    	</div>
//         );
//     }
// }

export default SearchBox;
