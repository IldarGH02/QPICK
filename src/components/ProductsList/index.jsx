import ProductItem from "./ProductItem"

const ProductsList = ({list, className}) => {
    return (
        <ul className={className}>
            {list.length > 0 ? list.map((product) => {
                return <ProductItem
                    item={product}
                    key={product.id}
                />
            }) : <></>}
        </ul>
    )
}

export default ProductsList