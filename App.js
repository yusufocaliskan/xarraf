import 'intl';
import 'intl/locale-data/jsonp/en';

import {Provider} from 'react-redux';
import AppNavigator from './src/navigations/AppNavigator';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import i18next from 'i18next';
import resources from './src/constants/languages/i18n';
import {initReactI18next, I18nextProvider} from 'react-i18next';

//Set Language..
i18next.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

//Start up
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <AppNavigator />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
