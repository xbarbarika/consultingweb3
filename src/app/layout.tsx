import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, DM_Sans, Shadows_Into_Light, Epilogue, Inter, Press_Start_2P, Tourney, Numans } from "next/font/google";
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

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  weight: "400",
  subsets: ["latin"],
});

const tourney = Tourney({
  variable: "--font-tourney",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const numans = Numans({
  variable: "--font-numans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barbarika",
  description: "Created By Team Engineerian",
  icons: {
    icon: "/Barbarika.ico",
    shortcut: "/Barbarika.ico",
    apple: "/Barbarika.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${shadowsIntoLight.variable} ${epilogue.variable} ${inter.variable} ${pressStart2P.variable} ${tourney.variable} ${numans.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
