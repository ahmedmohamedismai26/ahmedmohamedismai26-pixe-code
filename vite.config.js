const react = require('@vitejs/plugin-react');

module.exports = {
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
