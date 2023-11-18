import React from 'react'
import style from "@/pages/contacts/contacts.module.css"
// link
import Link from 'next/link'
// imgs
import Image from 'next/image'

import Call from "@/assets/img/Call contacts.png"
import Mail from "@/assets/img/Message contacts.png"
import Time from "@/assets/img/Time Circle contacts.png"

import FB from "@/assets/img/Vector contacts.png"
import TG from "@/assets/img/Subtract contacts.png"
import INST from "@/assets/img/Group 3 contacts.png"

const index = () => {
  return (
    <div>
        <section className={style.hero}>
            <div className={style.hero__contacts}>
                <h1 className={style.hero__contacts_title}>Контакти</h1>
                <h2 className={style.hero__contacts_text}>Lorem ipsum dolor sit amet consectetur. Venenatis est lobortis commodo amet 
                a ultrices. Aliquet dictum nisl natoque viverra platea blandit ac.</h2>
                <div className={style.hero__contacts_box}>
                    <Image className={style.hero__contacts_box_img} src={Call} alt=''></Image>
                    <h2 className={style.hero__contacts_box_text}>+380 93 005 27 84</h2>
                </div>
                <div className={style.hero__contacts_box}>
                    <Image className={style.hero__contacts_box_img} src={Mail} alt=''></Image>
                    <h2 className={style.hero__contacts_box_text}>militarystore@gmail.com</h2>
                </div>
                <div className={style.hero__contacts_box}>
                    <Image className={style.hero__contacts_box_img} src={Time} alt=''></Image>
                    <h2 className={style.hero__contacts_box_text}>10:00 - 22:00</h2>
                </div>
                <ul className={style.hero__contacts_list}>
                    <li><Link href="/"><Image className={style.hero__contacts_list_item} src={FB} alt=""></Image></Link></li>
                    <li><Link href="/"><Image className={style.hero__contacts_list_item} src={TG} alt=""></Image></Link></li>
                    <li><Link href="/"><Image className={style.hero__contacts_list_item} src={INST} alt=""></Image></Link></li>
                </ul>
            </div>
            <form className={style.hero__comunicate}>
                <h1 className={style.hero__comunicate_title}>Зв’яжіться з нами</h1>
                <input className={style.hero__comunicate_input} type="text" placeholder='Ваше ім’я'/>
                <input className={style.hero__comunicate_input} type="text" placeholder='E-mail'/>
                <input className={style.hero__comunicate_input} type="text" placeholder='Номер телефону'/>
                <textarea className={style.hero__comunicate_textarea} name="" id="" placeholder='Повідомлення'></textarea>
                <input className={style.hero__comunicate_submit} type="submit" value="Надіслати" />
            </form>
        </section>
    </div>
  )
}

export default index