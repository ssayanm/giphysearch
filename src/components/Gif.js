import React from 'react';

const Gif = (image) => {
	//const { image } = props;
	return (
	    <div className="bg-light-blue tc dib br1 pa1 ma2 grow bw1 shadow-1">
	    	<img src={image.gif.images.downsized.url} alt='robo' width="250px"/>
	    </div>
  );
}

export default Gif;
