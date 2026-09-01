import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/config/site'
import '@/style/globals.css'

// Next.js global entry: equivalent to the Vue index.html shell plus main.js
// bootstrap. It owns site-wide metadata, styles, scripts, and the shared body.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: 'VEIN Game - Official Community Site', template: '%s | VEIN Game' },
  description: siteConfig.description,
  icons: { icon: '/favicon.ico' },
  authors: [{ name: 'VEIN Game Community' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  other: { 'theme-color': '#FF3636' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}
    {/* Google AdSense: loaded immediately, matching the legacy index.html. */}
    <Script id="google-adsense" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2318352950196721" strategy="beforeInteractive" crossOrigin="anonymous" />

    {/* A new document is used for every internal page link so the existing
        AdSense setup is loaded again for the destination page. */}
    <Script id="refresh-ads-on-internal-navigation" strategy="afterInteractive">{`document.addEventListener('click', function (event) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  var link = event.target.closest('a[href]');
  if (!link || link.target || link.hasAttribute('download')) return;

  var destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin || (destination.pathname === window.location.pathname && destination.search === window.location.search)) return;

  event.preventDefault();
  window.location.assign(destination.href);
}, true);`}</Script>

    {/* Google Analytics: retained with the legacy two-second delay after load. */}
    <Script id="google-analytics-loader" strategy="beforeInteractive">{`window.addEventListener('load', function () {
  setTimeout(function () {
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.defer = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-1TLX8Z0CR5';
    document.head.appendChild(gtagScript);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-1TLX8Z0CR5');
  }, 2000);
});`}</Script>

    {/* Popunder advertising is intentionally disabled, matching the commented legacy script:
        https://pl28266946.effectivecpmnetwork.com/4b/1d/c4/4b1dc4ee798dc7473aaa74adef19586d.js */}

    {/* Required company collection script. */}
    <Script id="company-collector" src="/collet-data.js" strategy="afterInteractive" />
    <Script id="legacy-local-storage-cleanup" strategy="afterInteractive">{`window.localStorage.removeItem('__lsv__');`}</Script>

    {/* Cloudflare Web Analytics, using the same site token as the current public site. */}
    <Script id="cloudflare-web-analytics" src="https://static.cloudflareinsights.com/beacon.min.js/v3d52b47920f24c319d37e2661827c42b1787588026925" strategy="afterInteractive" type="module" integrity="sha512-d9sL6GJLXn6fInD1+TVXhTcQOsmxeHfmHAvwGDIxp5TO+uo1fiWW7mHomMj4MLRlCsJDTqXzWLHJFFlPCEIj/A==" data-cf-beacon='{"version":"2024.11.0","token":"6a668cd512684c4c83df50062b8c3e0b","r":1}' crossOrigin="anonymous" />
  </body></html>
}
