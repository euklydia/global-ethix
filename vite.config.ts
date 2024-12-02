import { defineConfig } from 'vite';
import svgr from '@svgr/rollup';

export default defineConfig({
    plugins: [svgr()],
});
