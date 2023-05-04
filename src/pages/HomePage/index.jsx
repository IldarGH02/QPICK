import TitlePage from "components/TitlePage";
import { routeMain } from "./routes";

const HomePage = () => {
    return (
        <div className="container">
            <TitlePage
                title='Главная страница ради главной страницы'
            />
        </div>
    )
}

export {routeMain}

export default HomePage