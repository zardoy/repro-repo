import { renderToDom } from '@zardoy/react-util'
import i18next from 'i18next'
import Backend, { HttpBackendOptions } from 'i18next-http-backend'
import { Suspense } from 'react'
import { initReactI18next } from 'react-i18next'
import App from './App'

await i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
        // lng: navigator.language.split("-")[0]!,
        lng: 'ru',
        // preload: ["ru", "en"],
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        defaultNS: 'app',
        lowerCaseLng: true,

        backend: {
            loadPath: './locales/{{lng}}.json',
            // request(options, url, payload, callback) {
            //     await fetch(url)
            // },
        } satisfies HttpBackendOptions,
        react: {
            useSuspense: false,
        },
    })

renderToDom(
    <Suspense>
        <App />
    </Suspense>,
    { strictMode: false },
)
