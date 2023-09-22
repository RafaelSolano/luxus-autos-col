import React from 'react'
import  './styles.css'
export const CardProduct = () => {
  return (
    <div className='cardCars'>
        <figure>
            <img className='card__img' src="https://www.madebydesignesia.com/themes/rentaly/images/cars/vw-polo.jpg" alt="" />
        </figure>

        <div className='card__info'>
            <div className='info__header'>
                <h4 className='card__title'>VW Polo</h4>
            </div>
            <div className='info__items'>
                <span>Gasolina</span>
                <span>1.8T</span>
                <span>Gasolina</span>
                <span>Gasolina</span>
            </div>
            <div className='card__footer'>
                <h4 className='card__price'> $ 32.000.000</h4>
                <p className='card__km_year'><span>32.000Km</span> - <span>2020</span></p>
                
            </div>
            


        </div>
    </div>
  )
}
