import { routeMain } from "./routes"

const NotFoundPage = () => {
    return (
        <section className="notFound">
            <div className="container">
                <div className="notFound__content">
                    <h1 className="notFound__title">
                        УПС... Страница пока не создана
                    </h1>
                </div>
            </div>
        </section>
    )
}  

export {routeMain}

export default NotFoundPage