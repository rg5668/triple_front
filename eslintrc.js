const createConfig = require('@titicaca/eslint-config-triple/create-config')

// module.exports = createConfig({ type: "frontend" });
//module.exports = createConfig({ type: "frontend", project: "./tsconfig.json" });
module.exports = createConfig({ type: 'frontend' })
module.exports = createConfig({ type: 'node', project: './tsconfig.json' })
