import { BrowserRouter } from 'react-router-dom';
import '../../scss/index.scss'
import AppContent from 'components/AppContent';
import { Provider } from 'react-redux';
import {store, persistor} from 'store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <AppContent/>
                </PersistGate>
            </Provider>
        </BrowserRouter>   
    )
}

export default App;
