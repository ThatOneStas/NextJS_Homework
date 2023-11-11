import React from 'react'
import style from "@/pages/about/about.module.css"
// link
import Link from 'next/link'
// imgs
import Image from 'next/image'

import Vector from "@/assets/img/Vector about.png"

const index = () => {
  return <div>
      <section className={style.story}>
        <h1 className={style.story__title}>Наша історія</h1>
        <p className={style.story__text_1}>
          Lorem ipsum dolor sit amet consectetur. Sit massa proin pulvinar gravida odio faucibus feugiat elementum. 
          Nullam nunc blandit purus leo nulla commodo malesuada odio. Sem aliquam morbi sapien dolor at. Risus fermentum 
          bibendum convallis nec. Nec fermentum faucibus risus diam nisi at lacus vitae ultricies. Sodales phasellus 
          blandit posuere senectus interdum. Massa nunc tellus cras egestas sem risus. Ut semper at nunc egestas.
        </p>
        <p className={style.story__text_2}>
          Lorem ipsum dolor sit amet consectetur. Nam commodo etiam lectus amet proin enim porttitor arcu laoreet. 
          Volutpat posuere eu blandit egestas faucibus. Sit lacinia feugiat maecenas tincidunt aliquet. Sodales suscipit 
          ac sollicitudin fermentum. Egestas quis sagittis augue egestas sit volutpat at diam. 
        </p>
      </section>
      <section className={style.why_we}>
        <h1 className={style.why_we__title}>Чому вартує обрати нас?</h1>
        <div className={style.why_we__line}></div>
      </section>
      <section className={style.boxes}>
        <div className={style.boxes__item}>
          <Image className={style.boxes__item_img} src={Vector} alt=''></Image>
          <h1 className={style.boxes__item_title}>Сертифікована продукція</h1>
          <p className={style.boxes__item_text}>
            Lorem ipsum dolor sit amet consectetur. Ac faucibus mauris tincidunt donec amet amet elit.
          </p>
        </div>
        <div className={style.boxes__item}>
          <Image className={style.boxes__item_img} src={Vector} alt=''></Image>
          <h1 className={style.boxes__item_title}>Сертифікована продукція</h1>
          <p className={style.boxes__item_text}>
            Lorem ipsum dolor sit amet consectetur. Ac faucibus mauris tincidunt donec amet amet elit.
          </p>
        </div>
        <div className={style.boxes__item}>
          <Image className={style.boxes__item_img} src={Vector} alt=''></Image>
          <h1 className={style.boxes__item_title}>Сертифікована продукція</h1>
          <p className={style.boxes__item_text}>
            Lorem ipsum dolor sit amet consectetur. Ac faucibus mauris tincidunt donec amet amet elit.
          </p>
        </div>
      </section>
      <form className={style.form}>
        <h1 className={style.form__title}>Виникли запитання?</h1>
        <input className={style.form__name} type="text" placeholder='Ваше ім’я'/>
        <input className={style.form__phone} type="text" placeholder='Номер телефону'/>
        <label className={style.form__label} htmlFor="submit">Залиште заявку і ми Вам передзвонимо</label>
        <button className={style.form__submit} type="submit" name='submit'>Надіслати</button>
      </form>
    </div>
  
}

export default index
