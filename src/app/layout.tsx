import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Providers from "@/lib/providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Manrope } from "next/font/google";

const geistSans = localFont({
  src: "../components/ui/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../components/ui/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antopolis",
  description: "Best software development company in Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${manrope.className} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <Providers>{children}</Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
