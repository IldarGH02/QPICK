import { useEffect } from "react"
import TitlePage from "components/TitlePage"
import ProductsList from "components/ProductsList"

import { routeMain } from "./routes"

import { useDispatch, useSelector } from "react-redux"
import { setWired, setWireless } from "store/slices/productsSlice"

const ProductsPage = () => {
    const wired = useSelector(state => state.products.wired)
    const wireless = useSelector(state => state.products.wireless)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setWired())
        dispatch(setWireless())
    }, [])

    return (
        <section className="products">
            <div className="container">
                <div className="products__content">
                    <TitlePage
                        title='Наушники'
                    />
                    {wired ? <ProductsList className='products__list wired__list' list={wired}/> : <></>}
                    <TitlePage
                        title='Беспроводные наушники'
                    />
                    {wireless ? <ProductsList className='products__list wireless__list' list={wireless}/> : <></>}
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default ProductsPage