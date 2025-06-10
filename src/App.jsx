import { useCallback, useState, useRef } from 'react'
import PokeTemplate from './component/PokeTemplate'
import PokeInsert from './component/Pokeinsert'
import PokeList from './component/PokeList'

function App() {
   const [pokes, setPokes] = useState([
      {
         id: 1,
         name: '이상해씨',
         img: '/images/이상해씨.png',
         onoff: true,
      },
      {
         id: 2,
         name: '파이리',
         img: '/images/파이리.png',
         onoff: true,
      },
      {
         id: 3,
         name: '꼬부기',
         img: '/images/꼬부기.png',
         onoff: true,
      },
      {
         id: 4,
         name: '고라파덕',
         img: '/images/고라파덕.png',
         onoff: true,
      },
      {
         id: 5,
         name: '이브이',
         img: '/images/이브이.png',
         onoff: true,
      },
      {
         id: 6,
         name: '피카츄',
         img: '/images/피카츄.png',
         onoff: true,
      },
      {
         id: 7,
         name: '디그다',
         img: '/images/디그다.png',
         onoff: true,
      },
      {
         id: 8,
         name: '삐삐',
         img: '/images/삐삐.png',
         onoff: true,
      },
      {
         id: 9,
         name: '야돈',
         img: '/images/야돈.png',
         onoff: true,
      },
      {
         id: 10,
         name: '야옹',
         img: '/images/야옹.png',
         onoff: true,
      },
      {
         id: 11,
         name: '푸린',
         img: '/images/푸린.png',
         onoff: true,
      },
      {
         id: 12,
         name: '식스테일',
         img: '/images/식스테일.png',
         onoff: true,
      },
   ])

   const pokes2 = [
      {
         id: 1,
         name: '이상해풀',
         img: '/images/이상해풀.png',
         onoff: true,
      },
      {
         id: 2,
         name: '리자드',
         img: '/images/리자드.png',
         onoff: true,
      },
      {
         id: 3,
         name: '어니부기',
         img: '/images/어니부기.png',
         onoff: true,
      },
      {
         id: 4,
         name: '골덕',
         img: '/images/골덕.png',
         onoff: true,
      },
      {
         id: 5,
         name: '쥬피썬더',
         img: '/images/쥬피썬더.png',
         onoff: true,
      },
      {
         id: 6,
         name: '라이츄',
         img: '/images/라이츄.png',
         onoff: true,
      },
      {
         id: 7,
         name: '닥트리오',
         img: '/images/닥트리오.png',
         onoff: true,
      },
      {
         id: 8,
         name: '픽시',
         img: '/images/픽시.png',
         onoff: true,
      },
      {
         id: 9,
         name: '야도란',
         img: '/images/야도란.png',
         onoff: true,
      },
      {
         id: 10,
         name: '페르시온',
         img: '/images/페르시온.png',
         onoff: true,
      },
      {
         id: 11,
         name: '푸크린',
         img: '/images/푸크린.png',
         onoff: true,
      },
      {
         id: 12,
         name: '나인테일',
         img: '/images/나인테일.png',
         onoff: true,
      },
   ]

   const nextId = useRef(13)

   // 카드진화
   const replacePokesOne = (id) => {
      const sourcePokes = pokes2.find((s) => s.id === id)
      if (!sourcePokes) return
      setPokes((prev) => prev.map((poke) => (poke.id === id ? { ...poke, name: sourcePokes.name, img: sourcePokes.img } : poke)))
   }

   // 카드 등록
   const onInsert = useCallback(
      (name) => {
         const poke = {
            id: nextId.current,
            name,
            img: '/images/' + name + '.png',
            onoff: true,
         }
         setPokes(pokes.concat(poke))
         nextId.current += 1
      },
      [pokes]
   )

   // 카드 삭제
   const onRemove = (id) => {
      const removedPokes = pokes.filter((poke) => poke.id != id)
      setPokes(removedPokes)
   }

   // 카드 활성화, 비활성화
   const onDoubleClick = useCallback(
      (id) => {
         const doubleClickPokes = pokes.map((poke) =>
            poke.id === id
               ? {
                    ...poke,
                    onoff: !poke.onoff,
                 }
               : poke
         )
         setPokes(doubleClickPokes)
      },
      [pokes]
   )

   return (
      <PokeTemplate>
         <PokeInsert onInsert={onInsert} />
         <PokeList pokes={pokes} onRemove={onRemove} onDoubleClick={onDoubleClick} onReplaceOne={replacePokesOne} />
      </PokeTemplate>
   )
}

export default App
