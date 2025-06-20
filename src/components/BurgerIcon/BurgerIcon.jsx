import { useState } from 'react'
import './BurgerIcon.css'

const BurgerIcon = ({onClick}) => {

    const [isBurger, setIsBurger] = useState(true)

    const changeBurger = () => {
        setIsBurger(prev => !prev)
    }

    return(
        <div className={`container ${isBurger ? "" : "change"}`} onClick={() => {changeBurger(); onClick()}}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default BurgerIcon;