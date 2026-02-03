import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig(({ mode }) => {
  const isSingleFile = mode === 'singlefile'
  
  return {
    plugins: isSingleFile ? [viteSingleFile({
      removeViteModuleLoader: true
    })] : [],
    base: './',
    build: {
      outDir: isSingleFile ? 'dist-singlefile' : 'dist',
      // For single file builds, inline all assets
      ...(isSingleFile && {
        assetsInlineLimit: Infinity,
        // Don't copy public folder for single file (favicon will need to be data URI in HTML)
        copyPublicDir: false,
      }),
    },
  }
})
