import Button from "ui/Button"

import { useSelector } from "react-redux"
import { FaRubleSign } from 'react-icons/fa'


const FullPrice = (props) => {
    const fullPrice = useSelector(state => state.basket.basketPrice)

    return (
        <div className="basket__fullprice">
            <div className="fullprice__content">
                <h4 className="fullprice__title">Итого</h4>
                <div className="fullprice__count">
                    <FaRubleSign/> {fullPrice}
                </div>
            </div>
            <Button
                className='fullprice__button'
                text='Перейти к оформлению'
                onClick={props.onClick}
            />
        </div>
    )
}

export default FullPrice