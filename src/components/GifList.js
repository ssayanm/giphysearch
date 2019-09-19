import React from 'react';
import Gif from '../components/Gif';

const GifList = (props) => {
	const { gifs } = props;
	return (
	    <div className='tc'>
	    	{
		    gifs.map((gif) => {
			return ( 
				<Gif 
					key={gif.id} 
					image={gif.images.downsized.url}
					
				/>
				);
			})
		}
	    </div>
  );
}

export default GifList;

