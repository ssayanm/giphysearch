import React from 'react';
import Card from '../components/Card';

const CardList = (props) => {
	const { gifs } = props;
	return (
	    <div className='tc'>
	    	{
		    gifs.map((image) => {
			return ( 
				<Card 
					key={image.id} 
					gif={image} 
				/>
				);
			})
		}
	    </div>
  );
}

export default CardList;
