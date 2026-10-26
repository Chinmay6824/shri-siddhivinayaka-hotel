import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://shri-siddhivinayaka-home-food.vercel.app'),
  title: 'Shri Siddhivinayaka Hotel & Home Food | Best Hotel & Seafood in Gokarna',
  description:
    'Discover Shri Siddhivinayaka Hotel & Home Food in Ganjigadde, Gokarna. Rated for authentic coastal seafood thalis, kingfish fry, homestay ambience, and warm Karavali hospitality.',
  applicationName: 'Shri Siddhivinayaka Hotel Gokarna',
  authors: [{ name: 'Shri Siddhivinayaka Hotel' }],
  creator: 'Shri Siddhivinayaka Hotel',
  publisher: 'Shri Siddhivinayaka Hotel',
  keywords: [
    'best hotel in gokarna',
    'hotels in gokarna',
    'hotel in gokarna',
    'gokarna hotel',
    'gokarna hotels near beach',
    'shri siddhivinayaka hotel',
    'shri siddhivinayaka home food',
    'best seafood restaurant in gokarna',
    'best home food in gokarna',
    'gokarna fish thali',
    'gokarna kingfish thali',
    'ganjigadde hotel gokarna',
    'homestay in gokarna',
    'budget hotel in gokarna',
    'places to eat in gokarna',
    'kudle beach hotel',
    'om beach hotel gokarna',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Shri Siddhivinayaka Hotel & Home Food | Gokarna',
    description:
      'A little Gokarna. A lot like home. Authentic coastal seafood, Kingfish thali, and peaceful homestay stay in Ganjigadde, Gokarna.',
    siteName: 'Shri Siddhivinayaka Hotel & Home Food',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/food/kingfish-thali.jpg',
        width: 1200,
        height: 630,
        alt: 'Shri Siddhivinayaka Hotel Gokarna - Kingfish Thali and Dining',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Siddhivinayaka Hotel & Home Food | Gokarna',
    description: 'A little Gokarna. A lot like home. Fresh coastal food and serene stay in Ganjigadde, Gokarna.',
    images: ['/images/food/kingfish-thali.jpg'],
  },
  icons: { icon: { url: '/icon.svg', type: 'image/svg+xml' } },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f8f6ef', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`light ${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

