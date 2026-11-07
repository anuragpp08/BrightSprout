import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getDictionary } from "@/lib/i18n";
import { fraunces, nunito } from "@/lib/fonts";
import "./globals.css";

const dictionary = getDictionary("en");

export const metadata: Metadata = {
  metadataBase: new URL(dictionary.site.url),
  title: {
    default: dictionary.site.title,
    template: `%s · ${dictionary.site.name}`,
  },
  description: dictionary.site.description,
  applicationName: dictionary.site.name,
  openGraph: {
    title: dictionary.site.title,
    description: dictionary.site.description,
    locale: dictionary.site.locale,
    type: "website",
    siteName: dictionary.site.name,
    images: [
      {
        url: "/images/hero-placeholder.png",
        width: 1200,
        height: 900,
        alt: dictionary.home.hero.imageAlt,
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${nunito.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2"
        >
          {dictionary.site.skipToContent}
        </a>
        <Header content={dictionary.site} navigation={dictionary.navigation} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer content={dictionary.footer} logoAlt={dictionary.site.logoAlt} />
      </body>
    </html>
  );
}
