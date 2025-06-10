import './css/PokeTemplate.css'

function PokeTemplate({ children }) {
   return (
      <div className="PokeTemplate">
         <div className="app-title">
            <img src="/images/icon_ball_b.png" alt="icon" />
            포켓몬 도감
         </div>
         <div className="content">{children}</div>
      </div>
   )
}

export default PokeTemplate
