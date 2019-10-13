import React from 'react'
import { Link } from 'react-router-dom'
import BrandIcon from 'assets/icons/online-game.svg'

const Header = () => (
  <header>
    <nav>
      <div className='nav-brand'>
        <Link to="/">
          <img src={BrandIcon} alt="brand"/>
        </Link>
      </div>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to='/'>browse requests</Link>
        </li>
        <li className='nav-item'>
          <Link to='/add'>add request</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
