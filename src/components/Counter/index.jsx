import Button from 'ui/Button'
import { AiFillPlusCircle } from 'react-icons/ai'
import { AiFillMinusCircle } from 'react-icons/ai'

const Counter = (props) => {
    return (
        <div className="basket__counter">
            <Button
                className='basket__counter-decrement basket__counter-button'
                text={<AiFillMinusCircle/>}
                onClick={props.clickDecrement}
            />
            <div className="basket__count">{props.count}</div>
            <Button
                onClick={props.clickIncrement}
                className='basket__counter-increment basket__counter-button'
                text={<AiFillPlusCircle/>}
            />
        </div>
    )
}

export default Counter