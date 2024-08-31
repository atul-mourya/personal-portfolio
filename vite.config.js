import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        additionalData: ` // just variables loaded globally
          @import "./sass/vendors/bootstrap.scss";
          @import "./sass/vendors/lightGallary";
          @import "./sass/abstracts/mixins";
          @import "./sass/abstracts/variables";
          @import "./sass/abstracts/helpers";
          @import "./sass/base/base";
          @import "./sass/base/typography";
          @import "./sass/components/buttons";
          @import "./sass/layout/footer";
          @import "./sass/layout/sections";
          @import "./sass/sections/about";
          @import "./sass/sections/contact";
          @import "./sass/sections/hero";
          @import "./sass/sections/projects";
        `
      }
    }
  }
})
