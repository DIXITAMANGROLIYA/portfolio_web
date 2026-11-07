import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://dixita-portfolio.web.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dixita Mangroliya | Mobile Application Developer (Flutter & Android)',
    template: '%s | Dixita Mangroliya',
  },
  description:
    'Dixita Mangroliya is a Mobile Application Developer with 2.5+ years of experience specializing in Flutter, Dart, BLoC State Management, Native Android (Kotlin), and Firebase in Surat, India.',
  keywords: [
    'Dixita Mangroliya',
    'Dixita Mangroliya Flutter',
    'Dixita Mangroliya Portfolio',
    'Dixita Mangroliya Resume',
    'Dixita Mangroliya Developer',
    'Flutter Developer Surat',
    'Mobile Application Developer',
    'Android Developer Kotlin',
    'BLoC State Management',
    'Square Infosoft',
  ],
  authors: [{ name: 'Dixita Mangroliya', url: siteUrl }],
  creator: 'Dixita Mangroliya',
  publisher: 'Dixita Mangroliya',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
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
    title: 'Dixita Mangroliya | Mobile Application Developer (Flutter & Android)',
    description:
      'Official portfolio of Dixita Mangroliya - Flutter & Native Android Developer with 2.5+ years experience building production apps.',
    url: siteUrl,
    siteName: 'Dixita Mangroliya Portfolio',
    images: [
      {
        url: `${siteUrl}/profile_image.png`,
        width: 1200,
        height: 630,
        alt: 'Dixita Mangroliya - Mobile Application Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dixita Mangroliya | Mobile Application Developer',
    description:
      'Official portfolio of Dixita Mangroliya - Flutter & Native Android Developer',
    images: [`${siteUrl}/profile_image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dixita Mangroliya',
    alternateName: 'Dixita H. Mangroliya',
    url: siteUrl,
    image: `${siteUrl}/profile_image.png`,
    jobTitle: 'Mobile Application Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Square Infosoft',
    },
    sameAs: [
      'https://linkedin.com/in/dixitamangroliya12',
      'https://github.com/DIXITAMANGROLIYA',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Sardar Vallabhbhai Patel Institute of Technology (GTU)',
    },
    knowsAbout: [
      'Flutter',
      'Dart',
      'Android Development',
      'Kotlin',
      'BLoC State Management',
      'Firebase',
      'REST APIs',
      'Mobile App Architecture',
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
