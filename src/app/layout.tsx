import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mursaleen",
  keywords: [
    "Mursaleen | Habibul Mursaleen | S M Habibul Mursaleen Chowdhury | Mursaleen Chowdhury | chowdhurymursaleen | habibulmursaleen | Chowdhury",
    "Portfolio",
    "Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GraphQL",
    "Apollo Client",
    "REST API",
  ],
  description: "Portfolio of Mursaleen",
  openGraph: {
    title:
      "Mursaleen | Habibul Mursaleen | S M Habibul Mursaleen Chowdhury | Mursaleen Chowdhury | chowdhurymursaleen | habibulmursaleen | Chowdhury",
    description:
      "Explore the projects and work of Mursaleen (Mursaleen | Habibul Mursaleen | S M Habibul Mursaleen Chowdhury | Mursaleen Chowdhury | chowdhurymursaleen | habibulmursaleen | Chowdhury), a software engineer and developer.",
    type: "website",
    url: "https://portfolio-mursaleen.netlify.app/",
    siteName: "portfolio-mursaleen",
  },
};

// ReactGA.initialize("G-RE5M7ZL6T3");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RE5M7ZL6T3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RE5M7ZL6T3', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://portfolio-mursaleen.netlify.app/",
              "@type": "Person",
              name: "Mursaleen",
              alternateName:
                "Habibul Mursaleen, S M Habibul Mursaleen Chowdhury, Mursaleen Chowdhury",
              jobTitle: "Software Developer",
              url: "https://portfolio-mursaleen.netlify.app/",
              sameAs: [
                "https://www.linkedin.com/in/habibulmursaleen",
                "https://github.com/habibulmursaleen",
              ],
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class" // Ensures class-based dark/light mode support
          defaultTheme="dark" // Set default theme to dark
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-RE5M7ZL6T3" />
    </html>
  );
}
