import { useCallback, useState } from 'react'
import './css/PokeInsert.css'
import { IoMdAddCircleOutline } from 'react-icons/io'

function PokeInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = (e) => setValue(e.target.value)

   const onSubmit = useCallback(
      (e) => {
         e.preventDefault()
         onInsert(value)
         setValue('')
      },
      [value, onInsert]
   )

   return (
      <form className="PokeInsert" onSubmit={onSubmit}>
         <input placeholder="포켓몬이름을 입력하세요" value={value} onChange={onChange} />
         <button type="submit">
            <IoMdAddCircleOutline />
         </button>
      </form>
   )
}

export default PokeInsert
