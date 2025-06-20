import { useState } from 'react'
import './BurgerIcon.css'

const BurgerIcon = ({onClick}) => {

    const [isBurger, setIsBurger] = useState(true)

    const changeBurger = () => {
        setIsBurger(prev => !prev)
    }

    return(
        <div className={`container ${isBurger ? "" : "change"}`} onClick={() => {changeBurger(); onClick()}}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    )
}

export default BurgerIcon;