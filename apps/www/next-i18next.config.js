const ChainedBackend = require('i18next-chained-backend')
const FSBackend = require('i18next-fs-backend/cjs')
const LocizeBackend = require('i18next-locize-backend/cjs')

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
    },
    backend: {
        backends: [
            FSBackend,
            LocizeBackend
        ],
        backendOptions: [{ // make sure public/locales_cache/en and public/locales_cache/de exists
            loadPath: './public/locales/{{lng}}/{{ns}}.json',
            addPath: './public/locales/{{lng}}/{{ns}}.json',
            expirationTime: 60 * 60 * 1000 // all 60 minutes the cache should be deleted
        }, {
            projectId: 'd3b405cf-2532-46ae-adb8-99e88d876733',
            referenceLng: 'en'
        }]
    },
    use: [ChainedBackend],
    ns: ['common', 'footer', 'second-page'], // the namespaces needs to be listed here, to make sure they got preloaded
    serializeConfig: false, // because of the custom use i18next plugin
    // debug: true,
}