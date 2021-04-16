import {React, useState} from 'react';

const Round = ({round, roundMax, handleSettingsClick}) => {
const [hovering, setHovering] = useState(false);
 
return (hovering ? (
      <div 
        className='settings' 
        onClick={() => handleSettingsClick()}
        onMouseLeave={() => setHovering(false)}
      >
        Settings
      </div>
    )
      : <div
          className='round'
          onMouseEnter={() => setHovering(true)}
        >
        Round: {round}/{roundMax}
        </div>
    )
}
export default Round;