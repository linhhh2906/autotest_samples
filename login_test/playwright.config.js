// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // mở browser để dễ nhìn
    baseURL: 'https://www.saucedemo.com'
  }
});