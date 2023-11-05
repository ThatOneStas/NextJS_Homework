import React from 'react'
import style from "./footer.module.css"

const footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.footer__imgs}>
        <li><img className={style.footer__imgs_item} src="/img/" alt="" /></li>
        <li><img className={style.footer__imgs_item} src="/img/" alt="" /></li>
        <li><img className={style.footer__imgs_item} src="/img/" alt="" /></li>
      </ul>
      <h1 className={style.footer__logo}>Logo</h1>
      <ul className={style.footer__links_1}>
        <li><a href="">Товари</a></li>
        <li><a href="">Про нас</a></li>
        <li><a href="">Контакти</a></li>
        <li><a href="">Торгові марки</a></li>
      </ul>
      <ul className={style.footer__links_2}>
        <li><a href="">Зброя</a></li>
        <li><a href="">Техніка</a></li>
        <li><a href="">Електросамокати</a></li>
        <li><a href="">Популярне</a></li>
        <li><a href="">Акції</a></li>
      </ul>
      <ul className={style.footer__cotacts}>
        <li className={style.footer__cotacts_item}><img className={style.footer__cotacts_item_img} src="" alt="" />
        <h1 className={style.footer__cotacts_item_text}>+380 93 005 27 84</h1></li>
        <li className={style.footer__cotacts_item}><img className={style.footer__cotacts_item_img} src="" alt="" />
        <h1 className={style.footer__cotacts_item_text}>militarystore@gmail.com</h1></li>
        <li className={style.footer__cotacts_item}><img className={style.footer__cotacts_item_img} src="" alt="" />
        <h1 className={style.footer__cotacts_item_text}>10:00 - 22:00</h1></li>
      </ul>
    </footer>
  )
}

export default footer
