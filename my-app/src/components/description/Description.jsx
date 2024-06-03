import React from 'react'
import style from './Description.module.css'

const Description = ({active, setActive, header}) => {
  return (
    <div className={active ? style.description.active : style.description}>
        <div className={style.blur}/>
        <div className={style.description__content}>
            <div className={style.description__header}>{header}</div>
        </div>
    </div>
  )
}

export default Description
