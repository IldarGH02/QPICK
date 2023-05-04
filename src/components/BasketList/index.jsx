import BasketItem from "./BasketItem"

const BasketList = ({list, className}) => {
    return (
        <ul className={className}>
            {list.length > 0 ? list.map((product) => {
                return <BasketItem
                    item={product}
                    key={product.id}
                />
            }) : <></>}
        </ul>
    )
}

export default BasketList