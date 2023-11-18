import React from 'react'
// import styles
import style from "./card.module.css"
// imgs 
import Image from 'next/image'

import Scooter from "@/assets/img/pngegg (20) 1.png"
import Link from 'next/link'

// import "./index.css"
interface Props{
      key: any
      title: string
      description: string
      id: string
}

const card = ({title,description,id,key}:Props) => {
  return (
    <>
        <div className={style.item}>
              <Image className={style.item_img} src={Scooter} alt=''></Image>
              <h1 className={style.item_title}>{title}</h1>
              <p className={style.item_text}>{description}</p>
              <Link href={`/goods/${title}/${description}?id=${id}`} className={style.item_btn}>Купити</Link>
        </div>
    </>
  )
}

export default card
