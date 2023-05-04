import Logo from "components/Logo"
import { GrLanguage } from 'react-icons/gr' 
import { SlSocialVkontakte } from 'react-icons/sl'
import { FaTelegram } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

import { Link, NavLink } from "react-router-dom"
import { routeMain as routeBasketPage } from "pages/BasketPage"
import { routeMain as routeNotFound } from "pages/NotFoundPage"

import Button from "components/Button"

const Footer = () => {

  

    const handleClick = (e) => {
        const target = e.target
        const button = document.querySelectorAll('.language__item')
        if (button) {
            button.forEach(btn => {
                if(target === btn)
                btn.classList.toggle('active')
            })
        }
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <Logo
                        logo='QPICK'
                    />
                    <ul className="footer__items">
                        <NavLink className="footer__item item__link" to={routeNotFound()}>
                            Избранное
                        </NavLink>
                        <NavLink className="footer__item item__link" to={routeBasketPage()}>
                            Корзина
                        </NavLink>
                        <NavLink className="footer__item item__link" to={routeNotFound()}>
                            Контакты
                        </NavLink>
                    </ul>
                    <div className="footer__rules">
                        <Link className="footer__link-rules">Условия сервиса</Link>
                        <div className="rules__language">
                            <span className="language__icon"><GrLanguage/></span>
                            <div className="language__choose">
                                <Button
                                    className='language__rus language__item'
                                    text='РУС'
                                    onClick = {(e) => handleClick(e)}
                                />
                                <Button
                                    className='language__eng language__item'
                                    text='ENG'
                                    onClick = {(e) => handleClick(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footer__social">
                        <Link 
                            to='https://vk.com/widbiw' 
                            target="_blank" 
                            className="footer__link social__vk">
                                <SlSocialVkontakte/>
                        </Link>
                        <Link 
                            to='https://t.me/jackiecchn' 
                            target="_blank" 
                            className="footer__link social__tg">
                                <FaTelegram/>
                        </Link>
                        <Link
                            to='https://wa.me/79280188865'
                            target="_blank" 
                            className="footer__link social__wa">
                                <BsWhatsapp/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer