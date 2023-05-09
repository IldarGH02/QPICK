import TitlePage from "components/TitlePage"
import { routeMain } from "./routes"
import { Link } from "react-router-dom"

const ContactsPage = () => {
    return (
        <section className="contacts">
            <div className="container">
                <TitlePage
                    title='Контакты'
                />
                <div className="contacts__content">
                    <ul className="contacts__items">
                        <li className="contacts__item">
                            <Link to='https://vk.com/widbiw' className="contacts__link">
                                ВКонтакте
                            </Link>
                        </li>
                        <li className="contacts__item">
                            <Link to='https://t.me/jackiecchn' className="contacts__link">
                                Telegram
                            </Link>
                        </li>
                        <li className="contacts__item">
                            <Link to='mailto:kooooooffe@gmail.com' className="contacts__link">
                                Email
                            </Link>
                        </li>
                        <li className="contacts__item">
                            <Link to='https://wa.me/79280188865' className="contacts__link">
                                WhatsApp
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default ContactsPage