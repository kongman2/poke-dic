import './css/PokeListItem.css'
import { IoMdRemoveCircleOutline } from 'react-icons/io'

import classnames from 'classnames'

function PokeListItem({ poke, onRemove, onDoubleClick, onReplaceOne }) {
   const { id, name, img, onoff } = poke
   return (
      <div className="PokeListItem">
         <div
            className={classnames('onoffcheck', { onoff })}
            onDoubleClick={() => {
               onDoubleClick(id)
            }}
         >
            {' '}
            <div
               className="remove"
               onClick={() => {
                  onRemove(id)
               }}
            >
               <IoMdRemoveCircleOutline />
            </div>
            <img src={img} alt={name} />
            <button onClick={() => onReplaceOne(poke.id)}>진화!</button>
            {name}
         </div>
      </div>
   )
}

export default PokeListItem
