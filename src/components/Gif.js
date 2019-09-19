import React from 'react';

const Gif = ({ image }) => {
	//const { image } = props;
	return (
	    <div className="bg-light-blue tc dib br1 pa1 ma2 grow bw1 shadow-1">
	    	
	    	 <img alt='gifs' src={image} />
	    	  <div>
        
      </div>
	    </div>
  );
}

export default Gif;


