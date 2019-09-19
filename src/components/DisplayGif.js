import React from 'react';
import Gif from '../components/Gif';


const DisplayGif = (props) => {
	const { fgifs } = props;
	 return (
		    <div className='tc'>
		    	{
			    fgifs.map((gif) => {
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

export default DisplayGif;
