import React from 'react';

const NextBtn = ({handleNext}) => {
  return ( 
    <button className='next-btn' onClick={() => handleNext()}>Next</button>
   );
}
 
export default NextBtn;