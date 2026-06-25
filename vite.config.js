const react = require('@vitejs/plugin-react');

module.exports = {
  base: '/ahmedmohamedismai26-pixe-code/',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
