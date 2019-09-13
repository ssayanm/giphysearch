import React from 'react';
import Gif from '../components/Gif';

const DisplayGif = (props) => {
	const { gifs } = props;
	return (
	    <div className='tc'>

	    <div className="">
	   		<img src="https://media1.tenor.com/images/0df97f6253419235268ca1a2efdb8e6a/tenor.gif?itemid=5702977" width="250px" />
	    
	    </div>	
	    	{
		    gifs.map((image) => {
			return ( 
				<Gif 
					key={image.id} 
					gif={image} 
				/>
				);
			})
		}
	    </div>
  );
}

export default DisplayGif;
