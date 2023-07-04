// サイトに関する情報
import { siteMeta } from 'lib/constants'
const { siteUrl } = siteMeta

import { getAllSlugs, getAllCategories } from 'lib/api'

export default async function sitemap() {
  // 各記事のURL
  const posts = await getAllSlugs()
  const postFields = posts.map((post) => {
    return {
      url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
      lastModified: new Date(),
    }
  })

  // 各カテゴリーインデックスのURL
  const cats = await getAllCategories()
  const catFields = cats.map((cat) => {
    return {
      url: new URL(`/blog/category/${cat.slug}`, siteUrl).toString(),
      lastModified: new Date(),
    }
  })

  return [
    {
      url: new URL(siteUrl).toString(),
      lastModified: new Date(),
    },
    {
      url: new URL('/about', siteUrl).toString(),
      lastModified: new Date(),
    },
    ...postFields,
    ...catFields,
  ]
}
