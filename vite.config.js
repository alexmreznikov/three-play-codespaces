// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Set the base path for deployment. 
  // Replace 'your-repository-name' with the actual name of your GitHub repository.
  base: '/three-play-codespaces/', 

  // Other Vite configurations (plugins, etc.) might be here
  build: {
    // Optional: Change output directory if needed, default is 'dist'
    // outDir: 'dist' 
  }
});