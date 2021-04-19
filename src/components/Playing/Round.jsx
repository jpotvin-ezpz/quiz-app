import {React} from 'react';

const Round = ({round, roundMax, handleSettingsClick}) => {
// const [hovering, setHovering] = useState(false);
 
// TODO Settings show on hover
// Todo waiting for settings feature to be added
// return (hovering ? (
//       <div 
//         className='settings' 
//         onClick={() => handleSettingsClick()}
//         onMouseLeave={() => setHovering(false)}
//       >
//         Settings
//       </div>
//     )
//       : <div
//           className='round'
//           onMouseEnter={() => setHovering(true)}
//         >
//         Round: {round}/{roundMax}
//         </div>
//     )
// }

  return (
    <div
      className='round'
    >
    Round: {round}/{roundMax}
    </div>
  )
}

export default Round;