import {defineConfig} from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: 'https://www.amazon.com',
        viewportWidth: 1920,
        viewportHeight: 1080,
        defaultCommandTimeout: 50000,
        numTestsKeptInMemory: 5,
        responseTimeout: 50000,
        pageLoadTimeout: 50000,
        reporter: 'mochawesome',
        reporterOptions: {
            reportDir: 'cypress/results',
            overwrite: false,
            html: false,
            json: true
        },
    },
});
