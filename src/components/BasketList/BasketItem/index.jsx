import Button from "ui/Button"
import Counter from "components/Counter"
import { useEffect, useMemo, useState } from "react"
import { FaRubleSign } from 'react-icons/fa'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux"
import { addBasketPrice, deleteProduct, removeBasketPrice } from "store/slices/basketSlice"

const BasketItem = ({item}) => {
    const [count, setCount] = useState(1)
    const [priceItem, setPriceItem] = useState(item.price)
    const basket = useSelector(state => state.basket.basket)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addBasketPrice(item.price))
        basket.forEach(elem => {
            if(elem.id === item.id) {
                setCount(elem?.count)
            }
        });
        return () => {
            dispatch(removeBasketPrice(item.price))
        }
    }, [])
    

    useMemo(() => {
        setPriceItem(count * item.price)
    }, [count])

    const increment = () => {
        setCount((num) => num + 1)
        dispatch(addBasketPrice(item.price))
    }

    const decrement = () => {
        if(count <= 1) return dispatch(deleteProduct(item.id))
        setCount((num) => num - 1);
        dispatch(removeBasketPrice(item.price))
    }

    const deleteProducts = () => {
        dispatch(removeBasketPrice(item.price * (count - 1)));
        
        return dispatch(deleteProduct(item.id))
    }

    return (
        <li className="basket__item">
            <article className="basket__article">
                <div className="basket__card">
                        <div className="basket__card-top">
                            <picture className="basket__image">
                                <img src={item.image} alt="appleByz" />
                            </picture>
                            <div className="basket__description">
                                <h3 className="basket__name">{item.name}</h3>
                                <p className="basket__price">{item.price} <FaRubleSign/></p>                                 
                            </div>
                        </div>
                        <div className="basket__card-bottom">
                            <Counter
                                clickDecrement={decrement}
                                clickIncrement={increment}
                                count={count}
                            />                             
                            <p className="basket__price">{priceItem}<FaRubleSign/></p>                                
                        </div>
                        <Button
                            className='basket__button'
                            text={<MdOutlineDeleteForever/>}
                            onClick={deleteProducts}
                        />
                </div>
            </article>
        </li>
    )
}

export default BasketItem