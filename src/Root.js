import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default Root;