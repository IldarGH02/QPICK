import Button from "ui/Button"
import { useEffect, useState } from "react"
import { FaRubleSign } from 'react-icons/fa'
import { MdGrade } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "store/slices/basketSlice"

const ProductItem = ({item}) => {
    const [product, setProduct] = useState(false)
    const basket = useSelector(state => state.basket.basket)
    const dispatch = useDispatch()

    useEffect(() => {
        basket.forEach(elem => {
            if(elem.id === item.id) {
                setProduct(true)
            }
        });
    }, [basket, item.id])

    const actions = () => {
        if(!product) {
            dispatch(addProduct({
                ...item,
                count: 1
            }))
            setProduct(true)
        }
    }

    return (
        <li className="product__item">
            <article className="product__article">
                <div className="product__card">
                    <div className="product__content">
                        <picture className="product__image">
                            <img src={item.image} alt="appleByz" />
                        </picture>
                        <div className="product__description">
                            <div className="product__card-left">
                                <h3 className="product__name">{item.name}</h3>
                                <p className="product__grade"><MdGrade/> {item.grade}</p>
                            </div>
                            <div className="product__card-right">
                                <p className="product__price">{item.price} <FaRubleSign/></p>
                                <Button
                                    className='product__button'
                                    text='Купить'
                                    onClick={actions}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    )
}

export default ProductItem