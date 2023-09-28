import fs from 'fs'
import path from 'path'
import index from '..'

const files = { ...{ index } }

const rulesDir = path.join(__dirname, '../rules')
describe('Config Tests', () => {
  fs.readdirSync(rulesDir).forEach((name) => {
    // eslint-disable-next-line import/no-dynamic-require
    files[name] = require(path.join(rulesDir, name)) // eslint-disable-line global-require
  })

  Object.keys(files).forEach((name) => {
    const config = files[name]

    test(`${name}: does not reference react`, () => {
      // Check for React plugin
      const hasReactPlugin = config.plugins && config.plugins.includes('react')
      expect(hasReactPlugin).toBeFalsy()

      // Check for React rules
      const reactRuleIds = Object.keys(config.rules || {})
        .filter((ruleId) => ruleId.startsWith('react/'))
      expect(reactRuleIds).toEqual([])
    })
  })
})
