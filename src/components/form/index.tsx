import React from 'react'
import style from "../form/form.module.css"

const form = () => {
  return (
    <div>
        <form className={style.form}>
          <h1 className={style.form__title}>Виникли запитання?</h1>
          <input className={style.form__name} type="text" placeholder='Ваше ім’я'/>
          <input className={style.form__phone} type="text" placeholder='Номер телефону'/>
          <label className={style.form__label} htmlFor="submit">Залиште заявку і ми Вам передзвонимо</label>
          <button className={style.form__submit} type="submit" name='submit'>Надіслати</button>
        </form>
    </div>
  )
}

export default form