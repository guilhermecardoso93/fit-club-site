import { Header } from '../Header'
import './style.css'

export function Hero() {
  return (
    <div className='hero'>
      <div className='left-hero'>
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>the best fitness in the town</span>
        </div>
      </div>
      <div className='right-hero'>
        
      </div>

    </div>
  )
}