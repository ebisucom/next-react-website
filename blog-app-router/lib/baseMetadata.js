// サイトに関する情報
import { siteMeta } from 'lib/constants'
const {
  siteTitle,
  siteDesc,
  siteLang,
  siteUrl,
  siteLocale,
  siteType,
  siteIcon,
} = siteMeta

// 汎用OGP画像
import siteImg from 'images/ogp.jpg'

// ベースとなる設定
export const baseMetadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: './',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: siteDesc,
  // icons: {
  //   icon: siteIcon,
  //   apple: siteIcon,
  // },
}

// openGraphに関する設定
export const openGraphMetadata = {
  title: siteTitle,
  description: siteDesc,
  url: siteUrl,
  siteName: siteTitle,
  images: [
    {
      url: siteImg.src,
      width: siteImg.width,
      height: siteImg.height,
    },
  ],
  locale: siteLocale,
  type: siteType,
}

// twitterに関する設定
export const twitterMetadata = {
  card: 'summary_large_image',
  title: siteTitle,
  description: siteDesc,
  images: [siteImg.src],
}
