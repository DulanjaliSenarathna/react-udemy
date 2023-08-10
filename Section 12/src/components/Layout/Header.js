import React, { Fragment } from 'react'
import mealsImg from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>MyFoods</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt='a table full of foods'/>
        </div>
    </Fragment>
  )
}

export default Header