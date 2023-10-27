import { UserConfig, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import dynamicImport from 'vite-plugin-dynamic-import'
import mkcert from 'vite-plugin-mkcert'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async ({ mode }:{mode: any}): Promise<UserConfig> => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const isDebug = process.env.VITE_IS_DEBUG === 'true'
  console.log('isDebug', isDebug)

  return await defineConfig({
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      }
    },
    plugins: [
      react(),
      dynamicImport({
           // `node_modules` is exclude by default, so we need to include it explicitly
          // https://github.com/vite-plugin/vite-plugin-dynamic-import/blob/v1.3.0/src/index.ts#L133-L135
        // filter (id) {
        //   if (id.includes('/node_modules/some-module')) {
        //     return true
        //   }
        // }
      }),
      basicSsl(),
      ...(isDebug
        ? [
          mkcert() // self signed certificates for development purposes
        ]
        : [])
    ],
    // resolve: {
    //   preserveSymlinks: true
    // },
    server: { 
      https: true,
      port: 5151,
     },
  })
}
