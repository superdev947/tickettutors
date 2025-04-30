import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from 'App';
import { BASE_PATH } from 'config';
import * as serviceWorker from 'serviceWorker';
import reportWebVitals from 'reportWebVitals';
import { ConfigProvider } from 'contexts/ConfigContext';

import 'assets/scss/style.scss';

ReactDOM.render(
    <ConfigProvider>
        <BrowserRouter basename={BASE_PATH}>
            <App />
        </BrowserRouter>
    </ConfigProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals();
