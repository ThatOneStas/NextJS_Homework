import React from 'react'
import style from "./header.module.css"
// link
import Link from 'next/link'
// imgs
import Image from 'next/image'

import Search from "@/assets/img/Search.png"
import Heart from "@/assets/img/Heart.png"
import Buy from "@/assets/img/Buy.png"


const header = () => {
  return (
    <header className={style.header}>
      <Link href={"/"} className={style.header__logo}>Logo</Link>
      <Image className={style.header__search_img} src={Search} alt=""></Image>
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
          <Link href={"/about"} className={style.header__nav_list_link}>Про нас</Link>
          </li>
          <li>
          <Link href="" className={style.header__nav_list_link}>Контакти</Link>
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
          <Link href=""><Image className={style.header__imgs_buy} src={Heart} alt=""></Image></Link>
        </li>
        <li>
        <Link href=""><Image className={style.header__imgs_buy} src={Buy} alt=""></Image></Link>
        </li>
      </ul>
      <button className={style.header__btn}>Вхід</button>
    </header>
  )
}

export default header
