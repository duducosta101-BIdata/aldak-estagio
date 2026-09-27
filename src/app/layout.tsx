import type { Metadata } from "next";
import {
  Zalando_Sans,
  Zalando_Sans_Expanded,
  Zalando_Sans_SemiExpanded,
} from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const zalandoSans = Zalando_Sans({
  variable: "--font-zalando",
  subsets: ["latin"],
  adjustFontFallback: false,
  weight: ["400", "500", "600", "700"],
});

const zalandoExpanded = Zalando_Sans_Expanded({
  variable: "--font-zalando-expanded",
  subsets: ["latin"],
  adjustFontFallback: false,
  weight: ["600", "700"],
});

const zalandoSemiExpanded = Zalando_Sans_SemiExpanded({
  variable: "--font-zalando-semi",
  subsets: ["latin"],
  adjustFontFallback: false,
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    images: [{ url: site.meta.ogImage, width: 1366, height: 370 }],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.meta.lang}
      className={`${zalandoSans.variable} ${zalandoExpanded.variable} ${zalandoSemiExpanded.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
