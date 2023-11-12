import React from 'react'
// import styles
import style from "./card.module.css"
// imgs 
import Image from 'next/image'

import Scooter from "@/assets/img/pngegg (20) 1.png"

// import "./index.css"
interface Props{

}

const card = () => {
  return (
    <>
        <div className={style.item}>
              <Image className={style.item_img} src={Scooter} alt=''></Image>
              <h1 className={style.item_title}>Xiaomi Mi Electric Scooter Essential Black</h1>
              <p className={style.item_text}>19 000 ₴</p>
              <button className={style.item_btn}>Купити</button>
        </div>
    </>
  )
}

export default card
