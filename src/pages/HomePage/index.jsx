import TitlePage from "components/TitlePage";
import { routeMain } from "./routes";
import { routeMain as routeProductPage } from "pages/ProductsPage";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home__content">
                    <TitlePage
                        title='Главная страница ради главной страницы'
                    />
                    <Link to={routeProductPage()} className="home__link">Перейдите в список товаров</Link>
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default HomePage