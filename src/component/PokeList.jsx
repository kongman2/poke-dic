import './css/PokeList.css'
import PokeListItem from './PokeListItem'

function PokeList({ pokes, onRemove, onDoubleClick, onReplaceOne }) {
   return (
      <div className="PokeList">
         {pokes.map((poke) => (
            <PokeListItem poke={poke} key={poke.id} onRemove={onRemove} onDoubleClick={onDoubleClick} onReplaceOne={onReplaceOne} />
         ))}
      </div>
   )
}

export default PokeList
