import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import MillionLint from "@million/lint";

export default defineConfig({
  plugins: [react(), MillionLint.vite({ auto: true })],
});
