import { useState } from "react"
import { useSelector } from "react-redux"
import {CSSTransition} from 'react-transition-group'
import { routeMain } from "./routes"

import BasketList from "components/BasketList"
import TitlePage from "components/TitlePage"
import FullPrice from "components/FullPrice"
import Modal from "components/Modal"

const BasketPage = () => {
    const basket = useSelector(state => state.basket.basket)
    const [show, setShow] = useState(false)

   
    const handleClick = () => setShow(true)
    const handleClose = () => setShow(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleClose()
        alert('Заявка была отправлена')
    }

    return (
        <section className="basket">
            <div className="container">
                <TitlePage
                    title='Корзина'
                />
                <div className="basket__content">
                    <div className="basket__left-side">
                        <BasketList className='basket__list' list={basket}/>
                    </div>
                    <div className="basket__right-side">
                        <FullPrice
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
            
            <CSSTransition in={show} classNames='show' timeout={300} unmountOnExit>
                <Modal
                    handleSubmit={(e) => handleSubmit(e)}
                    onClose={handleClose}
                />
            </CSSTransition>
        </section>
    )
}

export {routeMain}

export default BasketPage