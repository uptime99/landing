const { i18n } = require('./next-i18next.config');

module.exports = {
  "env": {
    "production": {
      "plugins": [
        "transform-remove-console",
        "lodash",
        [
          "babel-plugin-import",
          {
            "libraryName": "@material-ui/core",
            "libraryDirectory": "esm",
            "camel2DashComponentName": false
          },
          "core"
        ],
        [
          "babel-plugin-import",
          {
            "libraryName": "@material-ui/icons",
            "libraryDirectory": "esm",
            "camel2DashComponentName": false
          },
          "icons"
        ],
      ]
    }
  },
  "plugins": [

    [
      "i18next-extract",
      {
        locales: i18n.locales,
        defaultNS: i18n.defaultNS,
        outputPath: `${i18n.localePath}/${i18n.localeStructure.replace('lng', 'locale')}.${i18n.localeExtension}`,
        keyAsDefaultValue: true,
        discardOldKeys: false,
        keySeparator: null,
      }
    ]
  ],
  "presets": [
    "next/babel"
  ]
}
