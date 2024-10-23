import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        ws: true,
          // eslint-disable-next-line no-unused-vars
          configure: (proxy, _options) => {
            // eslint-disable-next-line no-unused-vars
            proxy.on('error', (err, _req, _res) => {
              console.log('proxy error', err);
            });
            // eslint-disable-next-line no-unused-vars
            proxy.on('proxyReq', (proxyReq, req, _res) => {
              console.log('Sending Request to the Target:', req.method, req.url);
            });
            // eslint-disable-next-line no-unused-vars
            proxy.on('proxyRes', (proxyRes, req, _res) => {
              console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
            });
          },
      },
    },
  },
});
