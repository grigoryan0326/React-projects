const { addSassLoader } = require("customize-cra")

module.exports = function override(config) {
  // Добавляем автоматический импорт файла variables.scss во все SCSS-файлы
  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf) {
      rule.oneOf.forEach((oneOfRule) => {
        if (oneOfRule.use) {
          oneOfRule.use.forEach((loader) => {
            if (loader.loader && loader.loader.includes("sass-loader")) {
              loader.options.additionalData = `@import "./src/styles/variables.scss";`
            }
          })
        }
      })
    }
    return rule
  })
  return config
}
