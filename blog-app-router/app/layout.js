import { Suspense } from 'react'

import {
  baseMetadata,
  openGraphMetadata,
  twitterMetadata,
} from 'lib/baseMetadata'

import 'styles/globals.css'
import Layout from 'components/layout'

import { siteMeta } from 'lib/constants'
const { siteLang } = siteMeta

import GoogleAnalytics from 'components/googleanalytics'

// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function RootLayout({ children }) {
  return (
    <html lang={siteLang}>
      <body>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export const metadata = {
  ...baseMetadata,
  openGraph: {
    ...openGraphMetadata,
  },
  twitter: {
    ...twitterMetadata,
  },
}
