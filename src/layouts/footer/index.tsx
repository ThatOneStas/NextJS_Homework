import React from 'react'
import style from "./footer.module.css"
// link
import Link from 'next/link'
// imgs
import Image from 'next/image'

import Vector from "@/assets/img/Vector.png"
import Subtract from "@/assets/img/Subtract.png"
import Group_3 from "@/assets/img/Group 3.png"
import Call from "@/assets/img/Call.png"
import Message from "@/assets/img/Message.png"
import Time_Circle from "@/assets/img/Time Circle.png"

const footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.footer__imgs}>
        <li><Link href="/"><Image className={style.footer__imgs_item} src={Vector} alt=""></Image></Link></li>
        <li><Link href="/"><Image className={style.footer__imgs_item} src={Subtract} alt=""></Image></Link></li>
        <li><Link href="/"><Image className={style.footer__imgs_item} src={Group_3} alt=""></Image></Link></li>
      </ul>
      <Link href={"/"} className={style.footer__logo}>Logo</Link>
      <ul className={style.footer__links_1}>
        <li><Link href="">Товари</Link></li>
        <li><Link href="/about">Про нас</Link></li>
        <li><Link href="/contacts">Контакти</Link></li>
        <li><Link href="">Торгові марки</Link></li>
      </ul>
      <ul className={style.footer__links_2}>
        <li><a href="">Зброя</a></li>
        <li><a href="">Техніка</a></li>
        <li><a href="">Електросамокати</a></li>
        <li><a href="">Популярне</a></li>
        <li><a href="">Акції</a></li>
      </ul>
      <ul className={style.footer__cotacts}>
        <li className={style.footer__cotacts_item}><Image className={style.footer__cotacts_item_img} src={Call} alt=""></Image>
        <h1 className={style.footer__cotacts_item_text}>+380 93 005 27 84</h1></li>
        <li className={style.footer__cotacts_item}><Image className={style.footer__cotacts_item_img} src={Message} alt=""></Image>
        <h1 className={style.footer__cotacts_item_text}>militarystore@gmail.com</h1></li>
        <li className={style.footer__cotacts_item}><Image className={style.footer__cotacts_item_img} src={Time_Circle} alt=""></Image>
        <h1 className={style.footer__cotacts_item_text}>10:00 - 22:00</h1></li>
      </ul>
    </footer>
  )
}

export default footer
