import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Shadows_Into_Light, Epilogue, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const shadowsIntoLight = Shadows_Into_Light({
  variable: "--font-shadows-into-light",
  subsets: ["latin"],
  weight: "400",
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barbarika",
  description: "Created By Team Engineerian",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/Barbarika.ico",
    shortcut: "/Barbarika.ico",
    apple: "/Barbarika.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Barbarika.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${shadowsIntoLight.variable} ${epilogue.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
