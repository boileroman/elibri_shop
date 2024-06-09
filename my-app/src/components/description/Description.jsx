import React from 'react'
import style from './Description.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setIsDescriptionActive } from '../../redux/descriptionSlice'
import close from '../assets/close.svg'

const Description = ({header, description}) => {
  const {isDescriptionActive} = useSelector((state)=>state.description)
  const dispatch = useDispatch()
  return (
    <div className={style.description}>
        <div className={isDescriptionActive ? style.blur : style.no_blur}/>
        <div className={isDescriptionActive ? `${style.description__content} ${style.active}` : style.description__content}>
            <div className={style.description__header}>{header}
              <button className={style.close_button} onClick={()=>{dispatch(setIsDescriptionActive(!isDescriptionActive))}}><img src={close} alt=''/></button>
            </div>
            <p className={style.description_product}>
              {description}
            </p>
        </div>
    </div>
  )
}

export default Description
