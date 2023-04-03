/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly FIREBASE_API_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
