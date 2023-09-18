import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

//import CodePush from 'react-native-code-push';
import {I18nManager} from 'react-native';
import StaticImages from '../../constants/StaticImages';

export const langAdapter = createEntityAdapter();

const initialState = langAdapter.getInitialState({
  langs: {
    en: {
      key: 'en',
      flag: StaticImages.langImages.en,
      name: 'English',
      slug: 'EN',
      file: '../languages/en.json',
      direction: 'ltr',
    },
    fr: {
      key: 'fr',
      flag: StaticImages.langImages.fr,
      name: 'France',
      slug: 'FR',
      file: '../languages/fr.json',
      direction: 'ltr',
    },
    de: {
      key: 'de',
      flag: StaticImages.langImages.de,
      name: 'German',
      slug: 'DE',
      file: '../languages/de.json',
      direction: 'ltr',
    },
    es: {
      key: 'es',
      flag: StaticImages.langImages.es,
      name: 'Spanish',
      slug: 'ES',
      file: '../languages/es.json',
      direction: 'ltr',
    },
    ru: {
      key: 'ru',
      flag: StaticImages.langImages.ru,
      name: 'Russian',
      slug: 'RU',
      file: '../languages/ru.json',
      direction: 'ltr',
    },
    tr: {
      key: 'tr',
      flag: StaticImages.langImages.tr,
      name: 'Turkish',
      slug: 'TR',
      file: '../languages/tr.json',
      direction: 'ltr',
    },
    ar: {
      key: 'ar',
      flag: StaticImages.langImages.ar,
      name: 'Arabic',
      slug: 'AR',
      file: '../languages/ar.json',
      direction: 'rtl',
    },
    ua: {
      key: 'uk',
      flag: StaticImages.langImages.uk,
      name: 'Ukrainian',
      slug: 'UK',
      file: '../languages/uk.json',
      direction: 'ltr',
    },
  },
  selectedLang: {
    key: 'en',
    flag: StaticImages.langImages.en,
    name: 'English',
    slug: 'EN',
    file: '../languages/en.json',
    direction: 'ltr',
  },
  isRTL: false,
});
const langSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    setSelectedLang(state, action) {
      state.selectedLang = action.payload;

      if (action.payload.direction === 'rtl') {
        if (state.isRTL === false) {
          setTimeout(() => {
            I18nManager.forceRTL(true);
            //CodePush.restartApp();
          }, 2000);

          state.isRTL = true;
        }
      } else {
        if (state.isRTL === true) {
          setTimeout(() => {
            I18nManager.forceRTL(false);
            //CodePush.restartApp();
          }, 2000);

          state.isRTL = false;
        }
      }
    },

    setIsRTL(state, action) {
      state.isRTL = action.payload;
    },
  },
});

export const {setSelectedLang, setIsRTL, setIsReloading} = langSlice.actions;
export default langSlice.reducer;
