module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
}
