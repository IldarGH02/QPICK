import { likes } from "assets/header/likes"
import Button from "ui/Button"

const Likes = () => {
    return (
        <Button
            className='header__likes header__button header__item'
            text={likes}
        />
    )
}

export default Likes