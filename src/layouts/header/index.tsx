import React from 'react'
import style from "./header.module.css"


const header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.header__logo}>Logo</h1>
      <img className={style.header__search_img} src="/img/Search.png" alt="" />
      <input className={style.header__search} type="search" />
      <nav className={style.header__nav}>
        <ul className={style.header__nav_list}>
          <li>
            <select className={style.header__nav_list_select} name="" id="">
              <option value="1" selected>Товари</option>
              <option value="2">Test</option>
              <option value="3">Test</option>
            </select>
          </li>
          <li>
            <a className={style.header__nav_list_link} href="">Про нас</a>
          </li>
          <li>
            <a className={style.header__nav_list_link} href="">Контакти</a>
          </li>
          <li>
            <select className={style.header__nav_list_select} name="" id="">
              <option value="1" selected>UA</option>
              <option value="2">Test</option>
              <option value="3">Test</option>
            </select>
          </li>
        </ul>
      </nav>
      <ul className={style.header__imgs}>
        <li>
          <a href=""><img className={style.header__imgs_heart} src="/img/Heart.png" alt="" /></a>
        </li>
        <li>
          <a href=""><img className={style.header__imgs_buy} src="/img/Buy.png" alt="" /></a>
        </li>
      </ul>
      <button className={style.header__btn}>Вхід</button>
    </header>
  )
}

export default header
