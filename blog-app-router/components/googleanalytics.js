'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import * as gtag from 'lib/gtag'

function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    gtag.pageview(url)
  }, [pathname, searchParams])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
