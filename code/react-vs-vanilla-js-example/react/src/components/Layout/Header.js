import {Fragment} from 'react'
import HeaderCartButton from './HeaderCartButton'
import mainImg from './../../assets/re_shop.png'
import style from './Header.module.css'


const Header = props => {
  return <Fragment>
    <header className={style.header}>
      <h1>Re___coffee</h1>
      <HeaderCartButton>Cart</HeaderCartButton>
    </header>
    <div className={style['main-image']}>
      <img src={mainImg} alt="recommend drinks"/>
    </div>
  </Fragment>

}

export default Header;