import Basket from "components/Basket"
import Likes from "ui/Likes"
import Logo from "ui/Logo"
import { NavLink } from "react-router-dom"
import { routeMain as routeProductsPage} from "pages/ProductsPage"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <NavLink to='/' style={{textDecoration: 'none'}}>
                        <Logo
                            logo='QPICK'
                        />
                    </NavLink>
                    <div className="header__items">
                        <NavLink to={routeProductsPage()} className='header__link header__item'>Продукция</NavLink>
                        <Likes/>
                        <Basket/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header