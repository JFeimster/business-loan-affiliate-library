import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Business Loan Affiliate Library'

const description =
  'Guides, comparisons, and playbooks for monetizing business funding traffic.'

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  applicationName: 'Business Loan Affiliate Library',
  title,
  description,
  category: 'finance',
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  openGraph: {
    title,
    description,
    url,
    siteName: 'Business Loan Affiliate Library',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
