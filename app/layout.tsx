import type { Metadata } from "next";
import "flowbite";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Serenity Therapeutic Massage | Relax. Renew. Restore. | York SC",
  description:
    "Experience personalized massage therapy in York, SC. Relieve stress, ease tension, and renew your body with our professional massage services.",
  openGraph: {
    type: "website",
    url: "https://yorkmassage.net",
    title: "Serenity Therapeutic Massage  | Relax. Renew. Restore. | York SC",
    description:
      "Experience personalized massage therapy in York, SC. Relieve stress, ease tension, and renew your body with our professional massage services.",
    images: [
      {
        url: "https://yorkmassage.net/images/massage.jpg",
        width: 1200,
        height: 630,
        alt: "Relaxing massage therapy room in York, SC",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
