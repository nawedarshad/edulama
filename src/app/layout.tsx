import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: {
    default: "Edulama | Chat with Seniors for Placement Guidance & Resume Review",
    template: "%s | Edulama"
  },
  description: "Stop guessing your career. Chat 1:1 with seniors for placement guidance, resume review, career roadmaps, and DSA doubts. Connect with mentors from Google, Amazon, and Microsoft for just ₹19.",
  keywords: [
    "career guidance", "resume review", "placement preparation", "career roadmap", 
    "talk to seniors", "ask doubts online", "coding interview prep", "SDE mentorship", 
    "internship guidance", "DSA doubts chat", "1:1 career call", "college senior guidance",
    "placement roadmap", "resume optimization", "career chat with seniors"
  ],
  authors: [{ name: "Edulama Team" }],
  creator: "Edulama",
  publisher: "Edulama",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://edulama.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Edulama | 1:1 Mentorship from Top Industry Seniors',
    description: 'Stop guessing. Start growing. Connect with seniors from Google, Amazon, and Microsoft to clear your career doubts for just ₹19.',
    url: 'https://edulama.com',
    siteName: 'Edulama',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Edulama Mentorship Platform',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edulama | Career Mentorship by Seniors',
    description: 'Get direct guidance on coding, DSA, and placements from seniors who have already achieved your goals.',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data for Advanced SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Edulama",
              "url": "https://edulama.com",
              "logo": "https://edulama.com/logo.png",
              "description": "Edulama connects students with industry seniors for 1:1 mentorship, DSA prep, and placement guidance.",
              "sameAs": [
                "https://www.linkedin.com/company/edulama-pvt-ltd",
                "https://www.instagram.com/edulama.chat"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7903337982",
                "contactType": "customer service",
                "email": "admin@edulama.com",
                "areaServed": "IN",
                "availableLanguage": "English"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Career Mentorship",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Edulama",
                "image": "https://edulama.com/hero-interview.png"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Mentorship Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "1:1 Mentorship Session"
                    },
                    "price": "19.00",
                    "priceCurrency": "INR"
                  }
                ]
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How can I get career guidance from seniors?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can connect with seniors from Google, Amazon, and Microsoft through Edulama's 1:1 chat and call sessions for personalized roadmaps and placement guidance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where can I get my resume reviewed by experts?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Edulama offers professional resume reviews where industry seniors provide detailed feedback and ATS optimization for your career success."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I ask coding and DSA doubts to seniors?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Edulama provides a direct chat platform to ask your coding and DSA doubts to experienced seniors who have already cracked top tech companies."
                  }
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              "itemReviewed": {
                "@type": "Service",
                "name": "Edulama Mentorship"
              },
              "ratingValue": "4.9",
              "reviewCount": "1250"
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
        <FloatingActions />
        <SpeedInsights />
      </body>
    </html>
  );
}
