import React from 'react';

const Scroll = (props) => {
	return (
	    <div className='tc' style={{overflowY: 'scroll', border: '1px solid #000', height: '800px'}}>
	    	{props.children}
	    </div>
  );
}

export default Scroll;
