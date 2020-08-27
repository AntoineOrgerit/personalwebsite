/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './translations/en.json';
import translationFR from './translations/fr.json';

const resources = {
    fr: {
        translation: translationFR
    },
    en: {
        translation: translationEN
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        load: 'languageOnly',
        fallbackLng: 'en',
        useSuspense: false,
        /*debug: true,*/
        interpolation: {
            escapeValue: false,
        }
    });
