import Button from "ui/Button"
import { basket } from "assets/header/basket.js"
import { useNavigate } from "react-router-dom"
import { routeMain as routeBasketPage } from "pages/BasketPage"
import { useSelector } from "react-redux"

const Basket = () => {
    const navigate = useNavigate()
    const count = useSelector(state => state.basket.basket)

    return (
        <div className="header__basket">
            <Button
                className='header__button basket__button header__item'
                text={basket}
                onClick={() => navigate(routeBasketPage())}
            />
            <div className="header__count">{count.length > 0 ? <span>{count.length}</span> : null}</div>
        </div>

    )
}

export default Basket