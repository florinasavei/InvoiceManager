import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  testMatch: "**/*.spec.ts",

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: 1,
  reporter: "html",
  use: {
    actionTimeout: 0,
    baseURL:
      process.env.E2E_APP_HOST ??
      "https://qa-invoice-manager-florin-asavei.netlify.app",
    trace: "off",
    viewport: { width: 1366, height: 768 },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: ["--enable-webgl", "--use-gl=egl"],
          // slowMo: 1500 // for debug purposes, slow down each step execution by 1500 milliseconds,
        },
        contextOptions: {
          ignoreHTTPSErrors: true,
        },
      },
    },
  ],
};

export default config;
