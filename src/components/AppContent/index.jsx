import { Routes, Route } from "react-router-dom"

import ProductsPage, {routeMain as routeProductsPage} from "pages/ProductsPage"
import BasketPage, {routeMain as routeBasketPage} from "pages/BasketPage"
import ContactsPage, { routeMain as routeContactsPage} from "pages/ContactsPage"
import NotFoundPage, {routeMain as routeNotFound} from "pages/NotFoundPage"
import HomePage from "pages/HomePage"

import Layout from "pages/Layout"


const AppContent = () => {
    return (
        <div className="mainWrapper">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route
                        path={routeProductsPage()} element={<ProductsPage/>}
                    />
                    <Route
                        path={routeBasketPage()} element={<BasketPage/>}
                    />
                    <Route
                        path={routeContactsPage()} element={<ContactsPage/>}
                    />
                    <Route
                        path={routeNotFound()} element={<NotFoundPage/>}
                    />
                </Route>
            </Routes>
        </div>
    )
}

export default AppContent