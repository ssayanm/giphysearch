import React from 'react';
import Gif from '../components/Gif';

const GifList = (props) => {
	const { gifs } = props;
	return (
	    <div className='tc'>
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

export default GifList;
