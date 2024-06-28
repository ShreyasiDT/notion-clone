import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notely",
  description:
    "Your ultimate connected productivity hub: where better, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/logoBright1.png",
        href: "/logoBright1.png",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/logoDark1.png",
        href: "/logoDark1.png",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
